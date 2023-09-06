/* eslint-disable no-unreachable */
import { DEV_API_BASE, PROD_API_BASE } from '@env';

export const SET_ALL_ORGANIZATIONS = 'SET_ALL_ORGANIZATIONS';
export const SET_MOST_POPULAR = 'SET_MOST_POPULAR';
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
export const GET_ALL_OPENED_ORGANIZATIONS = 'GET_ALL_OPENED_ORGANIZATIONS';
export const GET_ALL_CLOSED_ORGANIZATIONS = 'GET_ALL_CLOSED_ORGANIZATIONS';
export const GET_RECOMMENDED_PLACES = 'GET_RECOMMENDED_PLACES';
export const GET_HOT_DEALS = 'GET_HOT_DEALS';
export const GET_CATEGORIES_AND_PRODUCTS = 'GET_CATEGORIES_AND_PRODUCTS';
export const GET_ADDRESSES = 'GET_ADDRESSES';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const RESET_MOST_POPULAR = 'RESET_MOST_POPULAR';
export const RESET_ORGANIZATIONS = 'RESET_ORGANIZATIONS';
export const RESET_RECOMMENDED_PLACES = 'RESET_RECOMMENDED_PLACES';
export const RESET_HOT_DEALS = 'RESET_HOT_DEALS';
export const RESET_ALL_OPENED_ORGANIZATIONS = 'RESET_ALL_OPENED_ORGANIZATIONS';
export const RESET_ALL_CLOSED_ORGANIZATIONS = 'RESET_ALL_CLOSED_ORGANIZATIONS';

if (__DEV__) {
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    DEV_API_BASE + '/get_all_closed_organizations';
  var GET_RECOMMENDED_PLACES_URL = DEV_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = DEV_API_BASE + '/get_hot_deals';
  var GET_CATEGORIES_AND_PRODUCTS_URL =
    DEV_API_BASE + '/get_categories_and_products';
  var GET_ADDRESSES_URL = DEV_API_BASE + '/get_addresses';
} else {
  var GET_RECOMMENDED_PLACES_URL = PROD_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = PROD_API_BASE + '/get_hot_deals';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_closed_organizations';
  var GET_CATEGORIES_AND_PRODUCTS_URL =
    PROD_API_BASE + '/get_categories_and_products';
  var GET_ADDRESSES_URL = PROD_API_BASE + '/get_addresses';
}

export const getAddresses = (uuid) => {
  const url = GET_ADDRESSES_URL + '/' + uuid + '.json';
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
        console.log('getAddresses()');
        dispatch({
          type: GET_ADDRESSES,
          payload: json,
        });
      } else {
        console.log('unable to fectch get_addresses');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setAllOrganizations = (json) => (dispatch) => {
  dispatch({
    type: SET_ALL_ORGANIZATIONS,
    payload: json,
  });
};

export const setMostPopular = (json) => (dispatch) => {
  dispatch({
    type: SET_MOST_POPULAR,
    payload: json,
  });
};

export const setAllCategories = (json) => (dispatch) => {
  dispatch({
    type: SET_ALL_CATEGORIES,
    payload: json,
  });
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
        console.log('getRecommendedPlaces()');
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
        console.log('getHotDeals()');
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
        console.log('getAllOpenedOrganizations()');
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
        console.log('getAllClosedOrganizations()');
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

export const getCategoriesAndProducts = (organization) => {
  const url = GET_CATEGORIES_AND_PRODUCTS_URL + '/' + organization.id;
  try {
    return async (dispatch) => {
      const result = await fetch(url);
      const json = await result.json();
      if (json) {
        console.log('getCategoriesAndProducts()');
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

export const resetCategories = () => (dispatch) => {
  dispatch({
    type: RESET_CATEGORIES,
    payload: [],
  });
};

export const resetMostPopular = () => (dispatch) => {
  dispatch({
    type: RESET_MOST_POPULAR,
    payload: [],
  });
};

export const resetOrganizations = () => (dispatch) => {
  dispatch({
    type: RESET_ORGANIZATIONS,
    payload: {},
  });
};

export const resetRecommendedPlaces = () => (dispatch) => {
  dispatch({
    type: RESET_RECOMMENDED_PLACES,
    payload: [],
  });
};

export const resetHotDeals = () => (dispatch) => {
  dispatch({
    type: RESET_HOT_DEALS,
    payload: [],
  });
};

export const resetAllOpenedOrganizations = () => (dispatch) => {
  dispatch({
    type: RESET_ALL_OPENED_ORGANIZATIONS,
    payload: [],
  });
};

export const resetAllClosedOrganizations = () => (dispatch) => {
  dispatch({
    type: RESET_ALL_CLOSED_ORGANIZATIONS,
    payload: [],
  });
};
