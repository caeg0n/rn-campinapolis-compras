import React from 'react';
import { FeaturedTab, NewTab } from './tabs';
import { Box, TabView } from '@src/components';
import styles from './HighlightTabs.style';

const tabData = [
  { key: '0', title: 'Featured', content: FeaturedTab },
  {
    key: '1',
    title: 'Newest',
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
