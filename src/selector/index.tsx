import { RootState } from "../actions/types";
export const selectNftDetail = (state: RootState) => state.nftDetail;


export * from "./listings"
export * from "./user"
