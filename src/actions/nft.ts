import { createAction } from "../utils";
import { NFTType } from "../utils/types";
import { NFT } from "./types";
export const nft = {
  getTokenRequest: (tokenId: string) =>
    createAction(NFT.DETAIL_REQUEST, { tokenId }),
  getTokenSuccess: (data: NFTType) => createAction(NFT.DETAIL_SUCCESS, data),
  getTokenFailure: (error: Object) =>
    createAction(NFT.DETAIL_FAILURE, { ...error }),
};
