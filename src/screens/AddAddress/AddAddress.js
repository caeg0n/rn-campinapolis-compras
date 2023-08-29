import React from 'react';
import { Text } from 'react-native';
import { TextField, Button, Divider, Box } from '@src/components';
import { useFocusEffect } from '@react-navigation/native';
// import { getIsRegistered } from '../redux/actions';
//import { savedAddresses } from '@src/data/mock-address';

export const AddAddress = () => {
  // const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(getIsRegistered(uuid));
  //   }, [dispatch, uuid]),
  // );

  const saveClick = () => {
    setStatus(true);
    if (title !== '') {
      if (phone !== '') {
        if (address !== '') {
          console.log('bingo');
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
