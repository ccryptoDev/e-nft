import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CheckoutAnnounceBar from './checkoutAnnounceBar';
import { 
  TimeLimit,
  OrderItem,
  OrderSummary
} from '../../components/Order'
import './order.scss';

const OrderCrypto = () => {

  return (
    <>
      <CheckoutAnnounceBar />

      <div id="page-main">
        <div className="inner">
          <div id="page-order-complete">
            <div id="main">
              <div className="inner">
                <div className="spacer2"></div>
                <div className="row">
                  <div className="col-12 col-lg-7 order-2 order-lg-1">
                    <TimeLimit />
                    <OrderItem />
                    
                    <br />
                    <br />
                    <div className="center"><Link to="/marketplace/" className="btn-base btn-big btn-blue-dark">&larr; Purchase More Before Checkout</Link></div>
                    <br />
                    <div className="spacer2"></div>

                    <header>
                      <h3><strong>Payment Details</strong></h3>
                    </header>
                    <hr />
                    {/* <button className="crypto-submit"> */}
                      <a className="crypto-submit btn-base btn-big" href="https://commerce.coinbase.com/checkout/7c5b9ad3-6015-447d-b65b-11d1ac2851e6">Complete Crypto Payment Now</a>
                    {/* </button> */}
                    <br />
                    <br />
                    Payment URL: <a href="https://commerce.coinbase.com/checkout/7c5b9ad3-6015-447d-b65b-11d1ac2851e6" style={{overflowWrap: 'break-word'}}>https://commerce.coinbase.com/checkout/7c5b9ad3-6015-447d-b65b-11d1ac2851e6</a>
                  </div>

                  <div className="col-12 col-lg-1 order-3 order-lg-2">
                  </div>

                  <div className="col-12 col-lg-4 order-1 order-lg-3">
                    <OrderSummary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {OrderCrypto}