import React from "react";
import { Link } from "react-router-dom";
import bgProfile from '../../assets/images/bg-profile.jpg';

import './profile.scss';

import {
  Purchase,
  ProfileHeader
} from '../../components/Account';

const ProfilePurchases = () => {

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
      <img src={bgProfile} alt="" />
    </div>
    <div className="block-full space-wrap" ref={parallax}>
      <div className="nft-block block-user-profile">
        <ProfileHeader />

        <div className="user-links">
          <ul>
            <li><Link to="/account/">Wallet</Link></li>
            <li><Link to="/account/sell">Past Sales</Link></li>
            <li><Link to="/account/payouts">Payouts</Link></li>
            <li><Link to="/account/purchases" className="active">Past Purchases</Link></li>
            {/* <li><Link to="/logout/" >Logout</Link></li> */}
          </ul>
        </div>

        <Purchase/>

      </div>
    </div>
    
    </>
  )
}

export {ProfilePurchases}
