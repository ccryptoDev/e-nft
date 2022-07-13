import { NFTType } from "../utils/types";

export interface RootState {
  userReducer: UserState;
  cartReducer: CartList;
  listings: NftList;
  nftDetail: NFTType;
}

export const USER = {
  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "SIGNUP_FAILURE",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_VERIFY_REQUEST: "LOGIN_VERIFY_REQUEST",
  LOGIN_VERIFY_SUCCESS: "LOGIN_VERIFY_SUCCESS",
  LOGIN_VERIFY_FAILURE: "LOGIN_VERIFY_FAILAURE",
  LOG_OUT: "LOG_OUT",
  UPDATEPROF_REQUEST: "UPDATEPROF_REQUEST",
  UPDATEPROF_SUCCESS: "UPDATEPROF_SUCCESS",
  UPDATEPROF_FAILURE: "UPDATEPROF_FAILURE",
  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAILURE: "FORGOT_PASSWORD_FAILURE",
};
export const PAYMENT = {
  CRYPTO_REQUEST: "CRYPTO_REQUEST",
  CRYPTO_SUCCESS: "CRYPTO_SUCCESS",
  CRYPTO_FAILURE: "CRYPTO_FAILURE",
  VISA_REQUEST: "VISA_REQUEST",
  VISA_SUCCESS: "VISA_SUCCESS",
  VISA_FAILURE: "VISA_FAILURE",
};

export const CART = {
  ADD_TO_CART_REQUEST: "ADD_TO_CART_REQUEST",
  ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
  REMOVE_CART_REQUEST: "REMOVE_CART_REQUEST",
  REMOVE_CART_SUCCESS: "REMOVE_CART_SUCCESS",
  GET_CART: "GET_CART",
};

export const LISTINGS = {
  TOKENLIST_REQUEST: "TOKENLIST_REQUEST",
  TOKENLIST_SUCCESS: "TOKENLIST_SUCCESS",
  TOKENLIST_FAILURE: "TOKENLIST_FAILURE",
};
export const NFT = {
  DETAIL_REQUEST: "DETAIL_REQUEST",
  DETAIL_SUCCESS: "DETAIL_SUCCESS",
  DETAIL_FAILURE: "DETAIL_FAILURE",
};

export interface UserData {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  publicName: string;
  password?: string;
}

export interface UserState {
  data: {};
  verifyToken: string;
  userId?: string;
  loading?: boolean;
  isLogged: boolean;
  isSignedUp: boolean;
  error: string;
  verifyErr: false;
  verifyMsg: string;
}

export interface CartItem {
  type: string; // what marketplace - buddha or karen or tory
  name: string;
  description?: string;
  price: number;
  payment?: string;
  nftAddr?: string;
  link?: string;
  img?: string;
}

export interface CartState {
  id: number;
  cartItem: CartItem;
}

export interface OrderData {
  userId: number;
  nftId: string;
  price: number;
  orderStatus: string;
}

export interface OrderList {
  orderList: OrderData[];
}

export interface CartList {
  cartList: Array<CartState>;
}

export interface NftList {
  nftList: NFTType[];
  totalPages: number;
  currentPage: number;
}
