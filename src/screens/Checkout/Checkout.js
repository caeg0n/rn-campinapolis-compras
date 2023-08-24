import React from 'react';
import { ScrollView } from 'react-native';
import { DeliveryInformation } from './DeliveryInformation';
import { OrderSummary } from './OrderSummary';
import { PaymentMethod } from './PaymentMethod';
import { PlaceOrder } from './PlaceOrder';
// import { DishesAlsoOrdered } from './DishesAlsoOrdered';
import { CartContext } from '@src/cart';
import { Box } from '@src/components';

const SHIPPING_FEE = 5;

export const Checkout = () => {
  const { cartItems, totalBasketPrice } = React.useContext(CartContext);
  const [myCartItems, setCartItems] = React.useState(
    JSON.parse(JSON.stringify(cartItems)),
  );

  const renderOrders = () => {
    return groupByOrganizationId(groupAndSumById(myCartItems)).map(
      (cartItem, index) => (
        <OrderSummary
          cartItem={cartItem}
          cartItemIndex={index}
          key={index}
          totalPrice={totalBasketPrice}
          shippingFee={SHIPPING_FEE}
        />
      ),
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
      <PlaceOrder totalPrice={totalBasketPrice} shippingFee={SHIPPING_FEE} />
    </Box>
  );
};
