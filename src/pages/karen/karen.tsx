import React from 'react'
import SingleNFTDetail from '../../components/Karen/SingleNFTDetail'
import NFTDescription from '../../components/Karen/NFTDescription'
import './style.scss'

const Karen = () => {

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
    <div className="space-wrap block-karen" ref={parallax}>
      <div className="block-full block-single-nft-details">
        <div className="nft-block">
          <SingleNFTDetail />
        </div>
      </div>
      <div className="block-full block-details-single">
        <NFTDescription />
      </div>
    </div>
  )
}

export default Karen;