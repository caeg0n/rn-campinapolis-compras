import React, { useState } from 'react';
import { SearchOrganizationTab } from './tabs';
import { Box, TabView } from '@src/components';
import styles from './HighlightSearchTabs.style';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

function calculateOutput(x) {
  const m = -0.0818;
  const c = 168.579;
  return m * x + c;
}

export const HighlightSearchTabs = ({searchQuery}) => {
  //const { categories_and_products } = useSelector((state) => state.userReducer);
  const { all_organizations } = useSelector((state) => state.userReducer);
  const [height, setHeight] = useState(
    calculateOutput(Dimensions.get('window').height) * all_organizations.length,
  );

  const getIndex = (index) => {
    if (index == 0) {
      setHeight(
        calculateOutput(Dimensions.get('window').height) *
          all_organizations.length,
      );
    }
  };

  const tabData = [
    { key: '0', title: 'Resultado', content: () => <SearchOrganizationTab searchQuery={searchQuery} /> },
  ];

  return (
    <Box
      backgroundColor="card"
      borderTopRightRadius="xl"
      borderTopLeftRadius="xl"
      height={880}>
      <TabView
        getIndex={getIndex}
        tabData={tabData}
        tabBarStyle={styles.tabBarStyle}
        isFullWidth
      />
    </Box>
  );
};
