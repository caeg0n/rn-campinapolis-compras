export const SET_USER_UUID = 'SET_USER_UUID';
export const SET_USER_EXPO_TOKEN = 'SET_USER_EXPO_TOKEN';
export const SET_ADDRESSES = 'SET_ADDRESSES';
export const SET_SELECTED_ADDRESS = 'SET_SELECTED_ADDRESS';
export const SET_SELECTED_PAYMENT_METHOD = 'SET_SELECTED_PAYMENT_METHOD';
export const SET_ORDERS = 'SET_ORDERS';
export const SET_EXPO_TOKEN = 'SET_EXPO_TOKEN';
export const SET_ORDER_STATUS_LIST = 'SET_ORDER_STATUS_LIST';
export const SET_ORDER_MANAGED_STATUS = 'SET_ORDER_MANAGED_STATUS';
export const RESET_UUID = 'RESET_UUID';
export const RESET_SELECTED_ADDRESS = 'RESET_SELECTED_ADDRESS';
export const RESET_SELECTED_PAYMENT_METHOD = 'RESET_SELECTED_PAYMENT_METHOD';
export const RESET_ORDERS = 'RESET_ORDERS';

export const setUUID = (uuid) => (dispatch) => {
  dispatch({
    type: SET_USER_UUID,
    payload: uuid,
  });
};

export const setOrders = (orders) => (dispatch) => {
  dispatch({
    type: SET_ORDERS,
    payload: orders,
  });
};

export const setOrderStatusList = (list) => (dispatch) => {
  dispatch({
    type: SET_ORDER_STATUS_LIST,
    payload: list
  });
};

export const setOrderManagedStatus = (list) => (dispatch) => {
  dispatch({
    type: SET_ORDER_MANAGED_STATUS,
    payload: list
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

export const setExpoToken = (token) => (dispatch) => {
  dispatch({
    type: SET_EXPO_TOKEN,
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

export const resetSelectedPaymentMethod = () => (dispatch) => {
  dispatch({
    type: RESET_SELECTED_PAYMENT_METHOD,
    payload: {},
  });
};

export const resetOrders = () => (dispatch) => {
  dispatch({
    type: RESET_ORDERS,
    payload: {},
  });
};