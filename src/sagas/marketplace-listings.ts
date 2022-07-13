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
import { LISTINGS } from "../actions/types";
import { listings } from "../actions";
import { 
  setVerifyToken,
  setAccessToken, 
  getVerifyToken,
  getAccessToken, 
  getAccessJwtToken,
  getRefreshJwtToken,
  setPublicName, 
  removeVerifyToken
} from '../utils'
import history from "../history";
import CryptoJS from "crypto-js";

import {
  API_VERSION,
  SECURE_HOST,
  USER_LOGIN_METHOD,
  USER_VERIFY_METHOD,
  TOKEN_LIST_METHOD,
  TOKEN_GET_METHOD,
  FILE_LOAD_BASE64_METHOD,
  FILE_URL_METHOD,
  USER_RESET_PASSWORD_METHOD,
  USER_REGISTER_METHOD,
} from "../utils/constants";

const REQUEST_HOST = "api.curios.com";
const REQUEST_ACCESS_KEY = "ZV877J09P27T795Z";
const PRIVATE_KEY = "8v1niLGilU1cGSaXptk3E02NQSBRNHA/2eUTsv3ckDE=";
interface Action {
  action: string;
  payload: {};
}

function getRequestDate() {
  return new Date().toISOString();
}

function getRequestHeader(
  request_scope: string,
  request_data: string,
  authorization: string
) {
  let request_date = getRequestDate();
  let request_payload_hash = CryptoJS.SHA256(request_data).toString();
  let string_to_sign =
    request_date + " " + request_scope + " " + request_payload_hash;
  let signature = CryptoJS.HmacSHA256(string_to_sign, PRIVATE_KEY).toString();

  return {
    "curios-api-key": REQUEST_ACCESS_KEY,
    "curios-api-version": API_VERSION,
    "curios-date": request_date,
    "curios-signature": signature,
    "Authorization": authorization??"",
    "Content-Type": "application/x-www-form-urlencoded",
  };
}

function* getTokenList() {
  try {
    const request_url = REQUEST_HOST + "/" + TOKEN_LIST_METHOD;
    const request_scope = request_url + "/" + API_VERSION;

    let requestData = new FormData()
    let requestData_sign = {}
    let session_token = getAccessToken() || ""
    let headers = getRequestHeader(
      request_scope,
      JSON.stringify(requestData_sign),
      session_token
    );

    const { data } = yield call(
      axios.post,
      `${SECURE_HOST + request_url}`,
      requestData,
      { headers: headers }
    );

    if (data.SUCCESS === false && data.MESSAGE !== "") {
      yield put(listings.tokenListFailure(data));
    } else {
      yield put(listings.tokenListSuccess(data.DATA));

      // history.push("/marketplace-listings");
    }
  } catch (e: any) {
    yield put(listings.tokenListFailure({ error: { ...e.response.data } }));
  }
}

export function* watchListingsOperations() {
  console.log("here is listing saga");
  yield all([
    // @ts-ignore
    takeEvery(LISTINGS.TOKENLIST_REQUEST, getTokenList),
  ]);
}

export default watchListingsOperations;
