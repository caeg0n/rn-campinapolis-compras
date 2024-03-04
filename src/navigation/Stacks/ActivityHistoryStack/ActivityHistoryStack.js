import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityHistory } from '@src/screens';

const Stack = createNativeStackNavigator();

export const ActivityHistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityHistory">
      <Stack.Screen
        name="ActivityHistory"
        options={() => {
          return {
            title: 'Pedidos',
            headerTitleAlign: 'center',
          };
        }}
        component={ActivityHistory}
      />
      {/* <Stack.Screen
        name="ActivityHistoryDetail"
        options={() => {
          return {
            title: 'Detalhes do pedido',
          };
        }}
        component={ActivityHistoryDetail}
      /> */}
    </Stack.Navigator>
  );
};
