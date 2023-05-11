import { AnyAction, Store, configureStore  } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import rootReducer from "./root.reducer";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./root.saga";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(() => makeStore());

export type AppDispatch = ReturnType<AppStore["dispatch"]>;

export interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask: Task;
}
