import React, { useState, useEffect } from 'react'
import { CartState, RootState } from '../../actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../utils'
import { Link } from 'react-router-dom';

let cartInStorage: Array<CartState> = []

const OrderItem = () => {
  const dispatch = useDispatch()
  const [cartData, setCartData] = useState(cartInStorage)
  const cartInStore: Array<CartState> = useSelector<RootState, Array<CartState>>((state) => state.cartReducer.cartList)

  useEffect(() => {
    cartInStorage = JSON.parse(getCart() || "{}")
    setCartData(cartInStorage)
  }, [cartInStore])

  return (
    <>
      <header>
        <h3><strong>Items Purchasing</strong></h3>
      </header>
      <hr />

      {cartData.map((item: CartState, index: number) => (
        ( index < 2 &&
          <div className="row" id="order-item" key={item.id}>
            <div className="col-2 col-12-medium">
              <img src={item.cartItem.img} className="image fit order-item-preview" alt="" style={{maxWidth: 75}}/>
            </div>
            <div className="col-10 col-12-medium" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{width: `100%`}}>
                <Link to="" target="_blank">
                  <h4 style={{margin:0}}>{item.cartItem.name}</h4>
                </Link>
                <p style={{margin: 0}}>{item.cartItem.description}</p>
              </div>
            </div>
          </div>
        )
      ))}
      {cartData.length > 2 && "(+ Plus 1 additional NFT collections/items in your order.)"}
    </>
  )
}

export default OrderItem