// @flow
import {makeReducer} from 'redux-toolbelt';
import _ from 'lodash/fp';
import {makeAsyncOperation, type AsyncActionCreator} from 'utils/redux';
import {static as immutable} from 'seamless-immutable';

import {type StorageKey, shouldCacheItems} from './';

import {resolveStorage, resolveSaveStorage} from './resolvers';

export const STORAGE_STATE_KEY = 'storage';

export const selectStorage = (state) => state[STORAGE_STATE_KEY];

// ACTIONS
export type StoragePayload = {
  [key: StorageKey]: any,
};

export type UpdateStoragePayload = {
  data: ?StoragePayload,
  saveLocal: ?boolean,
};

export const {
  updateStorageAsync,
  selectUpdateStorageState,
}: {
  updateStorageAsync: AsyncActionCreator<UpdateStoragePayload>,
} = makeAsyncOperation({
  entityName: STORAGE_STATE_KEY,
  actionName: 'updateStorage',
  resolver: async ({data, saveLocal = true}) => {
    if (!saveLocal) {
      return;
    }

    const toSave = _.pick(shouldCacheItems, data);

    await resolveSaveStorage(toSave);

    return data;
  },
});

export const {
  initStorageAsync,
  selectInitStorageState,
}: {
  initStorageAsync: AsyncActionCreator<void>,
} = makeAsyncOperation({
  entityName: STORAGE_STATE_KEY,
  actionName: 'initStorage',
  resolver: () => resolveStorage().then(_.pick(shouldCacheItems)),
  onSuccessAction: (data) => updateStorageAsync({data, saveLocal: false}),
});

// REDUCERS
export const dataReducer = makeReducer(
  {
    [updateStorageAsync]: (state, {payload}) =>
      immutable.merge(state, {data: payload.data}, {deep: true}),
  },
  {defaultState: {data: {}}},
);

export const reducer = {
  storage: dataReducer,
};

// EPICS

export const epic = [];
