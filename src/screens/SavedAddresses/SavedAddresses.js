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
import { useFocusEffect } from '@react-navigation/native';

if (__DEV__) {
  var DELETE_ADDRESS_URL = DEV_API_BASE + '/addresses';
  var GET_ADDRESSES_URL = DEV_API_BASE + '/get_addresses';
} else {
  var DELETE_ADDRESS_URL = PROD_API_BASE + '/addresses';
  var GET_ADDRESSES_URL = PROD_API_BASE + '/get_addresses';
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

async function fetchData(uuid) {
  try {
    let jsonData = {};
    const response = await fetch(GET_ADDRESSES_URL + '/' + uuid);
    const json = await response.json();
    jsonData.jsonAddresses = json;
    return jsonData;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const SavedAddresses = () => {
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);
  const { addresses } = useSelector((state) => state.sessionReducer);
  const { selected_address } = useSelector((state) => state.sessionReducer);
  const navigation = useExploreStackNavigation();
  const isAddressesEmpty = !addresses || addresses.length === 0;

  useEffect(() => {
    console.log('SavedAddress');
  }, []);

  useFocusEffect(() => {
    fetchData(uuid)
      .then((jsonData) => {
        dispatch(setAddresses(jsonData.jsonAddresses));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

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
    console.log(addresses);
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
              const { id, name, address, isHome = true } = item;
              let rightElement;
              if (isHome) {
                rightElement = (
                  <TouchableOpacity onPress={() => removeAddressItemPress(id)}>
                    <Icon name="trash" color="red" />
                  </TouchableOpacity>
                );
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
