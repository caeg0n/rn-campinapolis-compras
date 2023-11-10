import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setUUID } from '@src/redux/actions/session';
import { setAddresses } from '@src/redux/actions/session';
//import { setSelectedPaymentMethod } from '@src/redux/actions/session';

if (__DEV__) {
  var GET_ADDRESSES_URL = DEV_API_BASE + '/get_addresses';
} else {
  var GET_ADDRESSES_URL = PROD_API_BASE + '/get_addresses';
}

//function findObjectById(array, id) {
//  return array.find((item) => item.id === id);
//}

export const StartupContainer = () => {
  const dispatch = useDispatch();
  const { uuid } = useSelector((state) => state.sessionReducer);
  //const { all_payments_methods } = useSelector((state) => state.userReducer);

  useEffect(() => {
    //dispatch(setSelectedPaymentMethod(findObjectById(all_payments_methods, 131)));
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
    if (!(uuid === undefined || uuid === '')) {
      fetchData()
        .then((jsonData) => {
          dispatch(setAddresses(jsonData.jsonAddresses));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [dispatch, uuid]);
};
