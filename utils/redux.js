import _ from 'lodash/fp';
import chalk from 'chalk';
import {static as immutable} from 'seamless-immutable';

import {makeAsyncActionCreator, makeAsyncReducer} from 'redux-toolbelt';
import {combineReducers} from 'redux';
import {ofType, combineEpics} from 'redux-observable';
import {mergeMap, catchError, takeUntil} from 'rxjs/operators';
import {from, of, concat} from 'rxjs';

export const ASYNC_ACTIONS = [];
export const ASYNC_RESOLVERS_MAP = {};
export const ON_SUCCESS_ACTIONS = {};
export const ON_FAILURE_ACTIONS = {};
export const ASYNC_REDUCERS = {};

export const makeAsyncOperation = ({
  entityName,
  actionName,
  resolver = () => Promise.resolve(null),
  onSuccessAction,
  onFailureAction,
}) => {
  const fullActionName = `${entityName}/${actionName}`;

  const action = makeAsyncActionCreator(fullActionName);

  const selector = (state) => state[fullActionName];

  ASYNC_ACTIONS.push(action);

  const reducer = makeAsyncReducer(action);

  ASYNC_REDUCERS[fullActionName] = reducer;

  ASYNC_RESOLVERS_MAP[action.TYPE] = resolver;

  if (onSuccessAction) {
    ON_SUCCESS_ACTIONS[action.TYPE] = onSuccessAction;
  }

  if (onSuccessAction) {
    ON_FAILURE_ACTIONS[action.TYPE] = onFailureAction;
  }

  const result = {
    [`${actionName}Async`]: action,
    [_.camelCase(`select_${actionName}_state`)]: selector,
  };

  console.log(chalk.dim(`CREATE ${actionName} OPERATION`));

  return result;
};

export const createAsyncEpic = (
  actions,
  resolversMap,
  onSuccessActions,
  onErrorActions,
) => {
  const asyncEpic = (action$, state$) =>
    action$.pipe(
      ofType(...actions.map((action) => action.TYPE)),
      mergeMap(({type, payload}) => {
        const currentAction = actions.find((action) => action.TYPE === type);
        const resolver = resolversMap[type];

        return from(resolver(payload, state$)).pipe(
          mergeMap((result) => {
            const onSuccess = onSuccessActions[type];

            return concat(
              ...[
                onSuccess ? of(onSuccess(result)) : undefined,
                of(currentAction.success(result)),
              ].filter(Boolean),
            );
          }),
          catchError((error) => {
            const onError = onErrorActions[type];

            const formattedError = {message: error.message, ...error};

            return concat(
              ...[
                onError ? of(onError(formattedError)) : undefined,
                of(currentAction.failure(formattedError)),
              ].filter(Boolean),
            );
          }),
          takeUntil(action$.pipe(ofType(currentAction.cancel.TYPE))),
        );
      }),
    );

  return asyncEpic;
};

export const selectEntityLoading = (entityName, state) => {
  const keys = _.keys(state).filter((key) => key.split('/')[0] === entityName);

  return _.pick(state, keys)
    .map((actionState) => state.loading)
    .some(Boolean);
};

export const simpleMergeState = (state, {payload}) =>
  immutable.merge(state, payload, {deep: true});

export const stateStub = () => ({
  data: null,
});

export type ActionCreator<Payload> = (Payload) => {
  type: string,
  payload: Payload,
};

// TODO типизировать
export type AsyncActionCreator<Payload, Result> = (Payload) => {
  type: string,
  payload: Payload,
};

export const createReduxStuff = ({
  entities = [],
  reducers = {},
  epics = [],
}) => {
  const rootReducer = combineReducers({
    ...reducers,
    ...entities.reduce((acc, e) => ({...acc, ...e.reducer}), {}),
    ...ASYNC_REDUCERS,
  });

  const asyncEpic = createAsyncEpic(
    ASYNC_ACTIONS,
    ASYNC_RESOLVERS_MAP,
    ON_SUCCESS_ACTIONS,
    ON_FAILURE_ACTIONS,
  );

  const rootEpic = combineEpics(
    ...epics,
    ..._.flatten(entities.map((e) => e.epic)).filter(Boolean),
    asyncEpic,
  );

  return {
    rootReducer,
    rootEpic,
  };
};
