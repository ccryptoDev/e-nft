import { RootState } from "../actions/types";

export const selectLoginStatus = (state: RootState) => state.userReducer.isLogged;