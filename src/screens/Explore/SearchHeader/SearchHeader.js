import { Box, TextField } from '@src/components';
import React from 'react';

export const SearchHeader = () => {
  return (
    <Box backgroundColor="card" padding="s">
      <TextField
        backgroundColor="background"
        leftIcon="search"
        borderWidth={0}
        inputProps={{
          placeholder: 'Encontre os comércios e produtos.',
        }}
      />
    </Box>
  );
};

export const MemoizedSearchHeader = React.memo(SearchHeader);
