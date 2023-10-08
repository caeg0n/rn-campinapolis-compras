import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setUUID } from '@src/redux/actions/session';
import { setAddresses } from '@src/redux/actions/session';

if (__DEV__) {
  var GET_ADDRESSES_URL = DEV_API_BASE + '/get_addresses';
} else {
  var GET_ADDRESSES_URL = PROD_API_BASE + '/get_addresses';
}
//import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const { uuid } = useSelector((state) => state.sessionReducer);

  useEffect(() => {
    console.log('startup container');
    if (uuid === undefined || uuid === '') {
      dispatch(setUUID(v4()));
    }
    async function fetchData() {
      try {
        let jsonData = {};
        const response = await fetch(GET_ADDRESSES_URL + '/' + uuid);
        const json = await response.json();
        jsonData.jsonAddresses = json;
        return jsonData;
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData()
      .then((jsonData) => {
        dispatch(setAddresses(jsonData.jsonAddresses));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch, uuid]);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       //limpa asyncstorage
  //     } catch (error) {
  //       console.error('An error occurred during app initialization:', error);
  //     }
  //   };
  //   init();
  // }, [dispatch, uuid]);
};
