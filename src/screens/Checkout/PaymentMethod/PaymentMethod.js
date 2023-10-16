import React from 'react';
import { Section, Box, Text, Icon, Button } from '@src/components';
import { useExploreStackNavigation } from '@src/hooks';
import { useSelector } from 'react-redux';

export const PaymentMethod = () => {
  const navigation = useExploreStackNavigation();
  const { selected_payment_method } = useSelector((state) => state.sessionReducer);

  // const onAddAPromoButtonPress = () => {
  //   navigation.navigate('Promotion');
  // };

  const onPaymentMethodButtonPress = () => {
    navigation.navigate('PaymentMethod');
  };

  return (
    <Section title="Método de Pagamento">
      <Box
        backgroundColor="card"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Button variant="transparent" onPress={onPaymentMethodButtonPress}>
            <Box flexDirection="row" alignItems="center">
              <Icon name={selected_payment_method.icon} isPrimary />
              <Text marginLeft="s" color="primary">
                {selected_payment_method.name}
              </Text>
            </Box>
          </Button>
        </Box>
        {/* <Button variant="transparent" onPress={onAddAPromoButtonPress}>
          <Text variant="primary">Add a promo</Text>
        </Button> */}
      </Box>
    </Section>
  );
};
