import React from "react";
import { Link } from "react-router-dom";
import bgSettings from '../../assets/images/banner-exclusive.jpg';
import { ProfileHeader } from '../../components/Account';

import './profile.scss';

const AccountSettings = () => {

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
    <div className="block-full image-exclusive">
      <img src={bgSettings} alt="" />
    </div>
    <div className="block-full space-wrap" ref={parallax}>
      <div className="nft-block block-user-profile">
        <ProfileHeader />

        <div className="user-links">
          <ul>
            <li><Link to="/account/" className="active">Wallet</Link></li>
            <li><Link to="/account/sell">Past Sales</Link></li>
            <li><Link to="/account/payouts">Payouts</Link></li>
            <li><Link to="/account/purchases">Past Purchases</Link></li>
          </ul>
        </div>

        <div className="nft-block block-account-library">
          <h1>Settings</h1>
          <p>...</p>
        </div>
        <h3>Launching soon...</h3>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


      </div>
    </div>
    
    </>
  )
}

export {AccountSettings}
