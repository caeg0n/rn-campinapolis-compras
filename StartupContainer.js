import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setUUID } from '@src/redux/actions/session';
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
  });

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
