import React from 'react';
import { Box, List, PlaceListItem } from '@src/components';

function adaptData(inputData) {
  const flattenedData = Object.keys(inputData).reduce((acc, category) => {
    const items = inputData[category].map((item) => ({
      id: item.id.toString(),
      image: item.logo,
      rating: 4,
      subTitle: "",
      title: item.name,
    }));
    return [...acc, ...items];
  }, []);
  return flattenedData;
}

export const PlaceList = ({ route }) => {
  const { organizations } = route.params;
  return (
    <Box flex={1}>
      <List
        data={adaptData(organizations)}
        renderItem={({ item }) => {
          return <PlaceListItem key={item.id} data={item} hasDivider={false} />;
        }}
      />
    </Box>
  );
};
