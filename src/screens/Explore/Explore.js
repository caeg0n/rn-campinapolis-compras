import React from 'react';
import { InteractionManager } from 'react-native';
import { ScrollView } from 'react-native';
import { useSafeAreaScrollViewStyles } from '@src/hooks';
import { MemoizedSearchHeader } from './SearchHeader';
import { PopularCategories } from './PopularCategories/PopularCategories';
import { MemoizedPopularPlaces } from './PopularPlaces';
import { MerchantCampaigns } from './MerchantCampaigns';
import { RecommendedPlaces } from './RecommendedPlaces';
import { HotDeals } from './HotDeals';
import { HighlightTabs } from './HighlightTabs';
import { HighlightSearchTabs } from './HighlightSearchTabs';
import { useScrollToTop } from '@react-navigation/native';
import { useEffect } from 'react';
import { Divider } from '@src/components';

export const Explore = ({navigation}) => {
  const ref = React.useRef(null);
  const styles = useSafeAreaScrollViewStyles(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  useScrollToTop(ref);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});
  });

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <ScrollView
      ref={ref}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}>
      <MemoizedSearchHeader handleSearch={handleSearch} setSearchQuery={setSearchQuery} />
      {!isSearching ? (
        <>
          <PopularCategories navigation={navigation} />
          <MemoizedPopularPlaces navigation={navigation} />
          <Divider backgroundColor="background" marginVertical="s" />
          <MerchantCampaigns />
          <RecommendedPlaces navigation={navigation} />
          <HotDeals navigation={navigation} />
          <Divider backgroundColor="background" marginVertical="s" />
          <HighlightTabs />
        </>
      ) : (
        <>
          <Divider backgroundColor="background" marginVertical="s" />
          <HighlightSearchTabs searchQuery={searchQuery} />
        </>
      )}
    </ScrollView>
  );
};
