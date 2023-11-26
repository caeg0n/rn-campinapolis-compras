export const SET_ALL_PAYMENTS_METHODS = 'SET_ALL_PAYMENTS_METHODS';
export const SET_ALL_ORGANIZATIONS = 'SET_ALL_ORGANIZATIONS';
export const SET_MOST_POPULAR = 'SET_MOST_POPULAR';
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
export const SET_RECOMMENDED_PLACES = 'SET_RECOMMENDED_PLACES';
export const SET_HOT_DEALS = 'SET_HOT_DEALS';
export const SET_ALL_OPENED_ORGANIZATIONS = 'SET_ALL_OPENED_ORGANIZATIONS';
export const SET_ALL_CLOSED_ORGANIZATIONS = 'SET_ALL_CLOSED_ORGANIZATIONS';
export const SET_CATEGORIES_AND_PRODUCTS = 'SET_CATEGORIES_AND_PRODUCTS';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const RESET_MOST_POPULAR = 'RESET_MOST_POPULAR';
export const RESET_ORGANIZATIONS = 'RESET_ORGANIZATIONS';
export const RESET_RECOMMENDED_PLACES = 'RESET_RECOMMENDED_PLACES';
export const RESET_HOT_DEALS = 'RESET_HOT_DEALS';
export const RESET_ALL_OPENED_ORGANIZATIONS = 'RESET_ALL_OPENED_ORGANIZATIONS';
export const RESET_ALL_CLOSED_ORGANIZATIONS = 'RESET_ALL_CLOSED_ORGANIZATIONS';
export const RESET_CATEGORIES_AND_PRODUCTS = 'RESET_CATEGORIES_AND_PRODUCTS';

export const setAllPaymentsMethods = (json) => (dispatch) => {
  dispatch({
    type: SET_ALL_PAYMENTS_METHODS,
    payload: json,
  });
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

export const setRecommendedPlaces = (json) => (dispatch) => {
  dispatch({
    type: SET_RECOMMENDED_PLACES,
    payload: json,
  });
};

export const setHotDeals = (json) => (dispatch) => {
  dispatch({
    type: SET_HOT_DEALS,
    payload: json,
  });
};

export const setAllOpenedOrganizations = (json) => (dispatch) => {
  dispatch({
    type: SET_ALL_OPENED_ORGANIZATIONS,
    payload: json,
  });
};

export const setAllClosedOrganizations = (json) => (dispatch) => {
  dispatch({
    type: SET_ALL_CLOSED_ORGANIZATIONS,
    payload: json,
  });
};

export const setCategoriesAndProducts = (json) => (dispatch) => {
  dispatch({
    type: SET_CATEGORIES_AND_PRODUCTS,
    payload: json,
  });
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

export const resetCategoriesAndProducts = () => (dispatch) => {
  dispatch({
    type: RESET_CATEGORIES_AND_PRODUCTS,
    payload: [],
  });
};
