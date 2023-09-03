import React from 'react';
import { Text } from 'react-native';
import { TextField, Button, Divider, Box } from '@src/components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
// import { useFocusEffect } from '@react-navigation/native';
// import { getIsRegistered } from '../redux/actions';
//import { savedAddresses } from '@src/data/mock-address';

if (__DEV__) {
  var API_BASE_URL = DEV_API_BASE;
} else {
  var API_BASE_URL = PROD_API_BASE;
}

export const AddAddress = () => {
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);
  const [title, setTitle] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(getIsRegistered(uuid));
  //   }, [dispatch, uuid]),
  // );

  const saveClick = async () => {
    setStatus(true);
    if (title !== '') {
      if (phone !== '') {
        if (address !== '') {
          try {
            let response = await fetch(API_BASE_URL + '/addresses', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                address: {
                  device_id: uuid,
                  name: title,
                  cel: phone,
                  address_detail: address,
                },
              }),
            });
            if (response.status !== 201) {
              throw new Error('FETCH_ERROR');
            }
            response = await response.json();
            console.log(response);
          } catch (error) {
            console.log(error);
          }
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
