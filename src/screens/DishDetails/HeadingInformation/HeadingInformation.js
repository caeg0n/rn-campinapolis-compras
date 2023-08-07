import React from 'react';
import { Box, Text } from '@src/components/elements';
import { formatCurrency } from '@src/utils';

export const HeadingInformation = ({ data }) => {
  const { title, price, description } = data;
  return (
    <Box backgroundColor="card" padding="m">
      <Box flexDirection="row" justifyContent="space-between">
        <Box width="70%" paddingRight="s">
          <Text variant="subHeader" numberOfLines={2}>
            {title}
          </Text>
        </Box>
        <Text variant="subHeader" color="primary">
          {formatCurrency(parseFloat(price))}
        </Text>
      </Box>
      <Text marginTop="m">{description}</Text>
    </Box>
  );
};
