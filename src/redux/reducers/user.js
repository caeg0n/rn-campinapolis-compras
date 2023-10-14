import { SET_ALL_ORGANIZATIONS } from '@src/redux/actions/user';
import { SET_MOST_POPULAR } from '@src/redux/actions/user';
import { SET_ALL_CATEGORIES } from '@src/redux/actions/user';
import { SET_RECOMMENDED_PLACES } from '@src/redux/actions/user';
import { SET_HOT_DEALS } from '@src/redux/actions/user';
import { SET_ALL_OPENED_ORGANIZATIONS } from '@src/redux/actions/user';
import { SET_ALL_CLOSED_ORGANIZATIONS } from '@src/redux/actions/user';
import { SET_ALL_PAYMENTS_METHODS } from '@src/redux/actions/user';
import { SET_CATEGORIES_AND_PRODUCTS } from '@src/redux/actions/user';
import { RESET_CATEGORIES } from '@src/redux/actions/user';
import { RESET_MOST_POPULAR } from '@src/redux/actions/user';
import { RESET_ORGANIZATIONS } from '@src/redux/actions/user';
import { RESET_RECOMMENDED_PLACES } from '@src/redux/actions/user';
import { RESET_HOT_DEALS } from '@src/redux/actions/user';
import { RESET_ALL_OPENED_ORGANIZATIONS } from '@src/redux/actions/user';
import { RESET_ALL_CLOSED_ORGANIZATIONS } from '@src/redux/actions/user';
import { RESET_CATEGORIES_AND_PRODUCTS } from '@src/redux/actions/user';


const initialState = {
  all_payments_methods: [],
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
    case SET_ALL_PAYMENTS_METHODS:
      return { ...state, all_payments_methods: action.payload };
    case SET_ALL_ORGANIZATIONS:
      return { ...state, all_organizations: action.payload };
    case SET_MOST_POPULAR:
      return { ...state, most_popular: action.payload };
    case SET_ALL_CATEGORIES:
      return { ...state, all_categories: action.payload };
    case SET_RECOMMENDED_PLACES:
      return { ...state, recommended_places: action.payload };
    case SET_HOT_DEALS:
      return { ...state, hot_deals: action.payload };
    case SET_ALL_OPENED_ORGANIZATIONS:
      return { ...state, all_opened_organizations: action.payload };
    case SET_ALL_CLOSED_ORGANIZATIONS:
      return { ...state, all_closed_organizations: action.payload };
    case SET_CATEGORIES_AND_PRODUCTS:
      return { ...state, categories_and_products: action.payload };
    case RESET_CATEGORIES:
      return { ...state, all_categories: action.payload };
    case RESET_MOST_POPULAR:
      return { ...state, most_popular: action.payload };
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
    case RESET_CATEGORIES_AND_PRODUCTS:
      return { ...state, categories_and_products: action.payload };
    default:
      return state;
  }
}

export default userReducer;