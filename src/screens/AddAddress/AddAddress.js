import { DEV_API_BASE, PROD_API_BASE } from '@env';

import React from 'react';
import { Text } from 'react-native';
import { TextField, Button, Divider, Box } from '@src/components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useExploreStackNavigation } from '@src/hooks';
import { useEffect } from 'react';
//import { setAddresses } from '@src/redux/actions/session';

if (__DEV__) {
  var API_BASE_URL = DEV_API_BASE;
} else {
  var API_BASE_URL = PROD_API_BASE;
}

async function putAddress(address_data, id, dispatch, addresses, nav) {
  //let goToSavedAddress = goback;
  try {
    let response = await fetch(API_BASE_URL + '/addresses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: {
          device_id: id,
          name: address_data.title,
          cel: address_data.phone,
          address_detail: address_data.address,
        },
      }),
    });
    if (response.status !== 201) {
      throw new Error('FETCH_ERROR');
    }
    response = await response.json();
    if (response.id > 0) {
      //goToSavedAddress();
      nav.navigate('SavedAddresses');
    }
  } catch (error) {
    console.log(error);
  }
}

export const AddAddress = () => {
  const navigation = useExploreStackNavigation();
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);
  const { addresses } = useSelector((state) => state.sessionReducer);
  const [title, setTitle] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState(false);
  //const { goBack } = useExploreStackNavigation();
  
  useEffect(() => {
    console.log('addaddress');
  }, []);

  const saveClick = async () => {
    let address_data = {};
    setStatus(true);
    if (title !== '') {
      if (phone !== '') {
        if (address !== '') {
          address_data.title = title;
          address_data.phone = phone;
          address_data.address = address;
          await putAddress({ ...address_data }, uuid, dispatch, addresses, navigation);
        }
      }
    }
    return null;
  };

  const renderListHeader = () => {
    return (
      <>
        <Box paddingVertical="s" paddingHorizontal="m">
          <TextField
            borderColor={title === '' && status === true ? 'red' : 'white'}
            inputProps={{
              placeholder: 'Titulo',
              onChangeText: (text) => {
                setTitle(text);
                setStatus(true);
              },
              defaultValue: title,
            }}
          />
          {title === '' && status === true ? (
            <Text style={{ color: 'red', fontSize: 16 }}>
              {'Titulo não pode ficar em branco.'}
            </Text>
          ) : null}
          <Divider backgroundColor="card" marginVertical="s" />
          <TextField
            borderColor={phone === '' && status === true ? 'red' : 'white'}
            inputProps={{
              placeholder: 'Telefone',
              keyboardType: 'numeric',
              onChangeText: (text) => {
                setPhone(text);
                setStatus(true);
              },
            }}
          />
          {phone === '' && status === true ? (
            <Text style={{ color: 'red', fontSize: 16 }}>
              {'Telefone não pode ficar em branco.'}
            </Text>
          ) : null}
          <Divider marginVertical="s" />
          <TextField
            borderColor={address === '' && status === true ? 'red' : 'white'}
            inputProps={{
              placeholder: 'Endereço',
              multiline: true,
              numberOfLines: 5,
              onChangeText: (text) => {
                setAddress(text);
                setStatus(true);
              },
            }}
            leftIcon="location"
          />
          {address === '' && status === true ? (
            <Text style={{ color: 'red', fontSize: 16 }}>
              {'Endereço não pode ficar em branco.'}
            </Text>
          ) : null}
          <Divider backgroundColor="card" marginVertical="s" />
          <Button label="Salvar" isFullWidth onPress={saveClick} />
        </Box>
        <Divider marginVertical="s" />
      </>
    );
  };
  return renderListHeader();
};
