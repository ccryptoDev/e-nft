import { all, fork } from "redux-saga/effects";
import watchUserOperations from './authSaga'
import watchPaymentOperations from "./paymentSaga";
import watchListingsOperations from "./marketplace-listings";
import watchTokenOperations from "./nft"
import watchCart from './cartSaga'

export default function* rootSaga() {
  yield all([
    fork(watchUserOperations),
    fork(watchPaymentOperations),
    fork(watchListingsOperations),
    fork(watchTokenOperations),
    fork(watchCart)
  ])
}