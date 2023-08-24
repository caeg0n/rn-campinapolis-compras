import React from 'react';
import { Box, Text, Button } from '@src/components';
import { OrderSuccessModal } from './SuccessOrderModal';
import { formatCurrency } from '@src/utils';

export const PlaceOrder = ({ totalPrice, shippingFee }) => {
  const [isSuccessOrderModalVisible, setIsSuccessOrderModalVisible] =
    React.useState(false);

  const onPlaceOrderButtonPress = () => {
    setIsSuccessOrderModalVisible(true);
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
          {formatCurrency(totalPrice + shippingFee)}
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
