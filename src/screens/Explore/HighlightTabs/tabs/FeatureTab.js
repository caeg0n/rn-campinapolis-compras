import React from 'react';
import { mockRemarkablePlace } from '@src/data';
import { Box, PlaceListItem } from '@src/components';

export const FeaturedTab = () => {
  return (
    <Box backgroundColor="card" paddingTop="none">
      {mockRemarkablePlace.featured.map((item) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Box>
  );
};
