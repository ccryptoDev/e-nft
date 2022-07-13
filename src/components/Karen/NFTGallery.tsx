import ImageGallery from 'react-image-gallery';
import leIcon from '../../assets/images/icon-single-le.png'
import artIcon from '../../assets/images/icon-single-art-white.png'
import { artWork } from './ImageGallery'

const NFTGallery = () => {
  return (
    <div className="nft-type-video nft-type-owlgallery">
      {/* Owl gallery text */}
      <div className="the-carousel-text">
        <ul className="icons-big-list">
          <li><img src={leIcon} alt="" /></li>
          <li><img src={artIcon} alt="" /></li>
        </ul>
        <h6 className="the-subtitle" aria-level={3}>Limited Edition Content Only</h6>
        <h2 className="the-title">Unique matching music video digital artwork</h2>
        <h3>Three different works of art were created for each of the three music videos. The Karen Soundtrack Limited Edition gives you access to stream and enjoy all of them.</h3>
      </div>

      {/* Owl gallery images */}
      <div className="owl-image-carousel">
        <ImageGallery 
          items={artWork} 
          lazyLoad={true}
          showBullets={true}
          showFullscreenButton={false}
          showPlayButton={false}
          disableThumbnailScroll={false}
        />
      </div>
    </div>
  ) 
}

export default NFTGallery