import React from 'react';
import { ScrollView } from 'react-native';
import { RadioButton, Icon, Box } from '@src/components';
//import { useEffect } from 'react-native';
//import { paymentMethods } from '@src/data/mock-payment-method';
import { useSelector } from 'react-redux';

export const PaymentMethod = () => {
  const { all_payments_methods } = useSelector((state) => state.userReducer);
  //useEffect(() => {
  //},[]);

  // const data = paymentMethods.map((item) => {
  //   const { id, name, icon } = item;
  //   return {
  //     label: name,
  //     value: id,
  //     rightElement: <Icon name={icon} />,
  //   };
  // });

  const data = all_payments_methods.map((item) => {
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
