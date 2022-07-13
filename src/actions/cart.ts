import { createAction } from '../utils'
import { CART } from './types'
import { CartItem, CartState, CartList } from '../actions/types'

export const cartAction = {
  addCartRequest: (cartData: CartItem, qty: number) => createAction(CART.ADD_TO_CART_REQUEST, {cartData, qty}),
  addCartSuccess: (cartList: Array<CartState>) => createAction(CART.ADD_TO_CART_SUCCESS, {cartList}),
  removeCartRequest: (id: number) => createAction(CART.REMOVE_CART_REQUEST, {id}),
  removeCartSuccess: (cartList: Array<CartState>) => createAction(CART.REMOVE_CART_SUCCESS, {cartList})
}