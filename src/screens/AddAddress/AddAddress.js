/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
// import { MaskedTextInput } from 'react-native-mask-text';
// import Constants from 'expo-constants';
// import { mapping, light, dark } from '@eva-design/eva';
// import { ApplicationProvider } from 'react-native-ui-kitten';

// function formatPhoneNumber(text) {
//   const numericText = text.replace(/\D/g, '');
//   const formattedPhoneNumber = numericText.replace(
//     /(\d{3})(\d{3})(\d{4})/,
//     '($1) $2-$3',
//   );
//   console.log(formattedPhoneNumber);
//   return formattedPhoneNumber;
// }

import {
  TextField,
  Button,
  List,
  Divider,
  ListRowItem,
  Box,
} from '@src/components';
//import { savedAddresses } from '@src/data/mock-address';

export const AddAddress = () => {
  // const [theme, setTheme] = React.useState('light');
  const [title, setTitle] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddres] = React.useState('');
  const [status, setStatus] = React.useState(0);

  const saveClick = () => {
    setStatus(0);
    if (title === '') {
      setStatus(1);
    }
    return null;
  };
  // const toggleTheme = () => {
  //   const nextTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(nextTheme);
  // };

  const prepareListData = (addresses) => {
    return addresses.map((item) => {
      const { id, description, name } = item;
      return {
        id,
        title: name,
        subTitle: description,
      };
    });
  };

  // const handleForm = (key, value) => {
  // setForm((currentForm) => ({
  //   ...currentForm,
  //   [key]: value,
  // }));
  // };

  const renderItem = (props) => {
    return <ListRowItem key={props.index} {...props.item} />;
  };

  const renderListHeader = () => {
    return (
      <>
        <Box paddingVertical="s" paddingHorizontal="m">
          <TextField
            borderColor={status === 1 ? 'red' : 'white'}
            inputProps={{
              placeholder: 'Titulo',
              onChangeText: (text) => setTitle(text),
              defaultValue: title,
            }}
          />
          {status === 1 ? (
            <Text style={{ color: 'red', fontSize: 16 }}>
              {'Titulo não pode ficar em branco.'}
            </Text>
          ) : null}
          {/* <Text style={styles.label}>Telefone</Text> */}
          {/* <MaskedTextInput
            mask="(99)99999-9999"
            placeholder="(66)98101-0123"
            onChangeText={(value) => handleForm('birthDay', value)}
            keyboardType="numeric"
            style={styles.input}
          /> */}
          <Divider backgroundColor="card" marginVertical="s" />
          <TextField
            inputProps={{
              placeholder: 'Telefone',
              keyboardType: 'numeric',
              // onChangeText: (text) => formatPhoneNumber(text),
            }}
          />
          <Divider marginVertical="s" />
          <TextField
            inputProps={{
              placeholder: 'Endereço',
              multiline: true,
              numberOfLines: 5,
            }}
            leftIcon="location"
          />
          <Divider backgroundColor="card" marginVertical="s" />
          <Button label="Salvar" isFullWidth onPress={saveClick} />
        </Box>
        <Divider marginVertical="s" />
      </>
    );
  };

  const styles = StyleSheet.create({
    container: {},
    paragraph: {},
    card: {},
    label: {
      fontSize: 12,
      marginTop: 5,
    },
    input: {
      height: 40,
      marginHorizontal: 0,
      marginVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 1,
      borderRadius: 10,
    },
    buttonContainer: {
      marginTop: 10,
    },
  });

  // return (
  //   <List
  //     data={prepareListData(savedAddresses)}
  //     ListHeaderComponent={renderListHeader()}
  //     renderItem={renderItem}
  //   />
  // );
  return renderListHeader();
};
