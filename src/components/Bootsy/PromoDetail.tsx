import React, { useState, useEffect, useRef, createRef } from 'react'
import { BuyDropsModal } from '../Modals/BuyDropsModal'
import BaseModal from '../Modals/BaseModal'
import noteIcon from "../../assets/images/icon-single-note.png"
import artIcon from '../../assets/images/icon-single-art-white.png'
import heartIcon from '../../assets/images/icon-single-heart.png'
import oeIcon from "../../assets/images/icon-single-oe.png"
import { CartItem } from '../../actions/types'

const PromoDetail = () => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(5)

  const modalData: CartItem = {
    type: "bootsy",
    name: "Music4ClimateJustice",
    description: "Boosty Collins, Stevie Van Zandt & Chew Fu",
    price: 5,
    link: '/nft/bootsy',
    img: 'https://cdn.curios.com/3/DA21F7EE-C9DF-222A-98D62028CBCF7624.png'
  }

  const closeModal = () => {
    setShow(false);
  };

  const handleModal = () => {
    modalData.price = price
    setShow(true);
  }

  return (
    <div className="the-details">
      <ul className="icons-big-list">
        <li>
          <img src={noteIcon} alt="" />
        </li>
        <li>
          <img src={artIcon} alt="" />
        </li>
        <li>
          <img src={heartIcon} alt="" />
        </li>
        <li>
          <img src={oeIcon} alt="" />
        </li>
      </ul>
      <h6 className="the-subtitle">Charitable Drop Open Edition</h6>
      <h1>Music4ClimateJustice</h1>
      <h3>
        The idea for the song came from a conversation in the studio
        about Mother Earth. They sent the Boot-signal up to Stevie Van
        Zandt &amp; Chew Fu who, through their caring spirits for
        indigenous people &amp; our entire planet, answered the call;
        and hence, the Music4ClimateJustice Theme Song was born!
      </h3>
      <h6 className="the-subtitle the-package">What you get</h6>
      <ul className="list">
        <li>
          Music4ClimateJustice Theme Song by Bootsy Collins, Stevie Van Zandt &amp; Chew Fu
        </li>
        <li>
          Exclusive Music4ClimateJustice Theme Song cover artwork by Gilbert Driver
        </li>
      </ul>
      <h6 className="the-subtitle the-availability">
        Available until November 18, 2021 at 5:00PM EST
      </h6>
      <div className="countdown-wrap">
        <i className="far fa-clock"></i>
        <div id="countdown">10:20:41:46</div>
      </div>
      <div className="button-wrap">
        {/* <a className="btn-base btn-big btn-bluetogreen-dark model-button" href="/account/">
          Register/Login
        </a> */}
        <a className="btn-base btn-big btn-bluetogreen-dark model-button" onClick={handleModal}>
          BUY NOW {`$${price}`}
        </a>
      </div>
      <BaseModal show={show} closeModal={closeModal}>
        <BuyDropsModal closeModal={closeModal} modalData={modalData} />
      </BaseModal>
    </div>
  )
}

export default PromoDetail