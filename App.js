import { DEV_API_BASE, PROD_API_BASE } from '@env';

import { StartupContainer } from './StartupContainer';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { RootNavigation } from '@src/navigation';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '@src/auth';
import { CartProvider } from '@src/cart';
import { Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect, useState } from 'react';

if (__DEV__) {
  var GET_ALL_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_MOST_POPULAR_URL = DEV_API_BASE + '/get_most_popular/5';
  var GET_ALL_CATEGORIES_URL = DEV_API_BASE + '/get_all_categories';
} else {
  var GET_ALL_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_MOST_POPULAR_URL = PROD_API_BASE + '/get_most_popular/5';
  var GET_ALL_CATEGORIES_URL = PROD_API_BASE + '/get_all_categories';
}

//StartupContainer.init();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [allOrganizations, setAllOrganizations] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const fetchData = async () => {
    let jsonData = {};
    await new Promise((resolve) => setTimeout(resolve, 1));
    let response = await fetch(GET_ALL_ORGANIZATIONS_URL);
    let json = await response.json();
    jsonData.jsonAllOrganizations = json;

    response = await fetch(GET_MOST_POPULAR_URL);
    json = await response.json();
    jsonData.jsonMostPopular = json;

    response = await fetch(GET_ALL_CATEGORIES_URL);
    json = await response.json();
    jsonData.jsonAllCategories = json;

    return jsonData;
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    fetchData()
      .then((jsonData) => {
        setAllOrganizations(jsonData.jsonAllOrganizations);
        setMostPopular(jsonData.jsonMostPopular);
        setAllCategories(jsonData.jsonAllCategories);
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
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={Store}>
        <PersistGate loading={<Text>Aguarde...</Text>} persistor={persistor}>
          <StartupContainer />
          <PortalProvider>
            {/* <SafeAreaProvider onLayout={onLayoutRootView}> */}
            <SafeAreaProvider>
              <AppThemeProvider>
                <AuthProvider
                  fetchData={{ allOrganizations, mostPopular, allCategories }}>
                  <CartProvider>
                    <RootNavigation />
                  </CartProvider>
                </AuthProvider>
              </AppThemeProvider>
              {/* </SafeAreaProvider> */}
            </SafeAreaProvider>
          </PortalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
