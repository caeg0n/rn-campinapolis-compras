import { SET_USER_NAME } from '@src/redux/actions/user';
import { SET_USER_UUID } from '@src/redux/actions/user';
import { SET_USER_EXPO_TOKEN } from '@src/redux/actions/user';
import { GET_ALL_ORGANIZATIONS } from '@src/redux/actions/user';
import { GET_ALL_CATEGORIES } from '@src/redux/actions/user';
import { GET_ALL_OPENED_ORGANIZATIONS } from '@src/redux/actions/user';
import { GET_ALL_CLOSED_ORGANIZATIONS } from '@src/redux/actions/user';
import { GET_MOST_POPULAR } from '@src/redux/actions/user';
import { GET_RECOMMENDED_PLACES } from '@src/redux/actions/user';
import { GET_HOT_DEALS } from '@src/redux/actions/user';
import { GET_CATEGORIES_AND_PRODUCTS } from '@src/redux/actions/user';
import { GET_IS_REGISTERED } from '@src/redux/actions/user';
import { GET_UUID } from '@src/redux/actions/user';
import { RESET_CATEGORIES } from '@src/redux/actions/user';
import { RESET_ORGANIZATIONS } from '@src/redux/actions/user';
import { RESET_RECOMMENDED_PLACES } from '@src/redux/actions/user';
import { RESET_HOT_DEALS } from '@src/redux/actions/user';
import { RESET_ALL_OPENED_ORGANIZATIONS } from '@src/redux/actions/user';
import { RESET_ALL_CLOSED_ORGANIZATIONS } from '@src/redux/actions/user';

const initialState = {
  name: '',
  cities: [],
  uuid: '',
  is_registered: {},
  url_base: '',
  expo_token: '',
  all_organizations: {},
  all_categories: [],
  all_opened_organizations: [],
  all_closed_organizations: [],
  most_popular: [],
  recommended_places: [],
  hot_deals: [],
  categories_and_products: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_UUID:
      return { ...state, uuid: action.payload };
    case SET_USER_EXPO_TOKEN:
      return { ...state, expo_token: action.payload };
    case GET_ALL_ORGANIZATIONS:
      return { ...state, all_organizations: action.payload };
    case GET_ALL_CATEGORIES:
      return { ...state, all_categories: action.payload };
    case GET_ALL_OPENED_ORGANIZATIONS:
      return { ...state, all_opened_organizations: action.payload };
    case GET_ALL_CLOSED_ORGANIZATIONS:
      return { ...state, all_closed_organizations: action.payload };
    case GET_MOST_POPULAR:
      return { ...state, most_popular: action.payload };
    case GET_RECOMMENDED_PLACES:
      return { ...state, recommended_places: action.payload };
    case GET_HOT_DEALS:
      return { ...state, hot_deals: action.payload };
    case GET_CATEGORIES_AND_PRODUCTS:
      return { ...state, categories_and_products: action.payload };
    case GET_IS_REGISTERED:
      return { ...state, is_registered: action.payload };
    case GET_UUID:
      return { ...state, uuid: action.payload };
    case RESET_CATEGORIES:
      return { ...state, all_categories: action.payload };
    case RESET_ORGANIZATIONS:
      return { ...state, all_organizations: action.payload };
    case RESET_RECOMMENDED_PLACES:
      return { ...state, recommended_places: action.payload };
    case RESET_HOT_DEALS:
      return { ...state, hot_deals: action.payload };
    case RESET_ALL_OPENED_ORGANIZATIONS:
      return { ...state, all_opened_organizations: action.payload };
    case RESET_ALL_CLOSED_ORGANIZATIONS:
      return { ...state, all_closed_organizations: action.payload };
    default:
      return state;
  }
}

export default userReducer;
