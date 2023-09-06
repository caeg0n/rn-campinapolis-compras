import React from 'react';
import { InteractionManager } from 'react-native';
import { ScrollView } from 'react-native';
import { useSafeAreaScrollViewStyles } from '@src/hooks';
import { SearchHeader } from './SearchHeader';
import { PopularCategories } from './PopularCategories/PopularCategories';
import { PopularPlaces } from './PopularPlaces';
import { MerchantCampaigns } from './MerchantCampaigns';
import { RecommendedPlaces } from './RecommendedPlaces';
import { HotDeals } from './HotDeals';
import { ActivityIndicator, Divider } from '@src/components';
import { HighlightTabs } from './HighlightTabs';
import { useScrollToTop } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export const Explore = ({ navigation }) => {
  const ref = React.useRef(null);
  const styles = useSafeAreaScrollViewStyles(false);
  const [loadingState, setLoadingState] = useState(false);
  const [popularCategoriesMounted, setPopularCategoriesMounted] =
    useState(false);
  const [popularPlacesMounted, setPopularPlacesMounted] = useState(false);
  const [merchantCampaignsMounted, setMerchantCampaignsMounted] =
    useState(false);
  const [recommendedPlacesMounted, setRecommendedPlacesMounted] =
    useState(false);
  const [hotDealsMounted, setHotDealsMounted] = useState(false);
  const [highlightTabsMounted, setHighlightTabsMounted] = useState(false);

  useScrollToTop(ref);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (
        (popularCategoriesMounted &&
          popularPlacesMounted &&
          merchantCampaignsMounted &&
          recommendedPlacesMounted &&
          hotDealsMounted &&
          highlightTabsMounted) === true
      ) {
        setLoadingState(false);
      }
    }, [
      highlightTabsMounted,
      hotDealsMounted,
      merchantCampaignsMounted,
      popularCategoriesMounted,
      popularPlacesMounted,
      recommendedPlacesMounted,
    ]);
  });

  // const handleChildMount = () => {
  //   setChildMounted(true);
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const task = InteractionManager.runAfterInteractions(() => {
  //       setIsNavigationTransitionFinished(true);
  //     });
  //     return () => task.cancel();
  //   }, []),
  // );

  return (
    <ScrollView
      ref={ref}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}>
      <SearchHeader />
      <PopularCategories
        navigation={navigation}
        isMounted={setPopularCategoriesMounted}
      />
      {loadingState ? <ActivityIndicator size="large" hasMargin /> : null}
      <PopularPlaces
        navigation={navigation}
        isMounted={setPopularPlacesMounted}
      />
      <Divider backgroundColor="background" marginVertical="s" />
      <MerchantCampaigns isMounted={setMerchantCampaignsMounted} />
      <RecommendedPlaces
        navigation={navigation}
        isMounted={setRecommendedPlacesMounted}
      />
      <HotDeals navigation={navigation} isMounted={setHotDealsMounted} />
      <Divider backgroundColor="background" marginVertical="s" />
      <HighlightTabs isMounted={setHighlightTabsMounted} />
    </ScrollView>
  );
};
