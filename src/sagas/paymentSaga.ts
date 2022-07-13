import {
  put,
  call,
  takeLatest,
  all,
  take,
  takeEvery,
  takeMaybe,
} from "redux-saga/effects";
import axios from "axios";
import { PAYMENT, OrderData } from "../actions/types";
import { payment } from "../actions";
import { setCart } from "../utils";
import history from "../history";

// const API_URL = process.env.REACT_APP_API_URL
const API_URL = "http://7892-104-223-98-2.ngrok.io";
interface Action {
  action: string;
  payload: {};
}

function* cryptoPayment(action: Action) {
  try {
    const { data } = yield call(
      axios.post,
      `${API_URL}/api/crypto`,
      action.payload
    );
    //
    yield put(payment.cryptoSuccess(data.data));
    alert("Crypto payment success!");
    history.push("/marketplace-listings");
  } catch (e) {
    // yield put(user.loginFailure({ error: { ...e.response.data } }))
  }
}

function* visaPayment(action: Action) {
  try {
    const { data } = yield call(
      axios.post,
      `${API_URL}/api/visa`,
      action.payload
    );
    // @ts-ignore
    yield put(payment.visaSuccess(data.data));
    alert("Visa payment success!");
    history.push("/marketplace-listings");
  } catch (e) {
    // yield put(payment.visaFailure({ error: { ...e.response.data } }))
  }
}

export function* watchPaymentOperations() {
  console.log("here is payment saga");
  yield all([
    // @ts-ignore
    takeEvery(PAYMENT.CRYPTO_REQUEST, cryptoPayment),
    // @ts-ignore
    takeEvery(PAYMENT.VISA_REQUEST, visaPayment),
  ]);
}

export default watchPaymentOperations;
