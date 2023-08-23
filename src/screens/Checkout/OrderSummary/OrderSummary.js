import React from 'react';
import { Box, Text, Section, Divider } from '@src/components';
import { formatCurrency } from '@src/utils';
import { useExploreStackNavigation } from '@src/hooks';
import { View } from 'react-native';

export let OrderSummary = ({
  cartItem,
  cartItemIndex,
  totalPrice,
  shippingFee,
}) => {
  const navigation = useExploreStackNavigation();
  console.log(cartItem);

  const onAddItemButtonPress = () => {
    navigation.navigate('DishDetailsModal');
  };

  return (
    <Section title="Resumo do Pedido">
      <Box backgroundColor="card">
        <Box padding="m">
          {cartItem.map((item, i) => (
            <Box key={i} flexDirection="row" justifyContent="space-between">
              <Text marginRight="m">0{item.amount}</Text>
              <Text marginBottom="xs" fontWeight="bold">
                {item.dish.title}
              </Text>
              <Text fontWeight="bold"> {formatCurrency(totalPrice)}</Text>
            </Box>
          ))}
        </Box>
        {/* <Box flexDirection="row"> */}
        {/* <Text marginRight="m">{`${cartItem.length}`}</Text> */}
        {/* <Text marginRight="m">0{cartItem[0].amount}</Text>
            <Box key={cartItemIndex}>
              <Text marginBottom="xs" fontWeight="bold">
                {cartItem[0].dish.title}
              </Text>
            </Box>
          </Box> */}
        <Divider />
        <Box padding="m">
          <Box flexDirection="row" justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>{formatCurrency(totalPrice)}</Text>
          </Box>
          <Box marginTop="s" flexDirection="row" justifyContent="space-between">
            <Text>Delivery: 6.1km</Text>
            <Text>{formatCurrency(shippingFee)}</Text>
          </Box>
        </Box>
      </Box>
    </Section>
  );

  // return (
  //   // <Section
  //   // title="Resumo do Pedido"
  //   //   actionButtonText="Comprar mais"
  //   //   onButtonActionPress={onAddItemButtonPress}>
  //   <Section title="Resumo do Pedido">
  //     <Box backgroundColor="card">
  //       <Box padding="m" flexDirection="row" justifyContent="space-between">
  //         <Box flexDirection="row">
  //           <Text marginRight="m">{`${cartItems.length}`}</Text>
  //           {cartItems.map((cartItem, cartItemIndex) => (
  //             <Box key={cartItemIndex}>
  //               <Text marginBottom="xs" fontWeight="bold">
  //                 {cartItem.dish.title}
  //               </Text>
  //               {/* {cartItem.sideDishes.map((dish, dishIndex) => (
  //                 <Text variant="secondary" key={dishIndex} marginBottom="xxs">
  //                   {dish.title}
  //                 </Text>
  //               ))} */}
  //             </Box>
  //           ))}
  //         </Box>
  //         <Text fontWeight="bold">{formatCurrency(totalPrice)}</Text>
  //       </Box>
  //       <Divider />
  //       <Box padding="m">
  //         <Box flexDirection="row" justifyContent="space-between">
  //           <Text>Subtotal</Text>
  //           <Text>{formatCurrency(totalPrice)}</Text>
  //         </Box>
  //         <Box marginTop="s" flexDirection="row" justifyContent="space-between">
  //           <Text>Delivery: 6.1km</Text>
  //           <Text>{formatCurrency(shippingFee)}</Text>
  //         </Box>
  //       </Box>
  //     </Box>
  //   </Section>
  // );
};
