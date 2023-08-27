import { StartupContainer } from './StartupContainer';
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
import { useCallback, useEffect, useState } from 'react';
//import { v4 } from 'uuid';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { setDeviceId } from '@src/redux/actions';
//import { useEffect } from 'react';
//import { Provider } from 'react-redux';
//import { Store } from '@src/redux/store';

// StartupContainer.init();
SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    console.log('App');
    async function prepare() {
      try {
        console.log('useeffect in app');
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // const uuid = v4();
  // const { deviceId } = useSelector((state) => state.userReducer);

  // useEffect(() => {
  //   if (deviceId == undefined) {
  //     dispatch(setDeviceId(uuid));
  //   }
  // }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={Store}>
        <StartupContainer />
        <PersistGate loading={<Text>Aguarde...</Text>} persistor={persistor}>
          <PortalProvider>
            <SafeAreaProvider onLayout={onLayoutRootView}>
              <AppThemeProvider>
                <AuthProvider>
                  <CartProvider>
                    <RootNavigation />
                  </CartProvider>
                </AuthProvider>
              </AppThemeProvider>
            </SafeAreaProvider>
          </PortalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
