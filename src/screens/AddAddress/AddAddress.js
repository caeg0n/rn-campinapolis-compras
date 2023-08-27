import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

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

  const renderItem = (props) => {
    return <ListRowItem key={props.index} {...props.item} />;
  };

  const renderListHeader = () => {
    return (
      <>
        <Box paddingVertical="s" paddingHorizontal="m">
          <TextField
            inputProps={{
              placeholder: 'Titulo',
            }}
          />
          <Divider backgroundColor="card" marginVertical="s" />
          <TextField
            inputProps={{
              placeholder: 'Telefone',
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
          <Button label="Salvar" isFullWidth />
        </Box>
        <Divider marginVertical="s" />
      </>
    );
  };

  // return (
  //   <List
  //     data={prepareListData(savedAddresses)}
  //     ListHeaderComponent={renderListHeader()}
  //     renderItem={renderItem}
  //   />
  // );
  return renderListHeader();
};
