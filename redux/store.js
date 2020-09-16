import {createStore, applyMiddleware, compose} from 'redux';
import chalk from 'chalk';
import {reactotron} from './reactotron';
import {middlewares, epicMiddleware} from './middlewares';

import * as storage from 'entities/storage/state';

import {createReduxStuff} from 'utils/redux';

const {rootReducer, rootEpic} = createReduxStuff({
  entities: [storage],
  reducers: {},
  epics: [],
});

// eslint-disable-next-line no-console
console.log('✅ ' + chalk.cyan('Store initialized!'));
console.log(
  "You're now in " + chalk.underline(process.env.NODE_ENV) + ' mode.',
);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV !== 'production'
      ? reactotron.createEnhancer()
      : (f) => f,
    window.devToolsExtension && process.env.NODE_ENV !== 'production'
      ? window.devToolsExtension()
      : (f) => f,
  ),
);

epicMiddleware.run(rootEpic);

export default store;
