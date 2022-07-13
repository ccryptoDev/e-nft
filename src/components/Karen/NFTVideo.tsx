import ImageGallery from 'react-image-gallery';
import leIcon from '../../assets/images/icon-single-le.png'
import movieIcon from '../../assets/images/icon-single-movie.png'
import videoInfo from './VideoData'
import VideoCarousel from './VideoCarousel'
import { videoItemType } from '../../utils/types'

const NFTVideo = () => {
  const videos : Array<videoItemType> = videoInfo
  return (
    <div className="nft-type-video">
      <ul className="icons-big-list">
        <li><img src={leIcon} alt="" /></li>
        <li><img src={movieIcon} alt="" /></li>
      </ul>

      <h6 className="the-subtitle">Limited Edition Content Only</h6>
      <h2 className="the-title">Watch Music Videos and Behind-The-Scenes Footage</h2>

      <div className="video-carousel">
        <div id="videos" className="owl-carousel owl-theme">
          {/* <ImageGallery 
            items={Videos} 
            lazyLoad={true} 
            showBullets={false} 
            showFullscreenButton={false} 
            showPlayButton={false} 
            disableThumbnailScroll={false} 
          /> */}
          <VideoCarousel videos={videos} />
        </div>
      </div>
    </div>
  )
}

export default NFTVideo