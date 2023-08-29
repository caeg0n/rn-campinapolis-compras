import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllCategories } from '@src/redux/actions';
import { getMostPopular } from '@src/redux/actions';
import { getRecommendedPlaces } from '@src/redux/actions';
import { getHotDeals } from '@src/redux/actions';
import { getAllOrganizations } from '@src/redux/actions';
import { getAllOpenedOrganizations } from '@src/redux/actions';
import { getAllClosedOrganizations } from '@src/redux/actions';
import { useDispatch } from 'react-redux';
// import { resetCategories } from '@src/redux/actions';
// import { resetOrganizations } from '@src/redux/actions';
// import { resetRecommendedPlaces } from '@src/redux/actions';
// import { resetHotDeals } from '@src/redux/actions';
// import { resetAllOpenedOrganizations } from '@src/redux/actions';
// import { resetAllClosedOrganizations } from '@src/redux/actions';
// import { v4 } from 'uuid';
// import { setUUID, getIsRegistered } from './src/redux/actions';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// function fetchData() {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//   const data = { message: 'Hello from fetched data!' };
//   resolve(data);
// }, 1);
// });
// }

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
  const dispatch = useDispatch();
  // const { uuid } = useSelector((state) => state.userReducer);
  // console.log(uuid);
  useEffect(() => {
    const clearData = async () => {
      await AsyncStorage.removeItem('persist:user');
      // await AsyncStorage.clear();
    };
    clearData().catch(console.error);
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
  });
  return <></>;
};
