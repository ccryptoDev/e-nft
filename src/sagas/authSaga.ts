import { put, call, all, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { USER } from '../actions/types'
import { user } from '../actions'
import { 
  setVerifyToken,
  setAccessToken, 
  getVerifyToken,
  getAccessToken, 
  getAccessJwtToken,
  getRefreshJwtToken,
  setPublicName, 
  removeVerifyToken,
  removeAccessToken,
  removePublicName
} from '../utils'
import history from '../history'
import CryptoJS from 'crypto-js'

// import { 
//   REQUEST_HOST,
//   REQUEST_ACCESS_KEY,
//   PRIVATE_KEY
// } from '../utils/constants'

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
  USER_REGISTER_METHOD
} from '../utils/constants'

const REQUEST_HOST = "api.curios.com"
const REQUEST_ACCESS_KEY = "ZV877J09P27T795Z"
const PRIVATE_KEY = "8v1niLGilU1cGSaXptk3E02NQSBRNHA/2eUTsv3ckDE="

interface Action {
  action: string;
  payload: {
    email: string,
    password: string,
    verifyCode: string
  };
}

function getRequestDate() {
  return new Date().toISOString();
}

function getRequestHeader(request_scope: string, request_data: string, authorization: string) {
  let request_date = getRequestDate()
  let request_payload_hash = CryptoJS.SHA256(request_data).toString()
  let string_to_sign = request_date + ' ' + request_scope + ' ' + request_payload_hash
  let signature = CryptoJS.HmacSHA256(string_to_sign, PRIVATE_KEY).toString()
  
  return {
    "curios-api-key": REQUEST_ACCESS_KEY,
    "curios-api-version": API_VERSION,
    "curios-date": request_date,
    "curios-signature": signature,
    "Authorization": authorization??"",
    "Content-Type": "application/x-www-form-urlencoded"
  };
}

function* login(action: Action) {
  try {
    const request_url = REQUEST_HOST + "/" + USER_LOGIN_METHOD; 
    const request_scope = request_url + "/" + API_VERSION;

    let requestData = new FormData()
    let requestData_sign = {
      'email': action.payload.email,
      'password': action.payload.password
    }
    requestData.append('email', action.payload.email)
    requestData.append('password', action.payload.password)

    let headers = getRequestHeader(request_scope, JSON.stringify(requestData_sign), "")

    const { data } = yield call(axios.post, `${SECURE_HOST + request_url}`, requestData, {headers: headers})
    console.log("data", data)
    if(data.SUCCESS === false && data.MESSAGE !== '') {
      yield put(user.loginFailure(data))
    } else {
      setVerifyToken(data.DATA.VERIFICATION_TOKEN)
      yield put(user.loginSuccess(data.DATA))
    }
  } catch (e: any) {
    yield put(user.loginFailure({ error: { ...e.response.data } }))
  }
}

function* loginVerify(action: Action) {
  try {
    const request_url = REQUEST_HOST + "/" + USER_VERIFY_METHOD; 
    const request_scope = request_url + "/" + API_VERSION;

    let requestData = new FormData()
    let verifyToken = getVerifyToken() || ""

    var requestData_sign = {
      "email": action.payload.email,
      "verification_code": action.payload.verifyCode,
      "verification_token": verifyToken
    };
    requestData.append('email', action.payload.email)
    requestData.append('verification_code', action.payload.verifyCode)
    requestData.append('verification_token', verifyToken)

    let headers = getRequestHeader(request_scope, JSON.stringify(requestData_sign), "")

    const { data } = yield call(axios.post, `${SECURE_HOST + request_url}`, requestData, {headers: headers})
    
    if(data.SUCCESS === false && data.MESSAGE !== '') {
      yield put(user.loginVerifyFailure(data))
    } else {
      removeVerifyToken()
      setAccessToken(data.DATA.session_token);
      localStorage.setItem('isLoggedin', 'loggedIn')
      yield put(user.loginVerifySuccess(data.DATA))
      history.push('/')
    }
  } catch(e: any) {
    yield put(user.loginFailure({ error: { ...e.response.data } }))
  }
}

function* logout() {
  localStorage.removeItem('isLoggedin')
  removeAccessToken()
  removePublicName();
  history.push('/')
}

function* checkAuth(action: Action) {
  if(getAccessToken()) {
    try {
      const request_url = REQUEST_HOST + "/" + USER_LOGIN_METHOD; 
      const request_scope = request_url + "/" + API_VERSION;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': getRefreshJwtToken()
      }

      const { data } = yield call(axios.post, `${SECURE_HOST + request_url}`, action.payload, { headers })
      if(data.success) {
        localStorage.setItem('isLoggedin', 'loggedIn')
        yield put(user.loginSuccess(data.data));
      } else{
        localStorage.removeItem('isLoggedin')
      }
    } catch (e) {
      console.log(e)
      localStorage.removeItem('isLoggedin')
    }
  } 
}

function* signup(action: Action) {
  try {
    const request_url = REQUEST_HOST + "/" + USER_REGISTER_METHOD; 
    const request_scope = request_url + "/" + API_VERSION;

    const { data } = yield call(axios.post, `${SECURE_HOST + request_url}`, action.payload)
    // @ts-ignore
    if(typeof data.data === 'undefined' && data.error !== "") {
      yield put(user.signupFailure(data.error))
    } else {
      yield put(user.signupSuccess(data.data))
    }
  } catch (e: any) {
    yield put(user.signupFailure({ error: { ...e.response.data } }))
  }
}

// function* updateProf(action: Action) {
//   try {
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': getAccessJwtToken()
//     }

//     const { data } = yield call(axios.post, `${API_URL}/api/update-user`, action.payload, { headers: headers })
//     console.log("update---", data.updatedData );
//     setPublicName(data.updatedData.publicName);
    
//     // @ts-ignore
//     yield put(user.updateprofSuccess( data.updatedData ))
//     history.push('/account')
//     // alert('Edit profile success!')
//   } catch (e: any) {
//     // console.log(e);
//     yield put(user.updateprofFailure({ error: { ...e.response.data } }))
//   }
// }

export function* watchUserOperations() {
  console.log('here')
  yield all([
    // @ts-ignore
    takeEvery(USER.LOGIN_REQUEST, login),
    // @ts-ignore
    takeEvery(USER.LOGIN_VERIFY_REQUEST, loginVerify),
    // @ts-ignore
    takeEvery(USER.LOGIN_REQUEST, checkAuth),
    // @ts-ignore
    takeEvery(USER.SIGNUP_REQUEST, signup),
    //@ts-ignore
    takeEvery(USER.LOG_OUT, logout)
    // takeEvery(USER.UPDATEPROF_REQUEST, updateProf)
  ])
}


export default watchUserOperations  