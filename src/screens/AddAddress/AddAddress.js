import React from 'react';
import { TextField, List, Divider, ListRowItem, Box } from '@src/components';
import { savedAddresses } from '@src/data/mock-address';

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
              placeholder: 'Enter Address',
            }}
            leftIcon="location"
          />
        </Box>
        <Divider marginVertical="s" />
      </>
    );
  };

  return (
    <List
      data={prepareListData(savedAddresses)}
      ListHeaderComponent={renderListHeader()}
      renderItem={renderItem}
    />
  );
};
