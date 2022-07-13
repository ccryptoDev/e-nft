import { combineReducers } from "redux";
import userReducer from "./userReducers";
import paymentReducer from "./payments";
import sortReducer from "./marketplace-listings";
import nftReducer from "./nft";
import cartReducer from "./cartReducer"

export default combineReducers({
  userReducer,
  cartReducer,
  paymentReducer,
  listings: sortReducer,
  nftDetail: nftReducer
});
