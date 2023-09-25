import React from 'react';
import { Box, Text, Section, Divider } from '@src/components';
import { formatCurrency } from '@src/utils';
import { useExploreStackNavigation } from '@src/hooks';
import { useSelector } from 'react-redux';

function findDeliveryFeeById(data, idToFind) {
  for (const category in data) {
    if (data.hasOwnProperty(category)) {
      for (const item of data[category]) {
        if (item.id === idToFind) {
          return item.delivery_fee;
        }
      }
    }
  }
  return null;
}

function getOrganization (data, idToFind) {
  for (const category in data) {
    const foundElement = data[category].find((item) => item.id === idToFind);
    if (foundElement) {
      return foundElement;
    }
  }
  return {};
};


export let OrderSummary = ({ cartItem }) => {
  const navigation = useExploreStackNavigation();
  const { all_organizations } = useSelector((state) => state.userReducer);

  const onRemoveItemButtonPress = () => {
    navigation.navigate('DishDetailsModal',{ remove_item_mode:true, 
                                             organizationTitle: getOrganizationTitle(),
                                             subtotal: getSubtotal(), 
                                             organization: getOrganization(all_organizations, cartItem[0].dish.organization_id) 
                                            });
  };

  const getOrganizationTitle = () => {
    const organizationName = findNameById(
      all_organizations,
      cartItem[0].dish.organization_id,
    );
    return organizationName;
  };

  const findNameById = (data, idToFind) => {
    for (const category in data) {
      const foundElement = data[category].find((item) => item.id === idToFind);
      if (foundElement) {
        return foundElement.name;
      }
    }
    return null;
  };

  const getItemAmount = (item) => {
    switch (item.dish.amount > 0 && item.dish.amount < 10) {
      case true:
        return `0${item.dish.amount}`;
      case false:
        return `${item.dish.amount}`;
      default:
        return `${item.dish.amount}`;
    }
  };

  const getItemTotalPrice = (item) => {
    return formatCurrency(item.dish.price * item.dish.amount);
  };

  const getSubtotal = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.dish.price * item.dish.amount;
    });
    return formatCurrency(total);
  };

  const getShippingFee = () => {
    const organizationShippingFee = findDeliveryFeeById(
      all_organizations,
      cartItem[0].dish.organization_id,
    );
    return formatCurrency(organizationShippingFee);
  };

  return (
    <Section title={getOrganizationTitle()} actionButtonText="Remover" onButtonActionPress={onRemoveItemButtonPress}>
      <Box backgroundColor="card">
        <Box padding="m">
          {cartItem.map((item, i) => (
            <Box key={i} flexDirection="row" justifyContent="space-between">
              <Text marginRight="m">{getItemAmount(item)}</Text>
              <Text marginBottom="xs" fontWeight="bold">
                {item.dish.title}
              </Text>
              <Text fontWeight="bold"> {getItemTotalPrice(item)}</Text>
            </Box>
          ))}
        </Box>
        <Divider />
        <Box padding="m">
          <Box flexDirection="row" justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>{getSubtotal()}</Text>
          </Box>
          <Box marginTop="s" flexDirection="row" justifyContent="space-between">
            <Text>Entregador</Text>
            <Text>{getShippingFee()}</Text>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};
