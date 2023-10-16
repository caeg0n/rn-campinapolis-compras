import React from 'react';
import { Box, Text, Button } from '@src/components';
import { OrderSuccessModal } from './SuccessOrderModal';
import { formatCurrency } from '@src/utils';
import { useSelector } from 'react-redux';
import { CartContext } from '@src/cart';
import { useFocusEffect } from '@react-navigation/native';
//import { paymentMethods } from '@src/data';

function isOrganizationOpen(organization) {
  return false;
}

function isOrderReady(cartItems, selected_address, payment_method) {
  if (
    isOrganizationOpen === true &&
    cartItems.length > 0 &&
    selected_address.id > 0 &&
    payment_method.id > 0
  ) {
    return true;
  } else {
    return false;
  }
}

export const PlaceOrder = ({ totalPrice, shippingFeeSum }) => {
  const { selected_address } = useSelector((state) => state.sessionReducer);
  const { selected_payment_method } = useSelector((state) => state.sessionReducer);
  const { cartItems } = React.useContext(CartContext);
  const [isSuccessOrderModalVisible, setIsSuccessOrderModalVisible] =
    React.useState(false);
  

  useFocusEffect(
    React.useCallback(() => {
      console.log('placeorder');
    }, []),
  );

  const onPlaceOrderButtonPress = () => {
    if (isOrderReady(cartItems, selected_address, payment_method) === true) {
      setIsSuccessOrderModalVisible(true);
    } else {
      setIsSuccessOrderModalVisible(true, false);
    }
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
    </Box>
  );
};
