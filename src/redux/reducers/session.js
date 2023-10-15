import { SET_USER_UUID } from '@src/redux/actions/session';
import { SET_USER_EXPO_TOKEN } from '@src/redux/actions/session';
import { SET_ADDRESSES } from '@src/redux/actions/session';
import { SET_SELECTED_ADDRESS } from '@src/redux/actions/session';
import { SET_SELECTED_PAYMENT_METHOD } from '@src/redux/actions/session';
import { RESET_UUID } from '@src/redux/actions/session';
import { RESET_SELECTED_ADDRESS } from '@src/redux/actions/session';

const initialState = {
  uuid: '',
  expo_token: '',
  addresses: [],
  selected_address: {},
  selected_payment_method: 0
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_UUID:
      return { ...state, uuid: action.payload };
    case SET_USER_EXPO_TOKEN:
      return { ...state, expo_token: action.payload };
    case SET_ADDRESSES:
      return { ...state, addresses: action.payload };
    case SET_SELECTED_ADDRESS:
      return { ...state, selected_address: action.payload };
    case SET_SELECTED_PAYMENT_METHOD:
      return { ...state, selected_payment_method: action.payload };
    case RESET_UUID:
      return { ...state, uuid: action.payload };
    case RESET_SELECTED_ADDRESS:
        return { ...state, selected_address: action.payload };
    default:
      return state;
  }
}

export default sessionReducer;
