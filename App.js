import { StartupContainer } from './StartupContainer';
// import * as SplashScreen from 'expo-splash-screen';
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
// import { useCallback, useEffect, useState } from 'react';

//StartupContainer.init();
// SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  // setAppIsReady(true);
  // }, []);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={Store}>
        <PersistGate loading={<Text>Aguarde...</Text>} persistor={persistor}>
          <StartupContainer />
          <PortalProvider>
            {/* <SafeAreaProvider onLayout={onLayoutRootView}> */}
            <SafeAreaProvider>
              <AppThemeProvider>
                <AuthProvider>
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
