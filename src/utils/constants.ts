require('dotenv').config();

export const REQUEST_HOST = process.env.REACT_APP_REQUEST_HOST;
export const REQUEST_ACCESS_KEY = process.env.REACT_APP_REQUEST_ACCESS_KEY
export const PRIVATE_KEY:string = (process.env.REACT_APP_PRIVATE_KEY as string)

export const API_VERSION = "v1";
export const SECURE_HOST = "https://"
export const USER_LOGIN_METHOD = "userLogin";
export const USER_VERIFY_METHOD = "userVerify";
export const TOKEN_LIST_METHOD = "tokenList";
export const TOKEN_GET_METHOD = "tokenGet";
export const FILE_LOAD_BASE64_METHOD = "fileLoadBase64";
export const FILE_URL_METHOD = "fileGetURL";
export const USER_RESET_PASSWORD_METHOD = "userResetPassword";
export const USER_REGISTER_METHOD = "userRegister";