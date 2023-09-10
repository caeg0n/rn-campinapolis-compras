import { SET_USER_UUID } from '@src/redux/actions/session';
import { SET_USER_EXPO_TOKEN } from '@src/redux/actions/session';
import { SET_ADDRESSES } from '@src/redux/actions/session';
//import { GET_IS_REGISTERED } from '@src/redux/actions/session';
import { RESET_UUID } from '@src/redux/actions/session';

const initialState = {
  uuid: '',
  expo_token: '',
  addresses: [],
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_UUID:
      return { ...state, uuid: action.payload };
    case SET_USER_EXPO_TOKEN:
      return { ...state, expo_token: action.payload };
    case SET_ADDRESSES:
      return { ...state, addresses: action.payload };
    case RESET_UUID:
      return { ...state, uuid: action.payload };
    default:
      return state;
  }
}

export default sessionReducer;
