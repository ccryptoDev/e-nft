import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-enft-beta.png";
import { AppDownload } from "../AppDownload";
import CopyRight from "./CopyRight";
import "./Footer.scss";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="connect-more">
          <Subscribe />
          <AppDownload />
        </div>
        <hr />
        <div className="footer-links">
          <div className="summary">
            <img src={logo} alt="" />
            <p>
              The only digital marketplace to purchase exclusive E-NFT digital
              assets from artists, athletes, celebrities and brands.
            </p>
          </div>
          <div className="links-wrap">
            <div>
              <h4>Marketplace</h4>
              <ul>
                <li>
                  <Link to="/marketplace-listings" title="">
                    ALL E-NFT's
                  </Link>
                </li>
                <li>
                  <Link to="/nft/superbuddha" title="">
                    Exclusive Editions
                  </Link>
                </li>
                <li>
                  <Link to="/nft/karen/#karen-limited" title="">
                    Limited Editions
                  </Link>
                </li>
                <li>
                  <Link to="/nft/karen/#karen-open" title="">
                    Open Editions
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace-listings" title="">
                    Upcoming Drops
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>My Account</h4>
              <ul>
                <li>
                  <Link to="/account/profile/" title="">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/account/settings/" title="">
                    Account Settings
                  </Link>
                </li>
                <li>
                  <Link to="/account/" title="">
                    My Wallet
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
              <li>
                  <a
                    href="http://support.e-nft.com"
                    title=""
                    target="_blank"
                    rel="noopener"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.emmersiveentertainment.com/"
                    title="About Emmersive"
                    target="_blank"
                    rel="noopener"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="http://support.e-nft.com"
                    title=""
                    target="_blank"
                    rel="noopener"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="http://support.e-nft.com"
                    title=""
                    target="_blank"
                    rel="noopener"
                  >
                    Recent Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
