import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CreditCardForm } from '../../components/Payment';
import { getCart } from '../../utils'
import { CartState, RootState } from '../../actions/types'
import { cartAction } from '../../actions/cart'
import history from '../../history'

let cartInStorage: Array<CartState> = []

const OrderSummary = () => {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(false);
  const expandClick = () => setExpand(!expand);
  const [cartData, setCartData] = useState(cartInStorage)

  const cartInStore: Array<CartState> = useSelector<RootState, Array<CartState>>((state) => state.cartReducer.cartList)

  useEffect(() => {
    cartInStorage = JSON.parse(getCart() || "{}")
    setCartData(cartInStorage)
  }, [])

  const removeItem = (id: number) => {
    dispatch(cartAction.removeCartRequest(id))
    const updatedCartList = cartData.filter(function(item) {
      return item.id !== id
    })
    setCartData(updatedCartList)
    if(updatedCartList.length === 0 || updatedCartList === undefined) {
      history.push('/')
    }
  }

  return (
    <>
      <header>
        <h3><strong>Order #V52Q8L</strong></h3>
      </header>

      <hr />

      <div className="row">
        <div className="col-6">Purchase Amount:</div>
        <div className="col-6" style={{textAlign: 'right'}}><strong>$3.00</strong></div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6">Taxes and Fees (<Link to="#" onClick={expandClick}>expand</Link>):</div>
            <div className="col-6" style={{textAlign: 'right'}}><strong>$0.70</strong></div>
          </div>
          <hr />
          <div id="show-fees" style={{display: expand ? 'block' : 'none'}}>
            <div className="row">
              <div className="col-6">Platform Fee:</div>
              <div className="col-6" style={{textAlign:'right'}}><strong>$0.50</strong></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                  Crypto Payment 
                Fee: 
              </div>
              <div className="col-6" style={{textAlign:'right'}}><strong>$0.20</strong></div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6"><h4>TOTAL DUE:</h4></div>
        <div className="col-6" style={{textAlign:'right'}}><h4>$3.70</h4></div>
        <p>&nbsp;</p>
      </div>

      <br />

      <header>
        <h3><strong>Order Items ({cartData.length})</strong></h3>
      </header>

      <hr />
      
      {cartData.map((item: CartState, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-6">{item.cartItem.name}</div>
            <div className="col-6" style={{textAlign: 'right'}}>
              <strong>${item.cartItem.price.toFixed(2)}</strong>
              <div onClick={() => removeItem(item.id)}>&times;</div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default OrderSummary