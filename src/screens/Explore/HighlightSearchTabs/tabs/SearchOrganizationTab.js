import React from 'react';
import { Box, PlaceListItem } from '@src/components';
import { useSelector } from 'react-redux';

function searchInArray(arr, keyword) {
  const lowerCaseKeyword = keyword.toLowerCase();
  return arr.filter(obj => 
      obj.title.toLowerCase().includes(lowerCaseKeyword) || 
      obj.subTitle.toLowerCase().includes(lowerCaseKeyword)
  );
}

function transformData(data) {
  const transformed = [];
  for (const category in data) {
    data[category].forEach((item) => {
      transformed.push({
        id: item.id,
        image: item.logo,
        rating: 5,
        subTitle: item.category_base,
        title: item.name,
      });
    });
  }
  return transformed;
}

export const SearchOrganizationTab = ({ searchQuery }) => {
  const { all_organizations } = useSelector((state) => state.userReducer);
  let result = transformData(all_organizations);
  result = searchInArray(result, searchQuery);
  return (
    <Box backgroundColor="card" padding="s" paddingTop="none">
      {result.map((item) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Box>
  );
};