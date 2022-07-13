import logo from '../../assets/images/logo-enft.png';
import singleNote from '../../assets/images/icon-single-note.png';
import singleMovie from '../../assets/images/icon-single-movie.png';
import singleArt from '../../assets/images/icon-single-art.png';
import singleFlame from '../../assets/images/icon-single-flame.png';
import singleLE from '../../assets/images/icon-single-le.png';
import singleOE from '../../assets/images/icon-single-oe.png';
import toryBig from '../../assets/images/creator-tory-big.jpg';

const DetailHistory = () => {
  return (
    <div className="details-history">
      <div className="edition-details rounded-white">
        <div className="creator-pic">
          <div className="edition">
            <img className="logo" src={logo} alt=""/>
            <h3>Limited Edition</h3>
            <h3>Open Edition</h3>
            <h3>Music Edition</h3>
            <h3>Movie Edition</h3>
          </div>

          <div className="creator-image">
            <div className="icon-wrap">
              <div className="icons">
                <div><img className="flame" data-toggle="tooltip" title="Music NFT" src={singleNote} alt=""/></div>
                <div><img data-toggle="tooltip" title="Movie NFT" src={singleMovie} alt=""/></div>
                <div><img data-toggle="tooltip" title="Artwork NFT" src={singleArt} alt=""/></div>
                <div><img data-toggle="tooltip" title="Hot Drop" src={singleFlame} alt=""/></div>
                <div><img data-toggle="tooltip" title="Limited Edition" src={singleLE} alt=""/></div>
                <div><img data-toggle="tooltip" title="Open Edition" src={singleOE} alt=""/></div>
              </div>
            </div>
          </div>

          <div className="creator-image creator-image-full"><img src={toryBig} alt=""/></div>
  
        </div>
        <div className="icons-and-name">
          <div className="name">
            <div className="big-detail-wrap">
              <span className="detail-label">CREATOR</span>
              <span className="big-detail">Various Artists</span>
            </div>
            <div className="big-detail-wrap">
              <span className="detail-label">MINTING DATE</span>
              <span className="big-detail">8/10/2021</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailHistory