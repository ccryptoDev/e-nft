import logoIcon from "../../assets/images/logo-enft.png"
import noteIcon from "../../assets/images/icon-single-note.png"
import whiteIcon from "../../assets/images/icon-single-art-white.png"
import oeIcon from "../../assets/images/icon-single-oe.png"
import heartIcon from '../../assets/images/icon-single-heart.png'
import Climate from "../../assets/images/climate.png"

const DetailHistory = () => {
  return (
    <div className="details-history">
      <div className="edition-details rounded-white">
        <div className="creator-pic">
          <div className="edition">
            <img className="logo" src={logoIcon} alt="" />
            <h3>Open Edition</h3>
            <h3>Music Edition</h3>
            <h3>Art Edition</h3>
          </div>
          <div className="creator-image">
            <img src={Climate} alt="" />
          </div>
        </div>
        <div className="icons-and-name">
          <div className="icon-wrap">
            <div className="icons">
              <div>
                <img src={noteIcon} alt="" data-original-title="Music NFT" />
              </div>
              <div>
                <img src={whiteIcon} alt="" data-original-title="Artwork NFT" />
              </div>
              <div>
                <img src={heartIcon} alt="" data-original-title="Charitable Drop" />
              </div>
              <div>
                <img src={oeIcon} alt="" data-original-title="Open Edition" />
              </div>
            </div>
          </div>
          <div className="name">
            <div className="big-detail-wrap">
              <span className="detail-label">CREATOR</span>
              <h5 style={{marginBottom: "0"}}>
                Bootsy Collins, Stevie Van Zandt &amp; Chew Fu
              </h5>
              <p style={{fontSize: "14px", fontWeight: "bold"}}>
                Engineered by: Tobe Donohue, Bootzilla Records<br />Mastered
                by: Ken Love, Sweetwater Studios
              </p>
            </div>
            <div className="big-detail-wrap">
              <span className="detail-label">MINTING DATE</span>
              <span className="big-detail">November 4, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="need-help">
        <span className="big-detail">Have a Question?</span>
        <h4>We can help.</h4>
        <a className="btn-base btn-medium btn-green-dark" href="http://support.e-nft.com/" title="Visit our Help Center" >
          Visit our Help Center
        </a>
      </div>
    </div>
  )
}

export default DetailHistory