import React, { useState, useEffect, useRef, createRef } from 'react'

import { BuyDropsModal } from '../Modals/BuyDropsModal'
import BaseModal from '../Modals/BaseModal'

import singleOE from '../../assets/images/icon-single-oe.png'
import singleLE from '../../assets/images/icon-single-le.png'
import noteIcon from '../../assets/images/icon-single-note-white.png'
import artIcon from '../../assets/images/icon-single-art-white.png'
import movieIcon from '../../assets/images/icon-single-movie.png'
import karenPhone from '../../assets/images/karen-phone.png'
import { CartItem } from '../../actions/types'

let modalData: CartItem = {
  type: "karenOpen",
  name: "Karen - The Movie Soundtrack",
  description: "Produced by Adrian Miller and Om'Mas Keith and featuring music from CeeLo Green, Knox Brown ft. Anderson .Paak, Gumbo, and more.",
  price: 3,
  link: '/nft/karen/#karen-open',
  img: ''
}

const NFTHeader = () => {
  const [show, setShow] = useState(false);
  const [nft, setNft] = useState()
  const [price, setPrice] = useState(3)
  const [karen, setKaren] = useState('')
  const [karenData, setKarenData] = useState(modalData)

  const closeModal = () => {
    setShow(false);
  };

  const limitedElem = createRef<HTMLDivElement>()
  const openElem = createRef<HTMLDivElement>()

  useEffect(() => {
    const hash = window.location.hash;
    let posOfElem = 0
    if(hash === '#karen-limited') {
      posOfElem = limitedElem.current?.getBoundingClientRect().top as number
      window.scrollTo(0, posOfElem)
    } else if(hash === '#karen-open') {
      posOfElem = openElem.current?.getBoundingClientRect().top as number
      window.scrollTo(0, posOfElem)
    }
  }, [])

  const handleModal = (type: string) => {
    if(type === 'open') {
      modalData.type = "karenOpen"
      modalData.price = 3
      modalData.name = "Karen - The Movie Soundtrack Open Edition"
      modalData.img = 'https://cdn.curios.com/3/689E2547-0F68-31C0-0D049387A5B0F2F4.jpg'
      modalData.link = '/nft/karen/#karen-open'
    } else {
      modalData.type = 'karenLimited'
      modalData.price = 20
      modalData.name = "Karen - The Movie Soundtrack"
      modalData.img = 'https://cdn.curios.com/3/689904A6-B7D0-1C54-B7D7EF2B11F61DD2.jpg'
      modalData.link = '/nft/karen/#karen-limited'
    }
    setKarenData(modalData)

    setShow(true);
  }
  
  return (
    <div className="nft-header">
      <div className="the-text">
        <h6 className="the-subtitle">Introducing</h6>
        <h2 className="the-title">
          The Soundtrack to the new movie Karen, produced by Adrian Miller and Om'Mas Keith. Available in two different editions.
        </h2>
        <div id="karen-open" className="open-edition" ref={openElem}>
          <div className="token">
            <img src={singleOE} alt="" />
          </div>
          <div className="button-wrap">
            <span className="subheading">Available for $3 Purchase until October 21st, 2021</span>
            <h3>Open Edition</h3>
            <h4>Includes 11 tracks produced by Adrian Miller and Om'Mas Keith and featuring music from CeeLo Green,
              Knox Brown ft. Anderson .Paak, Gumbo, and more.
              <br />See more details below.
            </h4>
            <a className="btn-base btn-big btn-outline-white" href="/nft/karen/#preview">Preview the Album</a>
            <div className="btn-base btn-big btn-outline-white model-button" onClick={() => handleModal('open')}>Buy Open Edition</div>
            <br />
          </div>
        </div>

        <div id="karen-limited" className="limited-edition" ref={limitedElem}>
          <div className="token">
            <img src={singleLE} alt="" />
          </div>
          <div className="button-wrap">
            <span className="subheading">Available for $20 Limited to 5,000 until sold out</span>
            <h3>Limited Edition</h3>
            <h4>Includes Open Edition E-NFT Soundtrack plus:</h4>
            <ul>
              <li>
                <div><img src={noteIcon} alt="" /></div>11 Track E-NFT Soundtrack
              </li>
              <li>
                <div><img src={artIcon} alt="" /></div>1 Digital Movie Poster
              </li>
              <li>
                <div><img src={artIcon} alt="" /></div>9 Pieces of Custom Artwork
              </li>
              <li>
                <div><img src={movieIcon} alt="" /></div>Behind the Scenes Commentary from Director Coke Daniels
              </li>
              <li>
                <div><img src={movieIcon} alt="" /></div>3 Music Videos
              </li>
            </ul>
            <a className="btn-base btn-big btn-outline-white" href="/nft/karen/#preview">Preview Collection</a>
            <div className="btn-base btn-big btn-outline-white model-button" onClick={() => handleModal('limited')}>Buy Limited Edition</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="promo-mockup">
        <div className="phone-mockup">
          <img src={karenPhone} alt="" />
        </div>
        <div className="the-details">
          <h1>Stream All New Exclusive Music Only Hear</h1>
          <h3>Produced by Adrian Miller and Om'Mas Keith and featuring music from CeeLo Green, Knox Brown ft. Anderson .Paak, Gumbo, and more.</h3>
        </div>
      </div>
      <BaseModal show={show} closeModal={closeModal}>
        <BuyDropsModal closeModal={closeModal} modalData={karenData} />
      </BaseModal>
    </div>
  )
}

export default NFTHeader