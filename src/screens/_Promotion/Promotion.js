import React from 'react';
import { ListRowItem, TextField, List, Image, Box } from '@src/components';
import { promotions } from '@src/data';

export const Promotion = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const onSearch = (e) => {
    setSearchTerm(e);
  };

  const data = promotions.map((item) => {
    const { id, description, name, image } = item;
    return {
      id,
      title: name,
      subTitle: description,
      leftElement: <Image source={image} width={40} height={40} />,
    };
  });

  const renderItem = (props) => {
    return <ListRowItem key={props.index} {...props.item} />;
  };

  const renderListHeader = () => {
    return (
      <Box paddingVertical="s" paddingHorizontal="m">
        <TextField
          leftIcon="search"
          inputProps={{
            value: searchTerm,
            placeholder: 'Search promotion codes',
            onChangeText: onSearch,
          }}
        />
      </Box>
    );
  };

  return (
    <List
      data={data}
      ListHeaderComponent={renderListHeader()}
      renderItem={renderItem}
    />
  );
};
