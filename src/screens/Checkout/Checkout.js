import React from 'react';
import { ScrollView } from 'react-native';
import { DeliveryInformation } from './DeliveryInformation';
import { OrderSummary } from './OrderSummary';
import { PaymentMethod } from './PaymentMethod';
import { PlaceOrder } from './PlaceOrder';
// import { DishesAlsoOrdered } from './DishesAlsoOrdered';
import { CartContext } from '@src/cart';
import { Box } from '@src/components';
import { useSelector } from 'react-redux';

function getUniqueOrganizationIds(dataArray) {
  const uniqueIds = new Set();
  dataArray.forEach((item) => {
    uniqueIds.add(item.dish.organization_id);
  });
  return Array.from(uniqueIds);
}

function filterAndCalculateDeliveryFee(dataObject, idArray) {
  const filteredObjects = [];
  for (const key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
      const objects = dataObject[key].filter((obj) => idArray.includes(obj.id));
      if (objects.length > 0) {
        filteredObjects.push(...objects);
      }
    }
  }
  const sumDeliveryFee = filteredObjects.reduce((total, obj) => {
    return total + parseFloat(obj.delivery_fee);
  }, 0);
  return sumDeliveryFee;
}

export const Checkout = () => {
  const { cartItems, totalBasketPrice } = React.useContext(CartContext);
  const { all_organizations } = useSelector((state) => state.userReducer);
  const [myCartItems] = React.useState(JSON.parse(JSON.stringify(cartItems)));

  const renderOrders = () => {
    return groupByOrganizationId(groupAndSumById(myCartItems)).map(
      (cartItem, index) => (
        <OrderSummary
          cartItem={cartItem}
          cartItemIndex={index}
          key={index}
          totalPrice={totalBasketPrice}
        />
      ),
    );
  };

  const getShippingFeeSum = () => {
    return filterAndCalculateDeliveryFee(
      all_organizations,
      getUniqueOrganizationIds(myCartItems),
    );
  };

  const groupAndSumById = (arr) => {
    const groupedItems = {};
    arr.forEach((item) => {
      const id = item.dish.id;
      if (!groupedItems[id]) {
        groupedItems[id] = { ...item };
      } else {
        groupedItems[id].dish.amount += item.dish.amount;
      }
    });
    const resultArray = Object.values(groupedItems);
    return resultArray;
  };

  const groupByOrganizationId = (items) => {
    const grouped = {};
    items.forEach((item) => {
      const { organization_id } = item.dish;
      if (!grouped[organization_id]) {
        grouped[organization_id] = [];
      }
      grouped[organization_id].push(item);
    });
    return Object.values(grouped);
  };

  return (
    <Box flex={1}>
      <ScrollView>
        <DeliveryInformation />
        {renderOrders()}
        <PaymentMethod />
      </ScrollView>
      <PlaceOrder
        totalPrice={totalBasketPrice}
        shippingFeeSum={getShippingFeeSum()}
      />
      {/* <PlaceOrder totalPrice={totalBasketPrice} /> */}
    </Box>
  );
};
