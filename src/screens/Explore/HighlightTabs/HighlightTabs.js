import React, { useState } from 'react';
import { FeaturedTab, NewTab, SearchOrganizationTab } from './tabs';
import { Box, TabView } from '@src/components';
import styles from './HighlightTabs.style';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
//import { View, SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';

//866.2857 => 650

function calculateOutput(x) {
  const m = -0.0818;
  const c = 168.579;
  return m * x + c;
}

function calculateOutput2(x) {
  const m = -0.0943;
  const c = 180.283;
  return m * x + c;
}

export const HighlightTabs = () => {
  //const { categories_and_products } = useSelector((state) => state.userReducer);
  const { all_opened_organizations } = useSelector(
    (state) => state.userReducer,
  );
  const { all_closed_organizations } = useSelector(
    (state) => state.userReducer,
  );
  const [height, setHeight] = useState(
    calculateOutput(Dimensions.get('window').height) *
      all_opened_organizations.length,
  );

  const getIndex = (index) => {
    if (index == 0) {
      setHeight(
        calculateOutput(Dimensions.get('window').height) *
          all_opened_organizations.length,
      );
    }
    if (index == 1) {
      setHeight(
        calculateOutput2(Dimensions.get('window').height) *
          all_closed_organizations.length,
      );
    }
  };

  const tabData = [
    { key: '0', title: 'Abertos', content: FeaturedTab },
    {
      key: '1',
      title: 'Fechados',
      content: NewTab,
    },
  ];

  // const tabSearchOrganizationData = [
  //   { key: '0', title: 'Resultado', content: SearchOrganizationTab },
  // ];

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
