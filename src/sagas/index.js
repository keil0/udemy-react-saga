import * as entriesSaga from "./entries.saga";

export const initSaga = (sagaMiddleware) => {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
