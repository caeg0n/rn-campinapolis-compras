import React, { useEffect } from 'react';
import { AuthContext } from './auth';
import { useDispatch } from 'react-redux';
import { resetCategories } from '@src/redux/actions/user';
import { resetMostPopular } from '@src/redux/actions/user';
import { resetOrganizations } from '@src/redux/actions/user';
import { resetRecommendedPlaces } from '@src/redux/actions/user';
import { resetHotDeals } from '@src/redux/actions/user';
import { resetAllOpenedOrganizations } from '@src/redux/actions/user';
import { resetAllClosedOrganizations } from '@src/redux/actions/user';
import { resetCategoriesAndProducts } from '@src/redux/actions/user';
import { resetSelectedAddress, resetUUID } from '@src/redux/actions/session';
import { setAllPaymentsMethods } from '@src/redux/actions/user';
import { setAllOrganizations } from '@src/redux/actions/user';
import { setMostPopular } from '@src/redux/actions/user';
import { setAllCategories } from '@src/redux/actions/user';
import { setRecommendedPlaces } from '@src/redux/actions/user';
import { setHotDeals } from '@src/redux/actions/user';
import { setAllOpenedOrganizations } from '@src/redux/actions/user';
import { setAllClosedOrganizations } from '@src/redux/actions/user';
import { setCategoriesAndProducts } from '@src/redux/actions/user';
import { setSelectedAddress } from '@src/redux/actions/session';
import { useFocusEffect } from '@react-navigation/native';
import emptyBag from '@src/assets/checkout/empty-bag.gif';
import { setAddresses } from '@src/redux/actions/session';
import { useFocusEffect } from '@react-navigation/native';
import { useExploreStackNavigation } from '@src/hooks';
import { StartupContainer } from './StartupContainer';
import * as SplashScreen from 'expo-splash-screen';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartProvider } from '@src/cart';
import { CartContext } from '@src/cart';
import { Image } from 'react-native';
import { useEffect } from 'react';


if (__DEV__) {
  var DELETE_ADDRESS_URL = DEV_API_BASE + '/addresses';
  var GET_ADDRESSES_URL = DEV_API_BASE + '/get_addresses';
} else {
  var DELETE_ADDRESS_URL = PROD_API_BASE + '/addresses';
  var GET_ADDRESSES_URL = PROD_API_BASE + '/get_addresses';
}

const dispatch = useDispatch();
const [date, setDate] = React.useState(new Date(1598051730000));
const [showDateTimePicker, setShowDateTimePicker] = React.useState(false);
const navigation = useExploreStackNavigation();
const { selected_address } = useSelector((state) => state.sessionReducer);
const [address, setAdress] = useState([]);
const { all_payments_methods } = useSelector((state) => state.userReducer);

useFocusEffect(
  React.useCallback(() => {
  }, []),
);

useEffect(() => {
  console.log('*************************8');
});

navigation.navigate('PaymentMethod');

