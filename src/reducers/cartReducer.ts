import { CART } from '../actions/types'

const initialState = {}

export default function cartReducer(state = initialState,  action: any) {
  switch (action.type) {
    case CART.ADD_TO_CART_SUCCESS:
      return {
        cartList: action.payload
      }
    case CART.REMOVE_CART_SUCCESS:
      return {
        cartList: action.payload
      }
    default:
      return action.type
  }
}