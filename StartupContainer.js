import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setUUID } from '@src/redux/actions/session';
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setUUID, getIsRegistered } from './src/redux/actions';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { getAllCategories } from '@src/redux/actions/user';
// import { getMostPopular } from '@src/redux/actions/user';
// import { getRecommendedPlaces } from '@src/redux/actions/user';
// import { getHotDeals } from '@src/redux/actions/user';
// import { getAllOrganizations } from '@src/redux/actions/user';
// import { getAllOpenedOrganizations } from '@src/redux/actions/user';
// import { getAllClosedOrganizations } from '@src/redux/actions/user';

// const StartupContainer = {
//   async init() {
//     try {
//       console.log('StartupContainer');
//       // const data = await fetchData();
//       // console.log('Data fetched:', data);
//       // console.log('App initialization complete.');
//     } catch (error) {
//       console.error('An error occurred during app initialization:', error);
//     }
//   },
// };

// export default StartupContainer;

export const StartupContainer = () => {
  console.log('startup container');
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);

  useEffect(() => {
    if (uuid === undefined || uuid === '') {
      dispatch(setUUID(v4()));
    }
    // dispatch(setUUID(''));
    // AsyncStorage.getAllKeys()
    //   .then(async (keys) => {
    //     const result = await AsyncStorage.multiGet(keys);
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const clearData = async () => {
    // AsyncStorage.removeItem('persist:root');
    // await AsyncStorage.clear();
    // };
    // clearData().catch(console.error);
    // AsyncStorage.getAllKeys()
    //   .then((keys) => {
    //     return AsyncStorage.multiGet(keys).then((result) => {
    //       const x = JSON.parse(result[0][1]);
    //       const y = JSON.parse(x.userReducer);
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(AsyncStorage.getAllKeys());
    // const clearData = async () => {
    // await AsyncStorage.removeItem('root');
    // await AsyncStorage.clear();
    // };
    // clearData().catch(console.error);
  });

  useEffect(() => {
    const init = async () => {
      try {
        //limpa asyncstorage
        // dispatch(resetCategories());
        // dispatch(resetOrganizations());
        // dispatch(resetRecommendedPlaces());
        // dispatch(resetHotDeals());
        // dispatch(resetAllOpenedOrganizations());
        // dispatch(resetAllClosedOrganizations());
        // dispatch(getRecommendedPlaces());
        // dispatch(getAllCategories());
        // dispatch(getMostPopular());
        // dispatch(getHotDeals());
        // dispatch(getAllOrganizations());
        // dispatch(getAllOpenedOrganizations());
        // dispatch(getAllClosedOrganizations());
      } catch (error) {
        console.error('An error occurred during app initialization:', error);
      }
    };
    init();
  }, [dispatch, uuid]);
};
