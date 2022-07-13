import { Link } from "react-router-dom";

const NFTInfo = () => {
  return (
    <div className="main-info rounded-white">
      <div className="auction-time">
        <div className="button-wrap"></div>

        <div className="center-content">
          <h4>No More Pre-Orders Available</h4>

          <Link
            to="/marketplace-listings/"
            className="btn-base btn-big btn-blue-dark"
          >
            Buy Now on the Marketplace
          </Link>
        </div>

        <div className="remaining">
          <div>
            <div className="time-remaining">
              <span className="big-detail"></span>
            </div>
            <div className="show-bidders"></div>
          </div>
        </div>
      </div>
      <img
        className="tory-image image fit"
        src="https://cdn.curios.com/3/895CE813-CB24-02CF-C681797BBA7D5946.png"
        alt=""
      />
      <span className="detail-label">DESCRIPTION</span>
      This album is a classNameic piece of timeless art that speaks volumes to
      the musical genius Tory Lanez’s incredible ability to consistently give
      fans a pure and untainted journey through these unique songs that will
      permeate and leave an indelible impression on listeners worldwide.
      Introducing Tory’s very first E-NFT album entitled “WHEN IT’S DARK”.
      <p className="notes">
        <br />
        <small>
          &dagger; Buyers may be verified before purchases are accepted.
          <br />
          Item can be paid for with cryptocurrencies if you prefer.
        </small>
      </p>
      <div className="button-wrap">
        <a
          className="btn-base btn-big btn-green-dark model-button"
          href="https://foreverumbrella.com/"
          title="Buy Now"
          target="_blank"
          rel="noopener"
        >
          Go To Merchandise Site
        </a>
      </div>
    </div>
  );
};

export default NFTInfo;
