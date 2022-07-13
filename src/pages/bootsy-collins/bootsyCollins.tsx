import React, { useState, useEffect, useRef } from 'react'
import {
  SingleNFTDetail,
  NFTDescription
} from '../../components/Bootsy'
import './bootsy.scss'
import './music-player.scss'

const BootsyCollins = () => {
  const parallax = React.useRef<any>(null);

  useEffect(() => {
    // function scrollHandler() {
    //   const element = parallax.current ;
    //   if (element) {
    //     let offset = window.pageYOffset;
    //     element.style.backgroundPositionY = - offset * 0.5 + "px";
    //   }
    // }
    // window.addEventListener("scroll", scrollHandler);
    // return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="space-wrap block-bootsy" ref={parallax}>
      <div className="block-full block-single-nft-details">
        <div className="nft-block">
          <SingleNFTDetail />
        </div>
      </div>
      <div className="block-full block-details-single">
        <NFTDescription />
      </div>
    </div>
  )
}

export default BootsyCollins