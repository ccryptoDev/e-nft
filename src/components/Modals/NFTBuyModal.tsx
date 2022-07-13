import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { payment } from "../../actions/payments";
interface Props {
  nftId: string,
  price: number;
}
const NFTBuyModal = (props: Props) => {
  const { nftId, price } = props;
  const dispatch = useDispatch();
  const handleCryptoPayment = () => {
    dispatch (payment.cryptoRequest(nftId, price))
  }
  const handleVisaPayment = () => {
    dispatch (payment.visaRequest(nftId, price))
  }
  return (
    <div className="modal-body">
      <p className="input-wrap">
        You are committing to buying this item now at <strong>{price}</strong>{" "}
        (plus any applicable taxes and fees).{" "}
      </p>
      <br />
      <br />
      <div className="center-btns">
        <button
          data-action="buy-token"
          data-payment="crypto"
          type="button"
          className="btn-blue-dark"
          onClick={handleCryptoPayment}
        >
          Buy With Crypto
        </button>
        <br />

        <button
          data-action="buy-token"
          data-payment="cc"
          type="button"
          className="btn-blue-dark"
          onClick={handleVisaPayment}
        >
          Buy With Visa/Mastercard
        </button>
        <br />
      </div>
    </div>
  );
};

export default NFTBuyModal;
