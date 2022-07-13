import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { artWorkImages } from './artWorkImages'
import './artWork.scss'

const ArtWork = () => {
  return (
    <div className="account-artwork">
      <h3>Wallet.<strong>Artwork Viewer</strong></h3>
      <div className="artwork-wrapper">
        <div className="video-carousel owl-image-carousel">
          <ImageGallery 
            items={artWorkImages} 
            lazyLoad={true}
            showBullets={true}
            showFullscreenButton={false}
            showPlayButton={false}
            disableThumbnailScroll={false}
          />
        </div>
      </div>
    </div>
  )
}

export default ArtWork