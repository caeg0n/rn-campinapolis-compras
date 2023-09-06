import React from 'react';
import { Dimensions } from 'react-native';
//import { mockCategories } from '@src/data';
import { Box, Image, Text, Touchable } from '@src/components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const PopularCategories = ({ navigation, isMounted }) => {
  const { all_categories } = useSelector((state) => state.userReducer);
  const itemsPerRow = all_categories.length / 2;

  useEffect(() => {
    isMounted(true);
  });

  const onCategoryItemPress = (name) => {
    return () => {
      navigation.navigate('PlaceList', { title: name });
    };
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
                <Image height={50} width={50} source={{ uri: image_url }} />
              </Box>
              <Box>
                <Text fontSize={12} marginTop="s" fontWeight="bold">
                  {name}
                </Text>
              </Box>
            </Box>
          </Touchable>
        );
      })}
    </Box>
  );

  // return (
  //   <Box backgroundColor="card" flexDirection="row" flexWrap="wrap">
  //     {mockCategories.map((category, index) => {
  //       const { id, image, name } = category;
  //       return (
  //         <Touchable key={id} onPress={onCategoryItemPress(name)}>
  //           <Box
  //             flexDirection="column"
  //             alignItems="center"
  //             width={Dimensions.get('window').width / itemsPerRow}
  //             borderColor="border"
  //             borderWidth={0.2}
  //             borderLeftWidth={0}
  //             borderRightWidth={
  //               index === itemsPerRow - 1 || index === mockCategories.length - 1
  //                 ? 0
  //                 : 0.2
  //             }
  //             padding="s">
  //             <Box>
  //               <Image height={50} width={50} source={image} />
  //             </Box>
  //             <Box>
  //               <Text fontSize={12} marginTop="s" fontWeight="bold">
  //                 {name}
  //               </Text>
  //             </Box>
  //           </Box>
  //         </Touchable>
  //       );
  //     })}
  //   </Box>
  // );
};
