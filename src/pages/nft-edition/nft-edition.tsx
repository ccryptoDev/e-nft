import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NFTItemJson from "./NFTItem.json";
import IMG from "../../utils/images";
import BaseModal from "../../components/Modals/BaseModal";
import NFTBuyModal from "../../components/Modals/NFTBuyModal";
import { NFTType } from "../../utils/types";
import "./style.scss";
import { nft } from "../../actions";
import { selectNftDetail } from "../../selector";

const NFTEdition = () => {
  const dispatch = useDispatch();
  const { tokenId }: any = useParams();
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  const handleModal = () => {
    setShow(true);
  };
  // const NFTItem: NFTType = NFTItemJson;
  const NFTItem: NFTType = useSelector(selectNftDetail);

  const parallax = React.useRef<any>(null);
  useEffect(() => {
    dispatch(nft.getTokenRequest(tokenId));
    function scrollHandler() {
      const element = parallax.current;
      if (element) {
        let offset = window.pageYOffset;
        element.style.backgroundPositionY = -offset * 0.5 + "px";
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div className="block-full jcc space-wrap" ref={parallax}>
        <div className="inner-wrapper marketplace-auction-wrap">
          <div className="nft-block block-market-item-details">
            <div id="main-container">
              <div className="item-wrap">
                <div className="the-item">
                  <div className="item-image">
                    <a href="/nft/">
                      <img src={NFTItem.PREVIEW_IMAGE} alt="NFT Art" />
                    </a>
                  </div>
                  <div className="the-details">
                    <div className="warning-text">
                      WARNING: EXPLICIT LANGUAGE CONTAINED
                    </div>
                    <br />
                    <a href="/nft/">
                      <h2>{NFTItem.TITLE}</h2>
                      <h4>{NFTItem.SUBTITLE}</h4>
                    </a>
                    <div className="the-icons">
                      <div>
                        <img src={IMG.ICON_FLAME} alt="" />
                        <span>Hot Drop</span>
                      </div>
                      <div>
                        <img src={IMG.ICON_NOTE} alt="" />
                        <span>Music NFT</span>
                      </div>
                      <div>
                        <img src={IMG.ICON_LE} alt="" />
                        <span>Limited Edition</span>
                      </div>
                      <div>
                        <img src={IMG.ICON_ART} alt="" />
                        <span>NFT Artwork</span>
                      </div>
                    </div>
                    <div className="inner-details">
                      <div className="bid-wrap">
                        <span className="buy-now">
                          <strong>Buy It Now</strong> for{" "}
                          <strong>{NFTItem.price}</strong>
                        </span>
                      </div>
                      <div className="details-wrap">
                        <span className="details-title">Time Remaining</span>
                        <span className="details">
                          <strong>
                            <span>3d 3h 38m 4s</span>
                          </strong>
                          <em>({NFTItem.expire_date})</em>
                        </span>
                      </div>
                      <div className="details-wrap">
                        <span className="details-title">Seller</span>
                        <span className="details">
                          {NFTItem.seller_email}
                          <a href="#"></a>
                        </span>
                      </div>

                      <div className="details-wrap">
                        <span className="details-title">Edition Number</span>
                        <span className="details">
                          <strong>#{NFTItem.EDITION_NUM}</strong> of{" "}
                          {NFTItem.EDITION_OF}
                        </span>
                      </div>
                      <div className="details-wrap">
                        <span className="details-title">Token</span>
                        <span className="details">
                          <a
                            href="https://polygonscan.com/token/0x5d1bbfc2d4e4692d2464770725e62ce4ce45b66d?a=180509#inventory"
                            target="_blank"
                          >
                            {NFTItem.TOKEN_ID}
                            <br />
                            <small className="text-muted">
                              Click to Verify on the Polygon Blockchain
                            </small>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="the-buttons">
                  <a
                    href="#"
                    className="btn-base btn-medium btn-blue-dark"
                    title="Buy It Now"
                    data-toggle="modal"
                    data-target="#buynow-modal"
                    onClick={() => handleModal()}
                  >
                    Buy <span> ${NFTItem.price}</span>
                  </a>

                  <div className="btn-content">
                    <small>* Pay with crypto or credit card</small>
                    <br />
                    <small>
                      <a
                        href="http://support.e-nft.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        New to crypto? Learn more here...
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseModal show={show} closeModal={closeModal}>
        <NFTBuyModal nftId={NFTItem.TOKEN_ID} price={NFTItem.price} />
      </BaseModal>
    </>
  );
};

export default NFTEdition;
