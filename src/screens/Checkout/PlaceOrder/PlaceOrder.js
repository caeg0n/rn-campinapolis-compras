import { DEV_API_BASE, PROD_API_BASE } from '@env';

import React from 'react';
import { Box, Text, Button } from '@src/components';
import { OrderSuccessModal } from './SuccessOrderModal';
import { OrderErrorModal } from './ErrorOrderModal';
import { OrderFailModal } from './FailOrderModal';
import { formatCurrency } from '@src/utils';
import { useSelector } from 'react-redux';
import { CartContext } from '@src/cart';

if (__DEV__) {
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_opened_organizations';
} else {
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_opened_organizations';
}

const getAllOpenedOrganizations = async () => {
  let jsonData = {};
  let response = await fetch(GET_ALL_OPENED_ORGANIZATIONS_URL);
  let json = await response.json();
  jsonData = json;
  return jsonData;
};

function findMissingObjects(sourceArray, targetArray, organizationObject) {
  const sourceIDs = sourceArray.map((item) => item.id);
  const missingIDs = targetArray.filter((id) => !sourceIDs.includes(id));
  const missingObjects = [];
  for (const category in organizationObject) {
    for (const org of organizationObject[category]) {
      if (missingIDs.includes(org.id)) {
        missingObjects.push(org);
      }
    }
  }
  return missingObjects;
}

async function isOrganizationOpen(cartItems, allOrganizations) {
  const organizationsIds = cartItems.map((item) => item.dish.organization_id);
  const allOpenedOrganizations = await getAllOpenedOrganizations();
  const allClosedOrganizations = findMissingObjects(
    allOpenedOrganizations,
    organizationsIds,
    allOrganizations,
  );
  if (allClosedOrganizations.length > 0) return allClosedOrganizations;
  else return true;
}

async function isOrderReady(
  cartItems,
  selected_address,
  payment_method,
  allOrganizations,
) {
  var status = {};
  const closedOrganizations = await isOrganizationOpen(
    cartItems,
    allOrganizations,
  );
  if (closedOrganizations !== true) {
    status.isOrganizationOpen = false;
    status.closedOrganizations = closedOrganizations;
    return status;
  }
  if (!(cartItems.length > 0)) {
    status.cartItems = null;
    return status;
  }
  if (!(selected_address.id > 0)) {
    status.selected_address = null;
    return status;
  }
  if (!(payment_method.id > 0)) {
    status.payment_method = null;
    return status;
  }
  if (
    !(status.isOrganizationOpen === false) &&
    !(status.cartItems === null) &&
    !(status.selected_address === null) &&
    !(status.payment_method === null)
  ) {
    status.success = true;
    return status;
  }

  return status;
}

export const PlaceOrder = ({ totalPrice, shippingFeeSum }) => {
  const { all_organizations } = useSelector((state) => state.userReducer);
  const { selected_address } = useSelector((state) => state.sessionReducer);
  const { selected_payment_method } = useSelector(
    (state) => state.sessionReducer,
  );
  const { cartItems } = React.useContext(CartContext);
  const [isSuccessOrderModalVisible, setIsSuccessOrderModalVisible] =
    React.useState(false);
  const [isErrorOrderModalVisible, setIsErrorOrderModalVisible] =
    React.useState(false);
  const [isFailOrderModalVisible, setIsFailOrderModalVisible] =
    React.useState(false);
  const [modalError, setModalError] = React.useState({});

  const onPlaceOrderButtonPress = async () => {
    const orderReadyStatus = await isOrderReady(
      cartItems,
      selected_address,
      selected_payment_method,
      all_organizations,
    );
    setModalError(orderReadyStatus);

    const isError =
      !orderReadyStatus?.isOrganizationOpen ||
      orderReadyStatus.selected_address === null ||
      orderReadyStatus.payment_method === null;
    const isFail = orderReadyStatus.cartItems === null && !isError;
    const isSuccess = orderReadyStatus.success === true;

    setIsErrorOrderModalVisible(isError);
    setIsFailOrderModalVisible(isFail);
    setIsSuccessOrderModalVisible(isSuccess);
  };

  return (
    <Box
      backgroundColor="card"
      padding="m"
      borderTopWidth={0.5}
      borderTopColor="border">
      <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
        <Text>Total</Text>
        <Text fontWeight="bold">
          {formatCurrency(totalPrice + shippingFeeSum)}
        </Text>
      </Box>
      <Button
        isFullWidth
        onPress={onPlaceOrderButtonPress}
        label="Finalizar Pedido"
      />
      <OrderSuccessModal
        isVisible={isSuccessOrderModalVisible}
        setIsVisble={setIsSuccessOrderModalVisible}
      />
      <OrderErrorModal
        isVisible={isErrorOrderModalVisible}
        setIsVisble={setIsErrorOrderModalVisible}
        modalError={modalError}
      />
      <OrderFailModal
        isVisible={isFailOrderModalVisible}
        setIsVisble={setIsFailOrderModalVisible}
        modalError={modalError}
      />
    </Box>
  );
};
