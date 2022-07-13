import NFTHeader from './NFTHeader'
import NFTAudio from './NFTAudio'
import NFTGallery from './NFTGallery'
import NFTVideo from './NFTVideo'
import NFTImage from './NFTImage'

const SingleNFTDetail = () => {
  return (
    <div id="main-container">
      <NFTHeader />
      <NFTAudio />
      <hr />
      <NFTGallery />
      <hr />
      <NFTVideo />
      
      <NFTImage />
    </div>
  )
}

export default SingleNFTDetail
