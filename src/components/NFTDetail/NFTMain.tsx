import { Link } from "react-router-dom";

const NFTMain = () => {
  return (
    <div id="main-container">
      <div className="button-wrap">
        <Link
          to="/marketplace-listings/"
          className="btn-base btn-big btn-blue-dark"
        >
          Buy Now on the Marketplace
        </Link>
      </div>

      <div className="playlist-title show-small">
        <h6>Preview</h6>
        <h1>When It's Dark by Tory Lanez</h1>
        <h6>Tory Lanez / 2021 / 7 Songs / 7 Works of Art</h6>
      </div>
      <div id="music-player">
        <div className="music-card">
          <audio
            id="play-audio"
            src="https://cdn.curios.com/3/621657EF-CD27-EBE2-954D62B543256B71.mp3"
          ></audio>
          <img
            className="player-image"
            src="https://cdn.curios.com/3/200E9CED-DFA5-A663-E1CA696903CCE4EA.jpg"
          />
          <div id="progress-wrapper">
            <div id="progress"></div>
          </div>
          <div className="play-btn">
            <i className="fas fa-random player-icon"></i>
            <i className="fas fa-step-backward player-icon"></i>
            <i
              className="far fa-play-circle player-icon play-icon-btn"
              id="play-btn-id"
            ></i>
            <i
              className="far fa-pause-circle player-icon play-icon-btn"
              id="pause-btn-id"
            ></i>
            <i className="fas fa-step-forward player-icon"></i>
            <i className="fas fa-history player-icon"></i>
          </div>
          <div>
            <h3 className="song-name">Big Dog </h3>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
      </div>
      <div id="music-playlist">
        <div className="playlist-title show-big">
          <h6>Preview</h6>
          <h1>When It's Dark by Tory Lanez</h1>
          <h6>Tory Lanez / 2021 / 7 Songs / 7 Works of Art</h6>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/200E9CED-DFA5-A663-E1CA696903CCE4EA.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">Big Dog </h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/201036CC-DC2E-A1DA-C150BF05D7ED6C08.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">Honest</h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/20109CF1-C165-81D1-ED1C9424ECD150DC.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">Neighborhood Hero</h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/20108E30-C50C-3646-69C61A5EB3CD6D46.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">Not Going Back</h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/200FDC1C-D69C-3F8B-3C4EDD2A6E8626DC.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">X2 </h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/200FD931-DAA9-472B-5DBC0745E34BB6BE.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">BRAZY NESS </h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
        <div className="music-card-list">
          <img
            src="https://cdn.curios.com/3/20103707-D242-5361-F30A5DB73497D85C.jpg"
            className="music-image"
          />
          <div className="music-details">
            <h5 className="music-name">Nobody </h5>
            <p className="singer-name">Tory Lanez</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTMain;
