// import AsyncStorage from '@react-native-async-storage/async-storage';
import StartupContainer from './StartupContainer';
import { useEffect, useState } from 'react';
import { RootNavigation } from '@src/navigation';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '@src/auth';
import { CartProvider } from '@src/cart';
import { Text } from 'react-native';
// import { setDeviceId } from '@src/redux/actions';
// import { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { Store } from '@src/redux/store';
// persistence
import { Provider } from 'react-redux';
import { Store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  console.log('App');
  // const dispatch = useDispatch();
  // const uuid = v4();
  // const { deviceId } = useSelector((state) => state.userReducer);

  // useEffect(() => {
  //   if (deviceId == undefined) {
  //     dispatch(setDeviceId(uuid));
  //   }
  // }, []);

  useEffect(() => {
    StartupContainer.init();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={Store}>
        <PersistGate loading={<Text>Aguarde...</Text>} persistor={persistor}>
          <PortalProvider>
            <SafeAreaProvider>
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
