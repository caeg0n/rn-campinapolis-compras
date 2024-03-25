import { Box, TextField } from '@src/components';
import React from 'react';

export const SearchHeader = ({ setSearchQuery, handleSearch }) => {
  return (
    <Box backgroundColor="card" padding="s">
      <TextField
        backgroundColor="background"
        leftIcon="search"
        borderWidth={0}
        inputProps={{
          placeholder: 'Encontre os comércios e produtos.',
          onChangeText: setSearchQuery,
          onSubmitEditing: handleSearch,
        }}
      />
    </Box>
  );
};

export const MemoizedSearchHeader = React.memo(SearchHeader);
