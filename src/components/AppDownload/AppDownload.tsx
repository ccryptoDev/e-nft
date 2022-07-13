import logoE from "../../assets/images/logo-e.png";
import logoAppStore from "../../assets/images/app-store 2.png";
import logoPlayStore from "../../assets/images/play-store 2.png";

import "./AppDownload.scss";

const AppDownload = () => {
  return (
    <div className="app-download">
      <div className="">
        <h2> Download The E-NFT App</h2>
      </div>
      <div className="store-container">
        <div className="app-logo">
          <img src={logoE} alt="" />
        </div>
        <div className="store-logos-container">
          <p>
            {" "}
            Download Our App &#38; Experience, view and share your Emmersive
            E-NFT's
          </p>
          <div className="store-logos">
            <img src={logoAppStore} alt="" />
            <img src={logoPlayStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
