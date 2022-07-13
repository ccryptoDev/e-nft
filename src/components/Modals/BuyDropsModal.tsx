import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { payment } from '../../utils/types'
import { cartAction } from '../../actions/cart'
import { CartItem } from '../../actions/types'
import history from '../../history'
import { useHistory } from 'react-router-dom'

interface Props {
  closeModal: () => void;
  modalData: CartItem
}

export const BuyDropsModal = ({
  closeModal,
  modalData
}: Props) => {
  const dispatch = useDispatch()
  const linkHistory = useHistory()
  const quantity: number = 100
  const [qty, setQty] = useState('1')
  
  const createElements = (num: number) => {
    let elements = []
    for(let i=1; i<num+1; i++) {
      elements.push(<option value={i} key={i}>{i}</option>)
    }
    return elements
  }

  const handleCheckout = (method: string) => {
    let cartData: CartItem = {
      type: modalData.type,
      name: modalData.name,
      price: modalData.price,
      description: modalData.description,
      link: modalData.link,
      img: modalData.img,
      payment: method
    }

    dispatch(cartAction.addCartRequest(cartData, Number(qty)))

    let linkCheckout = '/order/complete/crypto'

    if (method === payment.cc) {
      linkCheckout = "/order/complete/cc"
    } else if(method === payment.wireTransfer) {
      linkCheckout = "/order/complete/wire"
    }

    history.push(linkCheckout)
  }

  return (
    <div className="modal-body">
      <div className="input-wrap">
        You are committing to buying this item now at <strong>$ {modalData.price.toFixed(2)}</strong> each (plus any applicable taxes and fees).
        <br />
        <br />
        Select quantity:<br />
        <div className="select-wrapper" style={{width: "100%"}}>
        <select name="item_qty_open" id="item_qty_open" style={{width: "100%"}} onChange={(e) => setQty(e.target.value)}>
          {
            createElements(quantity)
          }
        </select>
        </div>
        <br />
        <br />
        <div className="buy-actions">
          <button type="button" className="btn-blue-dark" onClick={(e) => handleCheckout(payment.crypto)}>
              Buy With Crypto
          </button>
          <br />
          <button type="button" className="btn-blue-dark" onClick={(e) => handleCheckout(payment.cc)}>
              Buy With Visa/Mastercard
          </button>
          <br />
          <button type="button" className="btn-blue-dark" onClick={(e) => handleCheckout(payment.wireTransfer)}>
              Buy With Wire Transfer
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}