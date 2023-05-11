import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { AnyAction, Store, configureStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        thunk: false,
        // serializableCheck: false
      }),
      sagaMiddleware,
    ],
    devTools: true,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
export const wrapper = createWrapper<AppStore>(makeStore);

export interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask: Task;
}
