import React, { useEffect } from 'react';
import { AuthContext } from './auth';
import { useDispatch } from 'react-redux';
// import { resetUUID } from '@src/redux/actions/session';
import { resetCategories } from '@src/redux/actions/user';
import { resetMostPopular } from '@src/redux/actions/user';
import { resetOrganizations } from '@src/redux/actions/user';
import { resetRecommendedPlaces } from '@src/redux/actions/user';
import { resetHotDeals } from '@src/redux/actions/user';
import { resetAllOpenedOrganizations } from '@src/redux/actions/user';
import { resetAllClosedOrganizations } from '@src/redux/actions/user';

import { setAllOrganizations } from '@src/redux/actions/user';
import { setMostPopular } from '@src/redux/actions/user';
import { setAllCategories } from '@src/redux/actions/user';
import { setRecommendedPlaces } from '@src/redux/actions/user';
import { setHotDeals } from '@src/redux/actions/user';
import { setAllOpenedOrganizations } from '@src/redux/actions/user';
import { setAllClosedOrganizations } from '@src/redux/actions/user';

const initialAuthState = {
  isLoading: false,
  isSignOut: false,
  userToken: '',
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
        isSignOut: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: null,
        isSignOut: true,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children, fetchData }) => {
  console.log('AuthProvider');
  const localDispatch = useDispatch();
  const [state, dispatch] = React.useReducer(AuthReducer, initialAuthState);
  const { userToken } = state;
  const authContext = React.useMemo(
    () => ({
      userToken,
      signIn: () => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: () => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    [userToken],
  );

  useEffect(() => {
    //reidrata asyncstorage
    localDispatch(resetCategories());
    localDispatch(resetMostPopular());
    localDispatch(resetOrganizations());
    localDispatch(resetRecommendedPlaces());
    localDispatch(resetHotDeals());
    localDispatch(resetAllOpenedOrganizations());
    localDispatch(resetAllClosedOrganizations());

    localDispatch(setAllOrganizations(fetchData.allOrganizations));
    localDispatch(setMostPopular(fetchData.mostPopular));
    localDispatch(setAllCategories(fetchData.allCategories));
    localDispatch(setRecommendedPlaces(fetchData.recommendedPlaces));
    localDispatch(setHotDeals(fetchData.hotDeals));
    localDispatch(setAllOpenedOrganizations(fetchData.allOpenedOrganizations));
    localDispatch(setAllClosedOrganizations(fetchData.allClosedOrganizations));
  });

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
