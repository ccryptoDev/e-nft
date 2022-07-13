import { PAYMENT, OrderData, OrderList } from "../actions/types";
const initialState = {
  userId: "",
  nftId: "",
  price: "",
  orderStatus: "",
  orderList: [],
  cartList: []
};

export default function paymentReducer(state = initialState, action: any) {
  switch (action.type) {
    case PAYMENT.CRYPTO_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        nftId: action.payload.nftId,
        price: action.payload.price,
        orderStatus: action.payload.orderStatus,
        orderList: action.payload,
      };
    case PAYMENT.CRYPTO_FAILURE:
      return {
        ...state,
        orderState: false,
      };
    case PAYMENT.VISA_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        nftId: action.payload.nftId,
        price: action.payload.price,
        orderStatus: action.payload.orderStatus,
        orderList: action.payload,
      };
    case PAYMENT.VISA_FAILURE:
      return {
        ...state,
        orderState: false,
      };
    default:
      return state;
  }
}
