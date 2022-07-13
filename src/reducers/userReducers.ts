import { USER, UserState } from '../actions/types';

const initialState: UserState = {
  data: {},
  verifyToken: "",
  userId: undefined,
  isLogged: false,
  isSignedUp: false,
  error: "",
  loading: false,
  verifyErr: false,
  verifyMsg: ""
}

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case USER.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: false,
        error: ""
      }
    case USER.LOGIN_SUCCESS:
      return {
        ...state,
        verifyToken: action.payload.VERIFICATION_TOKEN
      }
    case USER.LOGIN_FAILURE:
      return {
        ...state,
        userId: null,
        isLogged: false,
        error: action.payload.message
      }
    case USER.LOGIN_VERIFY_REQUEST:
      return {
        ...state,
        data: action.payload
      }
    case USER.LOGIN_VERIFY_SUCCESS:
      return {
        ...state,
        verifyErr: false,
        verifyMsg: "",
        isLogged: true,
        data: action.payload
      }
    case USER.LOGIN_VERIFY_FAILURE:
      return {
        ...state,
        verifyErr: true,
        verifyMsg: action.payload.MESSAGE
      }
    case USER.SIGNUP_REQUEST:
      return {
        ...state,
        isSignedUp: false,
        error: ""
      }
    case USER.LOG_OUT:
      return {
        ...state,
        verifyErr: false,
        verifyMsg: "",
        isLogged: false,
        data: null
      }
    case USER.SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: true,
        error: ""
      }
    case USER.SIGNUP_FAILURE:
      return {
        ...state,
        isSignedUp: false,
        error: action.payload.message
      }
    case USER.UPDATEPROF_SUCCESS:
      return {
        ...state,
        isUpdatedProf: true,
        updateprofError: null
      }
    case USER.UPDATEPROF_FAILURE:
      return {
        ...state,
        isUpdatedProf: false,
        updateprofError: action.payload.error.message
      }
    default:
      return state
  }
}