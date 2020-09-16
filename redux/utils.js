import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';
import _ from 'lodash';

export const createReduxStuff = ({
  entities = [],
  reducers = {},
  epics = [],
}) => {
  const rootReducer = combineReducers({
    ...reducers,
    ...entities.reduce((acc, e) => ({...acc, ...e.reducer}), {}),
  });

  const rootEpic = combineEpics(
    ...epics,
    ..._.flatten(entities.map((e) => e.epic)).filter(Boolean),
  );

  return {
    rootReducer,
    rootEpic,
  };
};
