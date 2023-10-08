import React from 'react';
import { FeaturedTab, NewTab } from './tabs';
import { Box, TabView } from '@src/components';
import styles from './HighlightTabs.style';
import { useEffect } from 'react';

const tabData = [
  { key: '0', title: 'Abertos', content: FeaturedTab },
  {
    key: '1',
    title: 'Fechados',
    content: NewTab,
  },
];

export const HighlightTabs = () => {
  return (
    <Box
      backgroundColor="card"
      borderTopRightRadius="xl"
      borderTopLeftRadius="xl"
      height={880}>
      <TabView tabData={tabData} tabBarStyle={styles.tabBarStyle} isFullWidth />
    </Box>
  );
};
