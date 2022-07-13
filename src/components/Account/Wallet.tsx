import singleFlame from '../../assets/images/icon-single-flame.png';
import singleArt from '../../assets/images/icon-single-art.png';
import singleNote from '../../assets/images/icon-single-note-white.png';
import singleLE from '../../assets/images/icon-single-le.png';
import logoE from '../../assets/images/logo-e.png';
import { Link } from 'react-router-dom';


const Wallet = () => {
  return (
    <div className="nft-block block-account-library">
      <h1>Emmersive Wallet</h1>
      <h4>(6 NFTs across 3 Editions)</h4>
      <div className="library-wrap">
        <div className="item">
          <div className="the-image">
            <Link to="/marketplace-listings"><img src="https://cdn.curios.com/3/895CE813-CB24-02CF-C681797BBA7D5946.png" alt="" /></Link>
          </div>
          <div className="the-details">
            <div>
              <h5><Link to="/marketplace-listings">When It's Dark by Tory Lanez</Link></h5>
              <span className="h7">Edition Type: LIMITED</span>
              <span className="h7">You own 3&times;</span>
            </div>
          </div>
          <div className="the-icons">
            <div><img className="flame" data-toggle="tooltip" title="Hot Drop" src={singleFlame} alt="" /></div>
            <div><img data-toggle="tooltip" title="Music NFT" src={singleNote} alt="" /></div>
              <div><img data-toggle="tooltip" title="Limited Edition" src={singleLE} alt="" /></div>
            <div><img data-toggle="tooltip" title="NFT Artwork" src={singleArt} alt="" /></div>
          </div>
          <div className="button-wrap">
            <Link className="btn-base btn-small btn-outline-white" to="/marketplace-listings" title="View Collection">View Collection</Link>
          </div>
        </div>
        <div className="item">
          <div className="the-image">
            <Link to="/nft/karen/#karen-limited"><img src="https://cdn.curios.com/3/689904A6-B7D0-1C54-B7D7EF2B11F61DD2.jpg" alt="" /></Link>
          </div>
          <div className="the-details">
            <div>
              <h5><Link to="/nft/karen/#karen-limited">Karen - The Movie Soundtrack </Link></h5>
              
              <span className="h7">Edition Type: LIMITED</span>
              <span className="h7">You own 2&times;</span>
            </div>
            
          </div>
          <div className="the-icons">
            <div><img className="flame" data-toggle="tooltip" title="Hot Drop" src={singleFlame} alt="" /></div>
            <div><img data-toggle="tooltip" title="Music NFT" src={singleNote} alt="" /></div>
              <div><img data-toggle="tooltip" title="Limited Edition" src={singleLE} alt="" /></div>
            <div><img data-toggle="tooltip" title="NFT Artwork" src={singleArt} alt="" /></div>
          </div>
          <div className="button-wrap">
            <Link className="btn-base btn-small btn-outline-white" to="/nft/karen/#karen-limited" title="View Collection">View Collection</Link>
          </div>
        </div>
        <div className="item">
          <div className="the-image">
            <Link to="/nft/karen/#karen-open"><img src="https://cdn.curios.com/3/689E2547-0F68-31C0-0D049387A5B0F2F4.jpg" alt="" /></Link>
          </div>
          <div className="the-details">
            <div>
              <h5><Link to="/nft/karen/#karen-open">Karen - The Movie Soundtrack Open Edition</Link></h5>
              <span className="h7">Edition Type: OPEN</span>
              <span className="h7">You own 1&times;</span>
            </div>
          </div>
          <div className="the-icons">
            <div><img className="flame" data-toggle="tooltip" title="Hot Drop" src={singleFlame} alt="" /></div>
            <div><img data-toggle="tooltip" title="Music NFT" src={singleNote} alt="" /></div>
              <div><img data-toggle="tooltip" title="Open Edition" src={singleLE} alt="" /></div>
            <div><img data-toggle="tooltip" title="NFT Artwork" src={singleArt} alt="" /></div>
          </div>
          <div className="button-wrap">
            <Link className="btn-base btn-small btn-outline-white" to="/nft/karen/#karen-open" title="View Collection">View Collection</Link>
          </div>
        </div>
        <div className="fill-empty-space"></div>
        <div className="fill-empty-space"></div>
        <div className="fill-empty-space"></div>
        <div className="fill-empty-space"></div>
      </div>

      <div className="nft-block block-download-app">
        <div className="download">
          <Link to="#" target="_blank" rel="noopener">
            <div>
              <div className="logo">
                <img src={logoE} alt="" />
                <h4>Mobile Web App Available Soon</h4>
              </div>
              <div className="not-logo">
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Wallet;