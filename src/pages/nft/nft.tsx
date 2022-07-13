import { NFTMain, NFTInfo, NFTHistory } from "../../components/NFTDetail";
import "./style.scss";
const NFT = () => {
  return (
    <div className="tory-wrap">
      <div className="block-full block-big-nft block-audio-playlist">
        <h5 className="promo-tagline">
          Introducing Limited Edition Digital Music Collectibles
        </h5>
        <div className="nft-block">
          <div className="warning-text ">
            WARNING: EXPLICIT LANGUAGE CONTAINED
          </div>
          <NFTMain />
        </div>
      </div>
      <div className="block-full block-details-single">
        <div className="nft-block">
          <NFTInfo />
          <NFTHistory />
        </div>
      </div>
    </div>
  );
};

export default NFT;
