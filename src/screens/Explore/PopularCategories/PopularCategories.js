import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Image, Text, Touchable } from '@src/components';
import { useSelector } from 'react-redux';

function findUniqueOrganizationIdsByName(items, name) {
  const filteredItems = items.filter(item => item.name === name);
  const organizationIds = filteredItems.map(item => item.organization_id);
  const uniqueOrganizationIds = Array.from(new Set(organizationIds));  
  return uniqueOrganizationIds;
}

export const PopularCategories = ({ navigation }) => {
  const { all_categories } = useSelector((state) => state.userReducer);
  const { all_organizations } = useSelector((state) => state.userReducer);
  const itemsPerRow = all_categories.length / 2;

  const onCategoryItemPress = (name) => {
    return () => {
      //console.log(findUniqueOrganizationIdsByName(all_categories, name));
      console.log(all_organizations);
      navigation.navigate('PlaceList', { title: capitalizeFirstLetter(name), organizations: all_organizations });
    };
  };

  const capitalizeFirstLetter = (string) => {
    if (!string || typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box backgroundColor="card" flexDirection="row" flexWrap="wrap">
      {all_categories.map((category, index) => {
        const { id, image_url, name } = category;
        return (
          <Touchable key={id} onPress={onCategoryItemPress(name)}>
            <Box
              flexDirection="column"
              alignItems="center"
              width={Dimensions.get('window').width / itemsPerRow}
              borderColor="border"
              borderWidth={0.2}
              borderLeftWidth={0}
              borderRightWidth={
                index === itemsPerRow - 1 || index === all_categories.length - 1
                  ? 0
                  : 0.2
              }
              padding="s">
              <Box>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                  }}
                  source={{ uri: image_url }}
                />
              </Box>
              <Box>
                <Text fontSize={12} marginTop="s" fontWeight="bold">
                  {capitalizeFirstLetter(name)}
                </Text>
              </Box>
            </Box>
          </Touchable>
        );
      })}
    </Box>
  );
};
