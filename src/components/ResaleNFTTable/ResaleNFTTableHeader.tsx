import IMG from "../../utils/images";
interface Props {
  handleSortBy: (event: any) => void;
}

const ResaleNFTTableHeader = (props: Props) => {
  const { handleSortBy } = props;
  return (
    <div className="nft-table-header">
      <div className="the-listing">
        <div className="the-details">
          <img
            className="listing-image"
            src="https://cdn.curios.com/3/895CE813-CB24-02CF-C681797BBA7D5946.png"
            alt=""
          />
          <div>
            <h3>When It's Dark by Tory Lanez</h3>
            <h4>Tory Lanez / 2021 / 7 Songs / 7 Works of Art</h4>
            <div className="the-icons">
              <div><img src={IMG.ICON_FLAME} alt=""/><span>Hot Drop</span></div>
              <div><img src={IMG.ICON_NOTE_WHITE} alt=""/><span>Music NFT</span></div>
              <div><img src={IMG.ICON_LE} alt="" /><span>Limited Edition</span></div>
              <div><img src={IMG.ICON_ART} alt=""/><span>NFT Artwork</span></div>
            </div>
          </div>
        </div>
        <div className="the-results">
          <span>
            Showing top <strong>100</strong> results
          </span>
        </div>
      </div>
      <div className="links-wrap">
        <div className="the-links">
          <ul>
            <li className="active-tab">
              <a href="">All Listings</a>
            </li>
          </ul>
        </div>
        <div className="sort-by css-select">
          <select
            name="sort_by"
            id="sort_by"
            onChange={(event) => handleSortBy(event)}
          >
            <option value="">Sort By</option>
            <option value="edit_num">Edition Number</option>
            <option value="price_low_high">Price (Low to High)</option>
            <option value="price_high_low">Price (High to Low)</option>
            <option value="expire">Expiring Soon</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ResaleNFTTableHeader;
