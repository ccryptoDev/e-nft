import React from 'react';
import CheckoutAnnounceBar from '../order/checkoutAnnounceBar';
import Description from './description';
import Details from './details';
import DetailHistory from './detailsHistory';
import './karenPurchasing.scss'

const KarenPurchasing = () => {

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
    <CheckoutAnnounceBar />
    <div className="space-wrap" ref={parallax}>
      <div className="block-full block-single-nft-details">

        <Details />
        
      </div>

      <div className="block-full block-details-single">
        <div className="nft-block">
          <Description />

          <DetailHistory /> 

        </div>
      </div>
    </div>
    </>
   
  )
}

export default KarenPurchasing;