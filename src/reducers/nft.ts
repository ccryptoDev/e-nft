import { NFT } from "../actions/types";
import { NFTType } from "../utils/types";
const initialState: NFTType = {
  ASSET_TYPES: "",
  DESCRIPTION: "",
  DTS_CREATED: "",
  EDITION_ID: "",
  EDITION_NUM: 0,
  EDITION_OF: 0,
  FILES: [],
  FILES_PREVIEW: [],
  PREVIEW_IMAGE: "",
  PREVIEW_VIDEO: "",
  SUBTITLE: "",
  TITLE: "",
  TOKEN_ID: "",
  seller_email: "",
  price: 500,
  expire_date: 0,
};
export default function nftReducer(state = initialState, action: any) {
  switch (action.type) {
    case NFT.DETAIL_SUCCESS:
      return {
        ...state,
        DESCRIPTION: action.payload.DESCRIPTION,
        EDITION_ID: action.payload.EDITION_ID,
        EDITION_NUM: action.payload.EDITION_NUM,
        EDITION_OF: action.payload.EDITION_OF,
        FILES: action.payload.FILES,
        FILES_PREVIEW: action.payload.FILES_PREVIEW,
        PREVIEW_IMAGE: action.payload.PREVIEW_IMAGE,
        PREVIEW_VIDEO: action.payload.PREVIEW_VIDEO,
        SUBTITLE: action.payload.SUBTITLE,
        TITLE: action.payload.TITLE,
        TOKEN_ID: action.payload.TOKEN_ID,
      };
    case NFT.DETAIL_FAILURE:
      return {
        ...state,
        orderState: false,
      };
    default:
      return state;
  }
}
