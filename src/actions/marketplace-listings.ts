import { createAction } from "../utils";
import { LISTINGS, NftList } from "./types";
export const listings = {
  tokenListRequest: () =>
    createAction(LISTINGS.TOKENLIST_REQUEST),
  tokenListSuccess: (data: NftList) =>
    createAction(LISTINGS.TOKENLIST_SUCCESS, data),
  tokenListFailure: (error: Object) =>
    createAction(LISTINGS.TOKENLIST_FAILURE, { ...error }),
};
