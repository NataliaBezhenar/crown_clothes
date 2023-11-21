import { all, call } from "typed-redux-saga/macro";

import { userSagas } from "./user/user.saga";
import { categriesSaga } from "./categories/categories.saga";

export function* rootSaga() {
  yield* all([call(categriesSaga), call(userSagas)]);
}
