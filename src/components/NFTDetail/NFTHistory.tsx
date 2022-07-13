import IMG from "../../utils/images";

const NFTHistory = () => {
  return (
    <div className="details-history">
      <div className="edition-details rounded-white">
        <div className="creator-pic">
          <div className="edition">
            <img className="logo" src={IMG.ENFT_LOGO} alt="" />
            <h3>Limited Edition</h3>
            <h3>Music Drop +</h3>
            <h3>Bonus Artwork</h3>
          </div>
          <div className="creator-image">
            <img src={IMG.TORY_CREATOR} alt="" />
          </div>
        </div>

        <div className="icons-and-name">
          <div className="icons">
            <div>
              <img
                className="flame"
                data-toggle="tooltip"
                title="Hot Drop"
                src={IMG.ICON_FLAME}
                alt=""
              />
            </div>
            <div>
              <img
                data-toggle="tooltip"
                title="Music NFT"
                src={IMG.ICON_NOTE}
                alt=""
              />
            </div>
            <div>
              <img
                data-toggle="tooltip"
                title="Limited Edition"
                src={IMG.ICON_LE}
                alt=""
              />
            </div>
            <div>
              <img
                data-toggle="tooltip"
                title="NFT Artwork"
                src={IMG.ICON_ART}
                alt=""
              />
            </div>
          </div>
          <div className="name">
            <div className="big-detail-wrap">
              <span className="detail-label">CREATOR</span>
              <span className="big-detail">Tory Lanez</span>
            </div>
            <div className="big-detail-wrap">
              <span className="detail-label">RELEASE DATE</span>
              <span className="big-detail">8/10/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTHistory;
