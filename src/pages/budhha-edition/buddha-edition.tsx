import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseModal from '../../components/Modals/BaseModal';
import { BuyDropsModal } from '../../components/Modals';
import { CartItem } from '../../actions/types'

import sbHeader from '../../assets/images/sb-header.png';
import SBPreviewGIF from '../../assets/images/SBPreviewGIF.gif';
import singleArt from '../../assets/images/icon-single-art-white.png';
import singleFlame from '../../assets/images/icon-single-flame.png';
import singleOE from '../../assets/images/icon-single-oe.png';
import spray from '../../assets/images/sb-spray.jpg';
import logo from '../../assets/images/logo-enft.png';
import sbCreator from '../../assets/images/sb-creator.png';
import './buddha-edition.scss';

const BuddhaEdition = () => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(3)
  const closeModal = () => {
    setShow(false);
  };

  const modalData: CartItem = {
    type: "buddha",
    name: "GLOBAL UNITY",
    description: "Super Buddha",
    img: "https://cdn.curios.com/3/8EED478D-F7B6-0FEB-C49CFA25E34C1E32.png",
    link: "/nft/superbuddha",
    price: 3
  } 

  const handleModal = () => {
    modalData.price = price
    setShow(true);
  }

  const parallax = React.useRef<any>(null);

  React.useEffect(() => {
    function scrollHandler() {
      const element = parallax.current ;
      if (element) {
        let offset = window.pageYOffset;
        element.style.backgroundPositionY = - offset * 0.5 + "px";
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
    <div className="BuddhaEdition" />
    <div className="space-wrap block-superbuddha" ref={parallax}>
      <div className="block-full block-single-nft-details">
        <div className="nft-block">
          <div id="main-container">
            <img className="title-image" src={sbHeader} alt="" />
            <div className="nft-header">
              <div className="promo-mockup">
                <div className="phone-mockup">
                  <img src={SBPreviewGIF} alt="" />
                  <div className="art-title">
                    <div>
                      <span className="art-name">Global Unity</span>
                      <span className="art-desc">Super Buddha - Full Artwork & Score (00:00:46)</span>
                    </div>
                    <div>
                      <ul className="icons-small-list">
                        <li><img src={singleArt} alt="" /><span>Artwork NFT</span></li>
                        <li><img src={singleFlame} alt="" /><span>Hot Drop</span></li>
                        <li><img src={singleOE} alt="" /><span>Open Edition</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="the-details">
                  <ul className="icons-big-list">
                    <li><img src={singleArt} alt="" /><span>Artwork NFT</span></li>
                    <li><img src={singleFlame} alt="" /><span>Hot Drop</span></li>
                    <li><img src={singleOE} alt="" /><span>Open Edition</span></li>
                  </ul>
                  <h6 className="the-subtitle">Hot Drop Open Edition</h6>
                  <h1>Global Unity E-NFT</h1>
                  <h3>The Super Buddha E-NFT is a stunning visual wonderment that captures the spirit of humanity’s true purpose... Global Unity. A unique 46 second animated 3D artwork with original score.</h3>
                  <h6 className="the-subtitle the-availability" >Available until 11/7/21 at 5PM EST</h6>
                  <a className="btn-base btn-big model-button" onClick={handleModal} data-target="#buynow-modal-limited">Buy Now $3</a>
                </div>
              </div>
              <hr />
              <div className="nft-type-video nft-type-owlgallery">
                <div className="the-carousel-text">
                  <h2 className="the-title">Creating Art With A Mission</h2>
                  <h3>"A world that is divided, is a world that is in peril. My E-NFT 'Global Unity' art piece represents every color, creed, and culture that still believes that love conquers all."</h3>
                  <p>The ”Global Unity” E-NFT was inspired by Super Buddha’s visit to the Vatican, where he was received and greeted by His Holiness Pope Francis for having worked with Scholas Occurrentes, a foundation created by His Holiness. The Super Buddha Global Unity E-NFT will also feature an original music score and vocals, both by producer, arranger, and music composer, Erik 'E Smooth' Hicks of Emmersive Entertainment whose production credits include writing and producing for legendary Rock and Roll Hall of Famers such as the Queen of Soul Aretha Franklin and Curtis Mayfield."</p>
                </div>
                <div className="owl-image-carousel">
                  <img src={ spray } alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-full block-details-single">
        <div className="nft-block">
            <div className="main-info rounded-white">
              <div className="auction-time">
                  <div className="remaining">
                    <div>
                      <div className="time-remaining">
                        <span className="big-detail">
                        </span>
                      </div>
                    </div>
                  </div>
              </div>
              <span className="detail-label">Description</span>
              <span className="the-description">
                <h3>The Super Buddha E-NFT is a stunning visual wonderment that captures the spirit of humanity’s true purpose... Global Unity. A unique 46 second animated 3D artwork with original score.</h3>
                <p>Super Buddha was born and raised in Venezuela and his purpose and passion for all things creative led him to China where he studied fine art and design. His art has been featured in Art Basel and in galleries around the globe. Super Buddha’s artwork has been seen and sold around the world by avid art collectors to music superstars such as DJ Tiesto, Swae Lee, and many others.</p>
                <p>Super Buddha was quoted as saying, "A world that is divided, is a world that is in peril. My E-NFT 'Global Unity' art piece represents every color, creed, and culture that still believes that love conquers all. I’ve traveled the globe numerous times and I recognize today more than ever that we cannot leave our children’s future to the rebuilding of our fractured earth, when this can collectively be healed right now by caring people through the eradication of hate, world hunger, violence, homelessness, and climate change, etc. My ultimate mission with the creation of this E-NFT reflects and speak volumes to what we all aspire to have on Earth – Global Unity."</p>
              </span>
            </div>
            <div className="details-history">
              <div className="edition-details rounded-white">
                <div className="creator-pic">
                  <div className="edition">
                    <img className="logo" src={logo} alt="" />
                    <h3>Open Edition</h3>
                    <h3>Art Edition</h3>
                  </div>
                  <div className="creator-image">
                    <img src={sbCreator} alt="" />
                  </div>
                </div>
                <div className="icons-and-name">
                  <div className="icon-wrap">
                    <div className="icons">
                      <div><img src={singleArt} alt="" /><span>Artwork NFT</span></div>
                      <div><img src={singleFlame} alt="" /><span>Hot Drop</span></div>
                      <div><img src={singleOE} alt="" /><span>Open Edition</span></div>
                    </div>
                  </div>
                  <div className="name">
                    <div className="big-detail-wrap">
                      <span className="detail-label">CREATOR</span>
                      <span className="big-detail">Super Buddha</span>
                      <span className="big-detail">with Erik "E Smooth" Hicks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="need-help">
                <span className="big-detail">Have a Question?</span>
                <h4>We can help.</h4>
                <Link className="btn-base btn-medium btn-green-dark" to="/login/" title="Create Your Account">Visit our Help Center</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
    <BaseModal show={show} closeModal={closeModal}>
      <BuyDropsModal closeModal={closeModal} modalData={modalData} />
    </BaseModal>
    </>
  )
}

export default BuddhaEdition;