import { makeActionCreator, makeReducer } from 'redux-toolbelt';
import { makeAsyncOperation } from 'utils/redux';
import { static as immutable } from 'seamless-immutable';

export const USER_STATE_KEY = 'user';

export const selectIsAuth = (state) => state[USER_STATE_KEY].isAuth;

export const setAuth = makeActionCreator('user/SET_AUTH');

export const { fetchAuthAsync, selectFetchAuthState } = makeAsyncOperation({
  entityName: USER_STATE_KEY,
  actionName: 'fetchAuth',
  resolver: async () => await true,
  onSuccessAction: setAuth,
});

// REDUCERS
export const userReducer = makeReducer(
  {
    [setAuth]: (state, { payload }) =>
      immutable.merge(state, { isAuth: payload }, { deep: true }),
  },
  {
    defaultState: {
      isAuth: true,
    },
  }
);

export const reducer = {
  user: userReducer,
};

// EPICS

export const epic = [];
