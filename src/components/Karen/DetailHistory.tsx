import logoIcon from "../../assets/images/logo-enft.png"
import noteIcon from "../../assets/images/icon-single-note.png"
import movieIcon from "../../assets/images/icon-single-movie.png"
import whiteIcon from "../../assets/images/icon-single-art-white.png"
import artIcon from "../../assets/images/icon-single-art.png"
import flameIcon from "../../assets/images/icon-single-flame.png"
import leIcon from "../../assets/images/icon-single-le.png"
import oeIcon from "../../assets/images/icon-single-oe.png"

import omasIcon from "../../assets/images/creator_omas.jpg"
import adrianIcon from "../../assets/images/creator_adrian.jpg"

const DetailHistory = () => {
  return (
    <div className="details-history">
      <div className="edition-details rounded-white">
        <div className="creator-pic">
          <div className="edition">
            <img className="logo" src={logoIcon} alt="" />
            <h3>Limited Edition</h3>
            <h3>Open Edition</h3>
            <h3>Music Edition</h3>
            <h3>Movie Edition</h3>
          </div>

          <div className="creator-image">
            <div className="icon-wrap">
              <div className="icons">
                <div><img src={noteIcon} alt="" /><span>Music NFT</span></div>
                <div><img src={movieIcon} alt="" /><span>Movie NFT</span></div>
                <div><img src={artIcon} alt="" /><span>Artwork NFT</span></div>
                <div><img src={flameIcon} alt="" /><span>Hot Drop</span></div>
                <div><img src={leIcon} alt="" /><span>Limited Edition</span></div>
                <div><img src={oeIcon} alt="" /><span>Open Edition</span></div>
                {/* <div><img className="flame" data-toggle="tooltip" title="Music NFT" src={noteIcon} alt="" /></div>
                <div><img data-toggle="tooltip" title="Movie NFT" src={movieIcon} alt="" /></div>
                <div><img data-toggle="tooltip" title="Artwork NFT" src={artIcon} alt="" /></div>
                <div><img data-toggle="tooltip" title="Hot Drop" src={flameIcon} alt="" /></div>
                <div><img data-toggle="tooltip" title="Limited Edition" src={leIcon} alt="" /></div>
                <div><img data-toggle="tooltip" title="Open Edition" src={oeIcon} alt="" /></div> */}
              </div>
            </div>
          </div>

          <div className="creator-image creator-image-full">
            <img src={omasIcon} alt="" />
            <img src={adrianIcon} alt="" />
          </div>
          
        </div>

        <div className="icons-and-name">
          <div className="name">
            <div className="big-detail-wrap">
              <span className="detail-label">CREATOR</span>
              <span className="big-detail">Various Artists</span>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailHistory