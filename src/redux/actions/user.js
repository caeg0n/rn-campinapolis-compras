/* eslint-disable no-unreachable */
import { DEV_API_BASE, PROD_API_BASE } from '@env';

export const GET_ALL_ORGANIZATIONS = 'GET_ALL_ORGANIZATIONS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_OPENED_ORGANIZATIONS = 'GET_ALL_OPENED_ORGANIZATIONS';
export const GET_ALL_CLOSED_ORGANIZATIONS = 'GET_ALL_CLOSED_ORGANIZATIONS';
export const GET_MOST_POPULAR = 'GET_MOST_POPULAR';
export const GET_RECOMMENDED_PLACES = 'GET_RECOMMENDED_PLACES';
export const GET_HOT_DEALS = 'GET_HOT_DEALS';
export const GET_CATEGORIES_AND_PRODUCTS = 'GET_CATEGORIES_AND_PRODUCTS';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const RESET_MOST_POPULAR = 'RESET_MOST_POPULAR';
export const RESET_ORGANIZATIONS = 'RESET_ORGANIZATIONS';
export const RESET_RECOMMENDED_PLACES = 'RESET_RECOMMENDED_PLACES';
export const RESET_HOT_DEALS = 'RESET_HOT_DEALS';
export const RESET_ALL_OPENED_ORGANIZATIONS = 'RESET_ALL_OPENED_ORGANIZATIONS';
export const RESET_ALL_CLOSED_ORGANIZATIONS = 'RESET_ALL_CLOSED_ORGANIZATIONS';

if (__DEV__) {
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
  var GET_ALL_CATEGORIES_URL = PROD_API_BASE + '/get_all_categories';
  var GET_MOST_POPULAR_URL = PROD_API_BASE + '/get_most_popular/5';
  var GET_RECOMMENDED_PLACES_URL = PROD_API_BASE + '/get_recommended_places';
  var GET_HOT_DEALS_URL = PROD_API_BASE + '/get_hot_deals';
  var GET_ALL_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_organizations_with_distinct_category';
  var GET_ALL_OPENED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_opened_organizations';
  var GET_ALL_CLOSED_ORGANIZATIONS_URL =
    PROD_API_BASE + '/get_all_closed_organizations';
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
