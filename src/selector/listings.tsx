import { RootState } from "../actions/types";
export const selectLisings = (state: RootState) => state.listings.nftList;
