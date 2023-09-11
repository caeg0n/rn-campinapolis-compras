import { DEV_API_BASE, PROD_API_BASE } from '@env';

import React from 'react';
import { Box, Section, Divider, Icon, ListRowItem } from '@src/components';
import { ScrollView } from 'react-native-gesture-handler';
import { useExploreStackNavigation } from '@src/hooks';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAddresses } from '@src/redux/actions/session';

if (__DEV__) {
  var DELETE_ADDRESS_URL = DEV_API_BASE + '/addresses';
} else {
  var DELETE_ADDRESS_URL = PROD_API_BASE + '/addresses';
}

async function deleteAddress(device_id, id) {
  const requestData = {
    address: {
      device_id: device_id,
      id: id,
    },
  };
  fetch(DELETE_ADDRESS_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }).then((response) => {
    console.log(response);
  });
}

export const SavedAddresses = () => {
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);
  const navigation = useExploreStackNavigation();
  const { addresses } = useSelector((state) => state.sessionReducer);
  const isAddressesEmpty = !addresses || addresses.length === 0;

  useEffect(() => {
    console.log('SavedAddress');
  }, []);

  const addAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  const removeAddressItemPress = (id) => {
    let resultingAddresses = JSON.parse(JSON.stringify(addresses));
    const filteredArray = resultingAddresses.filter((obj) => obj.id !== id);
    deleteAddress(uuid, id);
    dispatch(setAddresses(filteredArray));
  };

  const setAddress = (id) => {
    const foundAddress = addresses.find((address) => address.id === id);
    if (foundAddress) {
      navigation.navigate('Checkout', foundAddress);
    }
  };

  return (
    <ScrollView>
      <Section title="Escolha o Endereço" hasDivider={true}>
        {!isAddressesEmpty && (
          <Box>
            {addresses.reverse().map((item, index) => {
              //const { id, name, description, isHome, isWork } = item;
              const { id, name, address, isHome = true } = item;
              let rightElement;
              if (isHome) {
                rightElement = (
                  <TouchableOpacity onPress={() => removeAddressItemPress(id)}>
                    <Icon name="trash" color="red" />
                  </TouchableOpacity>
                );
                // } else if (isWork) {
                //   rightElement = <Icon name="briefcase" />;
                // }
              }
              return (
                <Box key={index}>
                  <ListRowItem
                    id={id}
                    title={name}
                    subTitle={address}
                    rightElement={rightElement}
                    onPress={() => setAddress(id)}
                  />
                  <Divider />
                </Box>
              );
            })}
            <ListRowItem
              title="Adicionar Endereço"
              subTitle="Salve seus endereços favoritos"
              onPress={addAddressItemPress}
            />
          </Box>
        )}
        {isAddressesEmpty && (
          <ListRowItem
            title="Adicionar Endereço"
            subTitle="Salve seus endereços favoritos"
            onPress={addAddressItemPress}
          />
        )}
      </Section>
    </ScrollView>
  );
};
