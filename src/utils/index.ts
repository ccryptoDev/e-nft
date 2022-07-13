const { REACT_APP_SERVICE_URL } = process.env;

export const ETHSCAN_API = `${REACT_APP_SERVICE_URL}/ethusd`;
export const METADATA_API = REACT_APP_SERVICE_URL || "";

export * from "./toShort";
export * from "./formatPriceEth";

export function createAction(type: string, data = {}) {
  return { type, payload: data };
}

export function getAccessJwtToken() {
  return localStorage.getItem('accessToken')
}

export function getAccessToken() {
  return localStorage.getItem('token')
}

export function getRefreshJwtToken() {
  return localStorage.getItem('refreshToken')
}

export function getVerifyToken() {
  return localStorage.getItem('verifyToken')
}

export function setAccessJwtToken(token: string) {
  localStorage.setItem('accessToken', token)
}

export function setAccessToken(token: string) {
  localStorage.setItem('token', token)
}

export function setVerifyToken(token: string) {
  localStorage.setItem('verifyToken', token)
}

export function removeAccessJwtToken() {
  localStorage.removeItem('accessToken')
}

export function removeAccessToken() {
  localStorage.removeItem('token')
}

export function removeVerifyToken() {
  localStorage.removeItem('verifyToken')
}

export function setRefreshJwtToken(token: string) {
  localStorage.setItem('refreshToken', token)
}

export function removeRefreshJwtToken() {
  localStorage.removeItem('token')
} 
export function getJwtToken() {
  return localStorage.getItem("token");
}

export function setJwtToken(token: string) {
  localStorage.setItem("token", token);
}

export function removeJwtToken() {
  localStorage.removeItem("token");
}

export function setCurrentUserId(userId: string) {
  localStorage.setItem("currentUserId", userId);
}

export function getCurrentUserId() {
  return localStorage.getItem("currentUserId");
}

export function setMethod(method: string) {
  localStorage.setItem("method", method);
}

export function getCart() {
  return localStorage.getItem("cart");
}

export function setCart(cartData: any) {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

export function setPublicName(PName: string) {
  return localStorage.setItem("publicName", PName);
}

export function removePublicName() {
  return localStorage.removeItem("publicName");
}

export function getPublicName() {
  return localStorage.getItem("publicName");
}