import { DEV_API_BASE, PROD_API_BASE } from '@env';

import * as SplashScreen from 'expo-splash-screen';
import { StartupContainer } from './StartupContainer';
import { ExpoPushNotifications } from './ExpoPushNotifications';
import { View, ActivityIndicator } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import { MemoizedRootNavigation } from '@src/navigation';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MemoizedAuthProvider } from '@src/auth';
import { CartProvider } from '@src/cart';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


if (__DEV__) {
  var GET_ALL_PAYMENTS_METHODS_URL = DEV_API_BASE + '/get_payments_methods';
  var GET_ALL_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_MOST_POPULAR_URL = DEV_API_BASE + '/get_most_popular/5';
  var GET_ALL_CATEGORIES_URL = DEV_API_BASE + '/get_all_categories';
  var GET_RECOMMENDED_PLACES_URL = DEV_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = DEV_API_BASE + '/get_hot_deals';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_closed_organizations';
  var GET_ALL_CATEGORIES_AND_PRODUCTS_URL =
    DEV_API_BASE + '/get_categories_and_products';
  var GET_ALL_ORDER_STATUS_LIST_URL = DEV_API_BASE + '/order_status_list';
  var GET_ALL_ORDER_STATUS_BASE_LIST_URL = DEV_API_BASE + '/order_status_base_list';
  var GET_ALL_ORDER_STATUS_BLOCK_LIST_URL = DEV_API_BASE + '/order_status_block_list';
} else {
  var GET_ALL_PAYMENTS_METHODS_URL = PROD_API_BASE + '/get_payments_methods';
  var GET_ALL_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_MOST_POPULAR_URL = PROD_API_BASE + '/get_most_popular/5';
  var GET_ALL_CATEGORIES_URL = PROD_API_BASE + '/get_all_categories';
  var GET_RECOMMENDED_PLACES_URL = PROD_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = PROD_API_BASE + '/get_hot_deals';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_closed_organizations';
  var GET_ALL_CATEGORIES_AND_PRODUCTS_URL =
    PROD_API_BASE + '/get_categories_and_products';
  var GET_ALL_ORDER_STATUS_LIST_URL = PROD_API_BASE + '/order_status_list';
  var GET_ALL_ORDER_STATUS_BASE_LIST_URL = PROD_API_BASE + '/order_status_base_list';
  var GET_ALL_ORDER_STATUS_BLOCK_LIST_URL = PROD_API_BASE + '/order_status_block_list';
}

//StartupContainer.init();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [allCategoriesAndProducts, setAllCategoriesAndProducts] = useState([]);
  const [allPaymentsMethods, setAllPaymentsMethods] = useState([]);
  const [allOrganizations, setAllOrganizations] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  const [allOpenedOrganizations, setAllOpenedOrganizations] = useState([]);
  const [allClosedOrganizations, setAllClosedOrganizations] = useState([]);
  const [allOrderStatusList, setAllOrderStatusList] = useState([]);
  const [allOrderStatusBaseList, setAllOrderStatusBaseList] = useState([]);
  const [allOrderStatusBlockList, setAllOrderStatusBlockList] = useState([]);
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
    fetchData()
      .then((jsonData) => {
        setAllCategoriesAndProducts(jsonData.jsonAllCategoriesAndProducts);
        setAllPaymentsMethods(jsonData.jsonAllPaymentsMethods);
        setAllOrganizations(jsonData.jsonAllOrganizations);
        setMostPopular(jsonData.jsonMostPopular);
        setAllCategories(jsonData.jsonAllCategories);
        setRecommendedPlaces(jsonData.jsonRecommendedPlaces);
        setHotDeals(jsonData.jsonHotDeals);
        setAllOpenedOrganizations(jsonData.jsonAllOpenedOrganizations);
        setAllClosedOrganizations(jsonData.jsonAllClosedOrganizations);
        setAllOrderStatusList(jsonData.jsonAllOrderStatusList);
        setAllOrderStatusBaseList(jsonData.jsonAllOrderStatusBaseList);
        setAllOrderStatusBlockList(jsonData.jsonAllOrderStatusBlockList);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        SplashScreen.hideAsync();
        setFetching(false);
      });
  }, []);

  if (isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

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
                    allCategoriesAndProducts,
                    allPaymentsMethods,
                    allOrganizations,
                    mostPopular,
                    allCategories,
                    recommendedPlaces,
                    hotDeals,
                    allOpenedOrganizations,
                    allClosedOrganizations,
                    allOrderStatusList,
                    allOrderStatusBaseList,
                    allOrderStatusBlockList
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
