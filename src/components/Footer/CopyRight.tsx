import { Link } from "react-router-dom";
import IconFacebook from "../../assets/svg/facebook.svg";
import IconTwitter from "../../assets/svg/twitter.svg";
import IconLinkedin from "../../assets/svg/linkedin.svg";
import IconInstagram from "../../assets/svg/instagram.svg";
const CopyRight = () => {
  return (
    <div className="copyright">
      <div className="copyright-inner">
        <div className="term-policy">
          <Link to="/privacy/" title="">
            Privacy Policy
          </Link>
          <Link to="/terms/" title="">
            Terms of Use
          </Link>
        </div>
        <div className="social-media">
          <a className="social-icon facebook-icon" href="facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="social-icon twitter-icon" href="twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-icon linkedin-icon" href="linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="social-icon instagram-icon" href="instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
