import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardForm } from '../../components/Payment';
import CheckoutAnnounceBar from './checkoutAnnounceBar';
import { 
  TimeLimit,
  OrderItem,
  OrderSummary
} from '../../components/Order'
import './order.scss';

const OrderCC = () => {
  
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
                    <br />
                    <div className="center"><Link to="/marketplace/" className="btn-base btn-big btn-blue-dark">&larr; Purchase More Before Checkout</Link></div>
                    <br />
                    <div className="spacer2"></div>

                    <header>
                      <h3><strong>Payment Details</strong></h3>
                    </header>

                    <hr />
                   
                    <CreditCardForm />

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

export {OrderCC}