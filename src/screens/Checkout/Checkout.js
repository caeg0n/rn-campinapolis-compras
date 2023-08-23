import React from 'react';
import { ScrollView } from 'react-native';
import { DeliveryInformation } from './DeliveryInformation';
import { OrderSummary } from './OrderSummary';
import { PaymentMethod } from './PaymentMethod';
import { PlaceOrder } from './PlaceOrder';
// import { DishesAlsoOrdered } from './DishesAlsoOrdered';
import { CartContext } from '@src/cart';
import { Box } from '@src/components';
import { useEffect } from 'react';

const SHIPPING_FEE = 5;

export const Checkout = () => {
  const { cartItems, totalBasketPrice } = React.useContext(CartContext);

  useEffect(() => {});

  const renderOrders = () => {
    // const x = updateAmountsInArray(cartItems);
    // console.log(x);
    // const temp_items_1 = joinItems(temp_items_0);
    // const items = groupByOrganizationId(temp_items_1);
    // return items.map((cartItem, i) => (
    //   <OrderSummary
    //     cartItem={cartItem}
    //     cartItemIndex={i}
    //     key={i}
    //     totalPrice={totalBasketPrice}
    //     shippingFee={SHIPPING_FEE}
    //   />
    // ));
  };

  const updateAmountsInArray = (arr) => {
    let totalAmount = 0;
    arr.forEach((item) => {
      totalAmount += item.dish.amount;
    });
    arr.forEach((item) => {
      item.dish.amount = totalAmount;
    });
    return arr;
  };

  const joinItems = (arr) => {
    const groupedObjects = {};
    arr.forEach((item) => {
      const id = item.dish.id;
      if (!groupedObjects[id]) {
        groupedObjects[id] = { ...item };
        groupedObjects[id].amount = 1;
      } else {
        groupedObjects[id] = {
          ...groupedObjects[id],
          ...item,
        };
        groupedObjects[id].amount++;
      }
    });
    return Object.values(groupedObjects);
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
      <PlaceOrder totalPrice={totalBasketPrice} shippingFee={SHIPPING_FEE} />
    </Box>
  );
};
