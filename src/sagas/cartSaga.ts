import { all, call, put, takeEvery } from "redux-saga/effects";
import { CART } from '../actions/types'
import { setCart, getCart } from '../utils'
import history from "../history";
import { CartItem, CartState, CartList } from '../actions/types'
import { cartAction } from '../actions/cart'

interface Action {
  action: string;
  payload: {
    cartData: CartItem,
    qty: number
  }
}

function* addCart(action: Action) {
  const {cartData, qty} = action.payload
  let cartList = []
  let cartInStorage = JSON.parse(getCart() || "{}")
  let idLast = 0
  if(cartInStorage.length !== undefined && cartInStorage.length > 0) {
    idLast = Number(cartInStorage[cartInStorage.length-1].id)
    cartList = cartInStorage
  }
  for(let i=1; i<qty+1; i++) {
    let cartState = {
      id: idLast + i,
      cartItem: cartData
    }
    cartList.push(cartState)
  }
  setCart(cartList)

  yield put(cartAction.addCartSuccess(cartList))
}

function* removeCart(action: any) {
  let cartInStorage = JSON.parse(getCart() || "{}")
  let newCartList = cartInStorage.filter( (item: CartState, index: number, arr: CartState) => {
    return item.id !== action.payload.id
  })
  
  setCart(newCartList)
  yield put(cartAction.removeCartSuccess(newCartList))
}

function* getCartList() {

}

export function* watchCart() {
  yield all([
    // @ts-ignore
    takeEvery(CART.ADD_TO_CART_REQUEST, addCart),
    // @ts-ignore
    takeEvery(CART.REMOVE_CART_REQUEST, removeCart)
  ])
}
export default watchCart;