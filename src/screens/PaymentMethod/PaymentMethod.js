import React from 'react';
import { ScrollView } from 'react-native';
import { RadioButton, Icon, Box } from '@src/components';
import { paymentMethods } from '@src/data/mock-payment-method';

export const PaymentMethod = () => {
  const data = paymentMethods.map((item) => {
    const { id, name, icon } = item;
    return {
      label: name,
      value: id,
      rightElement: <Icon name={icon} />,
    };
  });

  const onItemPress = (item) => {
    return () => {
      console.log(item);
    };
  };

  return (
    <Box flex={1} backgroundColor="card">
      <ScrollView>
        <RadioButton
          data={data}
          onItemPress={onItemPress}
          containerProps={{
            paddingHorizontal: 'm',
          }}
        />
      </ScrollView>
    </Box>
  );
};
