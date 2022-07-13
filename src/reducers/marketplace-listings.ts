import { LISTINGS, NftList } from "../actions/types";
import { NFTType } from "../utils/types";
const initialState: NftList = {
  nftList: [],
  totalPages: 1,
  currentPage: 0,
};

export default function sortReducer(state = initialState, action: any) {
  switch (action.type) {
    case LISTINGS.TOKENLIST_SUCCESS:
      return {
        ...state,
        nftList: action.payload,
      };
    case LISTINGS.TOKENLIST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
