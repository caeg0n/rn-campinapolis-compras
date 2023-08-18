import React from 'react';
import { Box, Button, Text } from '@src/components';
import { formatCurrency } from '@src/utils';
import { CartContext } from '@src/cart';
import { useExploreStackNavigation } from '@src/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { InteractionManager } from 'react-native';

export const BasketSummary = () => {
  const { cartItems, totalPrice } = React.useContext(CartContext);
  const navigation = useExploreStackNavigation();
  const [numberOfItems, setNumberOfItems] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setNumberOfItems(cartItems.length);
      });
      return () => task.cancel();
    }, [cartItems]),
  );

  const onViewBasketButtonPress = () => {
    navigation.navigate('Checkout');
  };

  if (cartItems.length < 1) {
    return null;
  }

  return (
    <Box
      padding="m"
      backgroundColor="card"
      borderTopWidth={1}
      borderTopColor="border">
      <Button isFullWidth onPress={onViewBasketButtonPress}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box flexDirection="row" alignItems="center">
            <Text fontWeight="bold" color="white" padding="xxs" marginRight="s">
              Ver Carrinho
            </Text>
            <Text color="white">{`${numberOfItems} ${
              numberOfItems > 1 ? 'produtos' : 'produto'
            }`}</Text>
          </Box>
          <Text fontWeight="bold" color="white">
            {formatCurrency(totalPrice)}
          </Text>
        </Box>
      </Button>
    </Box>
  );
};
