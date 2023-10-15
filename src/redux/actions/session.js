/* eslint-disable no-unreachable */
import { DEV_API_BASE, PROD_API_BASE } from '@env';

export const SET_USER_UUID = 'SET_USER_UUID';
export const SET_USER_EXPO_TOKEN = 'SET_USER_EXPO_TOKEN';
export const SET_ADDRESSES = 'SET_ADDRESSES';
export const SET_SELECTED_ADDRESS = 'SET_SELECTED_ADDRESS';
export const SET_SELECTED_PAYMENT_METHOD = 'SET_SELECTED_PAYMENT_METHOD';
export const RESET_UUID = 'RESET_UUID';
export const RESET_SELECTED_ADDRESS = 'RESET_SELECTED_ADDRESS';

if (__DEV__) {
  var SET_USER_EXPO_TOKEN_URL = DEV_API_BASE + '/update_token';
} else {
  var SET_USER_EXPO_TOKEN_URL = PROD_API_BASE + '/update_token';
}

export const setUUID = (uuid) => (dispatch) => {
  dispatch({
    type: SET_USER_UUID,
    payload: uuid,
  });
};

export const setAddresses = (json) => (dispatch) => {
  dispatch({
    type: SET_ADDRESSES,
    payload: json,
  });
};

export const setSelectedAddress = (json) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_ADDRESS,
    payload: json,
  });
};

export const setSelectedPaymentMethod = (json) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_PAYMENT_METHOD,
    payload: json,
  });
};

export const setExpoToken = (token, device_id) => (dispatch) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        notification: {
          device_id: device_id,
          token: token,
          device_class: 2,
        },
      }),
    };
    fetch(SET_USER_EXPO_TOKEN_URL + '.json', requestOptions).then((response) =>
      response.json(),
    );
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: SET_USER_EXPO_TOKEN,
    payload: token,
  });
};

export const resetUUID = () => (dispatch) => {
  dispatch({
    type: RESET_UUID,
    payload: '',
  });
};

export const resetSelectedAddress = () => (dispatch) => {
  dispatch({
    type: RESET_SELECTED_ADDRESS,
    payload: {},
  });
};