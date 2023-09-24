import React from 'react';
import { Box, Text } from '@src/components/elements';
import { formatCurrency } from '@src/utils';
//import { CartContext } from '@src/cart';
//import { useSelector } from 'react-redux';
  
// function findObjectById(id, data) {
//   for (const categoryKey in data) {
//     const categoryArray = data[categoryKey];
//     for (const object of categoryArray) {
//       if (object.id === id) {
//         return object;
//       }
//     }
//   }
//   return null;
// }

export const HeadingInformation = ({organization}) => {
  //const { all_organizations } = useSelector((state) => state.userReducer);
  //const { cartItems } = React.useContext(CartContext);
  //const organization_id = cartItems[0].dish.organization_id;
  //const organization = findObjectById(organization_id, all_organizations);
  
  return (
    <Box backgroundColor="card" padding="m">
      <Box flexDirection="row" justifyContent="space-between">
        <Box width="70%" paddingRight="s">
          <Text variant="subHeader" numberOfLines={2}>
            {organization.name}
          </Text>
        </Box>
        <Text variant="subHeader" color="primary">
          {formatCurrency(parseFloat(0))}
        </Text>
      </Box>
      <Text marginTop="m">{"Remova os items que você não deseja comprar"}</Text>
    </Box>
  );
};
