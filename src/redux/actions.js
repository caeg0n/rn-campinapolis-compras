/* eslint-disable no-unreachable */
import { DEV_API_BASE, PROD_API_BASE } from '@env';

export const SET_USER_UUID = 'SET_USER_UUID';
export const SET_USER_EXPO_TOKEN = 'SET_USER_EXPO_TOKEN';
export const SEND_EMERGENCY_MESSAGE = 'SEND_EMERGENCY_MESSAGE';
export const GET_ALL_ORGANIZATIONS = 'GET_ALL_ORGANIZATIONS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_OPENED_ORGANIZATIONS = 'GET_ALL_OPENED_ORGANIZATIONS';
export const GET_ALL_CLOSED_ORGANIZATIONS = 'GET_ALL_CLOSED_ORGANIZATIONS';
export const GET_MOST_POPULAR = 'GET_MOST_POPULAR';
export const GET_RECOMMENDED_PLACES = 'GET_RECOMMENDED_PLACES';
export const GET_HOT_DEALS = 'GET_HOT_DEALS';
export const GET_CATEGORIES_AND_PRODUCTS = 'GET_CATEGORIES_AND_PRODUCTS';

if (__DEV__) {
  var SET_USER_EXPO_TOKEN_URL = DEV_API_BASE + '/update_token';
  var SEND_EMERGENCY_MESSAGE_URL = DEV_API_BASE + '/send_emergency_message';
  var GET_ALL_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_ALL_CATEGORIES_URL = DEV_API_BASE + '/get_all_categories';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_closed_organizations';
  var GET_MOST_POPULAR_URL = DEV_API_BASE + '/get_most_popular/5';
  var GET_RECOMMENDED_PLACES_URL = DEV_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = DEV_API_BASE + '/get_hot_deals';
  var GET_CATEGORIES_AND_PRODUCTS_URL =
    DEV_API_BASE + '/get_categories_and_products';
} else {
  var SET_USER_EXPO_TOKEN_URL = PROD_API_BASE + '/update_token';
  var SEND_EMERGENCY_MESSAGE_URL = PROD_API_BASE + '/send_emergency_message';
  var GET_ALL_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_ALL_CATEGORIES_URL = PROD_API_BASE + '/get_all_categories';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_closed_organizations';
  var GET_MOST_POPULAR_URL = PROD_API_BASE + '/get_most_popular/5';
  var GET_RECOMMENDED_PLACES_URL = PROD_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = PROD_API_BASE + '/get_hot_deals';
  var GET_CATEGORIES_AND_PRODUCTS_URL =
    PROD_API_BASE + '/get_categories_and_products';
}

export const getAllOrganizations = () => {
  const url = GET_ALL_ORGANIZATIONS_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALL_ORGANIZATIONS,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_all_organizations');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getMostPopular = () => {
  const url = GET_MOST_POPULAR_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MOST_POPULAR,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_most_popular');
      }
    };
  } catch (error) {}
};

export const getRecommendedPlaces = () => {
  const url = GET_RECOMMENDED_PLACES_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_RECOMMENDED_PLACES,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_most_popular');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getHotDeals = () => {
  const url = GET_HOT_DEALS_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_HOT_DEALS,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_most_popular');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getAllOpenedOrganizations = () => {
  const url = GET_ALL_OPENED_ORGANIZATIONS_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALL_OPENED_ORGANIZATIONS,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_all_organizations');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getAllClosedOrganizations = () => {
  const url = GET_ALL_CLOSED_ORGANIZATIONS_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALL_CLOSED_ORGANIZATIONS,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_all_organizations');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = () => {
  const url = GET_ALL_CATEGORIES_URL + '.json';
  try {
    return async (dispatch) => {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_all_organizations');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesAndProducts = (organization) => {
  const url = GET_CATEGORIES_AND_PRODUCTS_URL + '/' + organization.id;
  try {
    return async (dispatch) => {
      const result = await fetch(url);
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CATEGORIES_AND_PRODUCTS,
          payload: json,
        });
      } else {
        console.log('unable to fetch get_categories_and_products');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setUUID = (uuid) => (dispatch) => {
  dispatch({
    type: SET_USER_UUID,
    payload: uuid,
  });
};

export const sendEmergencyMessage = (uuid) => (dispatch) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        notification: {
          device_id: uuid,
        },
      }),
    };
    fetch(SEND_EMERGENCY_MESSAGE_URL + '.json', requestOptions).then(
      (response) => response.json(),
    );
  } catch (error) {
    console.log(error);
  }
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
