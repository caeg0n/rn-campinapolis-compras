import { DEV_API_BASE, PROD_API_BASE } from '@env';

import * as SplashScreen from 'expo-splash-screen';
import { StartupContainer } from './StartupContainer';
import { ExpoPushNotifications } from './ExpoPushNotifications';
import { Text, StyleSheet } from 'react-native';
import { MemoizedRootNavigation } from '@src/navigation';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MemoizedAuthProvider } from '@src/auth';
import { CartProvider } from '@src/cart';
import { useEffect, useState, useRef } from 'react';
// import { View, ActivityIndicator } from 'react-native';

import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const API_BASE = __DEV__ ? DEV_API_BASE : PROD_API_BASE;

var GET_ALL_PAYMENTS_METHODS_URL = API_BASE + '/get_payments_methods';
var GET_ALL_ORGANIZATIONS_URL = API_BASE + '/get_all_organizations_with_distinct_category';
var GET_MOST_POPULAR_URL = API_BASE + '/get_most_popular/5';
var GET_ALL_CATEGORIES_URL = API_BASE + '/get_all_categories';
var GET_RECOMMENDED_PLACES_URL = API_BASE + '/get_recommended_places';
var GET_HOT_DEALS_URL = API_BASE + '/get_hot_deals';
var GET_ALL_OPENED_ORGANIZATIONS_URL = API_BASE + '/get_all_opened_organizations';
var GET_ALL_CLOSED_ORGANIZATIONS_URL = API_BASE + '/get_all_closed_organizations';
var GET_ALL_CATEGORIES_AND_PRODUCTS_URL = API_BASE + '/get_categories_and_products';
var GET_ALL_ORDER_STATUS_LIST_URL = API_BASE + '/order_status_list';
var GET_ALL_ORDER_STATUS_BASE_LIST_URL = API_BASE + '/order_status_base_list';
var GET_ALL_ORDER_STATUS_BLOCK_LIST_URL = API_BASE + '/order_status_block_list';

//StartupContainer.init();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const allCategoriesAndProducts = useRef([]);
  const allPaymentsMethods = useRef([]);
  const allOrganizations = useRef([]);
  const mostPopular = useRef([]);
  const allCategories = useRef([]);
  const recommendedPlaces = useRef([]);
  const hotDeals = useRef([]);
  const allOpenedOrganizations = useRef([]);
  const allClosedOrganizations = useRef([]);
  const allOrderStatusList = useRef([]);
  const allOrderStatusBaseList = useRef([]);
  const allOrderStatusBlockList = useRef([]);
  const [isFetching, setFetching] = useState(true);

  const fetchData = async () => {
    let jsonData = {};

    let response = await fetch(GET_ALL_ORGANIZATIONS_URL);
    let json = await response.json();
    jsonData.jsonAllOrganizations = json;

    response = await fetch(GET_ALL_PAYMENTS_METHODS_URL);
    json = await response.json();
    jsonData.jsonAllPaymentsMethods = json;

    response = await fetch(GET_MOST_POPULAR_URL);
    json = await response.json();
    jsonData.jsonMostPopular = json;

    response = await fetch(GET_ALL_CATEGORIES_URL);
    json = await response.json();
    jsonData.jsonAllCategories = json;

    response = await fetch(GET_RECOMMENDED_PLACES_URL);
    json = await response.json();
    jsonData.jsonRecommendedPlaces = json;

    response = await fetch(GET_HOT_DEALS_URL);
    json = await response.json();
    jsonData.jsonHotDeals = json;

    response = await fetch(GET_ALL_OPENED_ORGANIZATIONS_URL);
    json = await response.json();
    jsonData.jsonAllOpenedOrganizations = json;

    response = await fetch(GET_ALL_CLOSED_ORGANIZATIONS_URL);
    json = await response.json();
    jsonData.jsonAllClosedOrganizations = json;

    response = await fetch(GET_ALL_CATEGORIES_AND_PRODUCTS_URL);
    json = await response.json();
    jsonData.jsonAllCategoriesAndProducts = json;

    response = await fetch(GET_ALL_ORDER_STATUS_LIST_URL);
    json = await response.json();
    jsonData.jsonAllOrderStatusList = json;

    response = await fetch(GET_ALL_ORDER_STATUS_BASE_LIST_URL);
    json = await response.json();
    jsonData.jsonAllOrderStatusBaseList = json;

    response = await fetch(GET_ALL_ORDER_STATUS_BLOCK_LIST_URL);
    json = await response.json();
    jsonData.jsonAllOrderStatusBlockList = json;

    return jsonData;
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const initializeApp = async () => {
      try {
        const jsonData = await fetchData();
        allCategoriesAndProducts.current = jsonData.jsonAllCategoriesAndProducts;
        allPaymentsMethods.current = jsonData.jsonAllPaymentsMethods;
        allOrganizations.current = jsonData.jsonAllOrganizations;
        mostPopular.current = jsonData.jsonMostPopular;
        allCategories.current = jsonData.jsonAllCategories;
        recommendedPlaces.current = jsonData.jsonRecommendedPlaces;
        hotDeals.current = jsonData.jsonHotDeals;
        allOpenedOrganizations.current = jsonData.jsonAllOpenedOrganizations;
        allClosedOrganizations.current = jsonData.jsonAllClosedOrganizations;
        allOrderStatusList.current = jsonData.jsonAllOrderStatusList;
        allOrderStatusBaseList.current = jsonData.jsonAllOrderStatusBaseList;
        allOrderStatusBlockList.current = jsonData.jsonAllOrderStatusBlockList;
      } catch (error) {
        console.error('Error fetching data in app.js:', error);
      } finally {
        SplashScreen.hideAsync();
        setFetching(false);
      }
    };
    initializeApp();
  }, []);

  // if (isFetching) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="red" />
  //     </View>
  //   );
  // }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={Store}>
        <PersistGate loading={<Text>Aguarde...</Text>} persistor={persistor}>
          <StartupContainer />
          <ExpoPushNotifications />
          <PortalProvider>
            <SafeAreaProvider>
              <AppThemeProvider>
                <MemoizedAuthProvider
                  fetchData={{
                    allCategoriesAndProducts:allCategoriesAndProducts.current,
                    allPaymentsMethods:allPaymentsMethods.current,
                    allOrganizations:allOrganizations.current,
                    mostPopular:mostPopular.current,
                    allCategories:allCategories.current,
                    recommendedPlaces:recommendedPlaces.current,
                    hotDeals:hotDeals.current,
                    allOpenedOrganizations:allOpenedOrganizations.current,
                    allClosedOrganizations:allClosedOrganizations.current,
                    allOrderStatusList:allOrderStatusList.current,
                    allOrderStatusBaseList:allOrderStatusBaseList.current,
                    allOrderStatusBlockList:allOrderStatusBlockList.current
                  }}>
                  <CartProvider>
                    <MemoizedRootNavigation />
                  </CartProvider>
                </MemoizedAuthProvider>
              </AppThemeProvider>
            </SafeAreaProvider>
          </PortalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
