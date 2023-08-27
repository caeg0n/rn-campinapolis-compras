import React, { useEffect } from 'react';
import { getAllCategories } from '@src/redux/actions';
import { getMostPopular } from '@src/redux/actions';
import { getRecommendedPlaces } from '@src/redux/actions';
import { getHotDeals } from '@src/redux/actions';
import { getAllOrganizations } from '@src/redux/actions';
import { getAllOpenedOrganizations } from '@src/redux/actions';
import { getAllClosedOrganizations } from '@src/redux/actions';
import { resetCategories } from '@src/redux/actions';
import { resetOrganizations } from '@src/redux/actions';
import { resetRecommendedPlaces } from '@src/redux/actions';
import { resetHotDeals } from '@src/redux/actions';
import { resetAllOpenedOrganizations } from '@src/redux/actions';
import { resetAllClosedOrganizations } from '@src/redux/actions';
import { useDispatch } from 'react-redux';

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

  useEffect(() => {
    const init = async () => {
      try {
        console.log('StartupContainer');
        dispatch(resetCategories());
        dispatch(resetOrganizations());
        dispatch(resetRecommendedPlaces());
        dispatch(resetHotDeals());
        dispatch(resetAllOpenedOrganizations());
        dispatch(resetAllClosedOrganizations());
        await dispatch(getAllOrganizations());
        await dispatch(getAllOpenedOrganizations());
        await dispatch(getAllClosedOrganizations());
        await dispatch(getHotDeals());
        await dispatch(getRecommendedPlaces());
        await dispatch(getAllCategories());
        await dispatch(getMostPopular());
      } catch (error) {
        console.error('An error occurred during app initialization:', error);
      }
    };
    init();
  });
  return <></>;
};
