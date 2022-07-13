import React from 'react';
import { Link } from 'react-router-dom';
import './marketplace.scss';
import MPsuperbuddha from '../../assets/images/marketplace-superbuddha.png';
import MPkaren from '../../assets/images/marketplace-karen-le.png';
import MPkarenOE from '../../assets/images/marketplace-karen-oe.png';
import MPtory from '../../assets/images/marketplace-tory.jpg';

const Marketplace = () => {

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
    <>
    <div className="block-full block-marketplace-discover space-wrap" ref={parallax}>
      <div className="nft-block">

        <div className="block-title">
          <h2>Recent Drops</h2>
        </div>

        <div className="auction-item" style={{marginBottom : 25}}>
          <div className="image-half">
            <Link to="/nft/superbuddha"><img src={MPsuperbuddha} alt=""/></Link>
          </div>
          <div className="image-half">
            <Link to="/nft/karen/"><img src={MPkaren} alt=""/></Link>
          </div>
          <div className="image-half">
            <Link to="/nft/karen/"><img src={MPkarenOE} alt="" /></Link>
          </div>
        </div>

      </div>
    </div>

    <div className="block-full block-marketplace-discover">
      <div className="nft-block">

        <div className="block-title">
          <h2>Available only on the Resale Marketplace</h2>
        </div>

        <div className="auction-item" style={{marginBottom : 25}}>
          <div className="image-half">
            <Link to="/marketplace-listings/tory-lanez"><img src={MPtory} alt="" /></Link>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Marketplace;


