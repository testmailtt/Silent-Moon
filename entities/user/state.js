import { makeActionCreator, makeReducer } from 'redux-toolbelt';
import { makeAsyncOperation } from 'utils/redux';
import { static as immutable } from 'seamless-immutable';

export const USER_STATE_KEY = 'user';

export const selectIsAuth = (state) => state[USER_STATE_KEY].isAuth;
export const selectUsername = (state) => state[USER_STATE_KEY].username;
export const selectIsNewUser = (state) => state[USER_STATE_KEY].isNewUser;

export const setAuth = makeActionCreator('user/SET_AUTH');
export const setNewUser = makeActionCreator('user/SET_NEW_USER');

export const { fetchAuthAsync, selectFetchAuthState } = makeAsyncOperation({
  entityName: USER_STATE_KEY,
  actionName: 'fetchAuth',
  resolver: async (flag) => flag,
  onSuccessAction: setAuth,
});

export const {
  fetchNewUserAsync,
  selectFetchNewUserState,
} = makeAsyncOperation({
  entityName: USER_STATE_KEY,
  actionName: 'fetchNewUser',
  resolver: async (flag) => flag,
  onSuccessAction: setNewUser,
});

// REDUCERS
export const userReducer = makeReducer(
  {
    [setAuth]: (state, { payload }) =>
      immutable.merge(state, { isAuth: payload }, { deep: true }),
    [setNewUser]: (state, { payload }) =>
      immutable.merge(state, { isNewUser: payload }, { deep: true }),
  },
  {
    defaultState: {
      isAuth: true,
      username: 'Antony',
      isNewUser: true,
    },
  }
);

export const reducer = {
  user: userReducer,
};

// EPICS

export const epic = [];
