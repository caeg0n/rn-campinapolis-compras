import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddAddress,
  ChangeAddress,
  Checkout,
  Explore,
  PaymentMethod,
  PlaceDetails,
  PlaceList,
  SavedAddresses,
  SelectLocation,
  TrackOrder,
} from '@src/screens';
import { ExploreHeaderTitle, Icon } from '@src/components';

const Stack = createNativeStackNavigator();

export const ExploreStack = ({ navigation }) => {
  const renderExploreHeaderLeft = () => <ExploreHeaderTitle />;

  const renderAddressHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate('SelectLocation')}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={() => {
          return {
            title: '',
            headerTitleAlign: 'left',
            headerLeft: renderExploreHeaderLeft,
          };
        }}
      />
      <Stack.Screen
        name="PlaceList"
        component={PlaceList}
        options={({ route: { params } }) => {
          return {
            headerTitle: params?.title,
          };
        }}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={({ route: { params } }) => {
          return {
            headerTitle: params?.title,
          };
        }}
      />
      <Stack.Screen
        name="Checkout"
        options={{ headerTitle: 'Finalizar Pedido' }}
        component={Checkout}
      />
      <Stack.Screen
        name="ChangeAddress"
        options={{
          headerTitle: '',
          headerRight: renderAddressHeaderRight,
        }}
        component={ChangeAddress}
      />
      <Stack.Screen
        name="SavedAddresses"
        options={{
          headerTitle: 'Endereços Salvos',
        }}
        component={SavedAddresses}
      />
      <Stack.Screen
        name="AddAddress"
        options={{
          headerTitle: 'Novo Endereço',
        }}
        component={AddAddress}
      />
      <Stack.Screen
        name="SelectLocation"
        options={() => {
          return {
            headerTitle: 'Acompanhe seu pedido',
          };
        }}
        component={SelectLocation}
      />
      <Stack.Screen
        name="PaymentMethod"
        options={{
          headerTitle: 'Selecione o Pagamento',
        }}
        component={PaymentMethod}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={({ navigation }) => ({
          headerTitle: 'Acompanhe seus pedidos',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ActivityHistory')}>
              <View style={{ marginRight: 10 }}>
                <Icon name="md-arrow-back" size={30} color="white" />
              </View>
            </TouchableWithoutFeedback>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
