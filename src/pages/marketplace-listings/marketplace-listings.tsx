import React from "react";
import ResaleNFTTable from "../../components/ResaleNFTTable";
import "./style.scss";
import IMG from "../../utils/images";

const MarketplaceListings = () => {

  const parallax = React.useRef<any>(null);

  React.useEffect(() => {
    function scrollHandler() {
      const element = parallax.current ;
      if (element) {
        let offset = window.pageYOffset;
        element.style.backgroundPositionY = - offset * 0.5 + "px";
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="block-full jcc space-wrap" ref={parallax}>
      <div className="inner-wrapper">
        <div className="nft-block block-market-item-header">
          <div className="the-branding-image">
            <img src={IMG.MARKET_HEADER} alt="" />
          </div>
        </div>
        <ResaleNFTTable />
      </div>
    </div>
  );
};

export default MarketplaceListings;
