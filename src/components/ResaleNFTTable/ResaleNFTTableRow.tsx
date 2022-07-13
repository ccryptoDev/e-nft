import { NFTType } from "../../utils/types";

const ResaleNFTTableRow = (NFTItem: NFTType) => {
  return (
    <a className="table-row" href={`/nft-edition/${NFTItem.TOKEN_ID}`}>
      <div className="table-col col-seller">
        <img src={NFTItem.PREVIEW_IMAGE} alt="" />
        <div className="col-inner-seller">
          <span className="col-title">Seller</span>
          <span className="col-info">{NFTItem.seller_email}</span>
        </div>
      </div>
      <div className="table-col col-edition">
        <span className="col-title">Edition Number</span>
        <span className="col-info">#{NFTItem.EDITION_NUM} of {NFTItem.EDITION_OF} </span>
      </div>
      <div className="table-col col-remaining">
        <span className="col-title">Time Remaining</span>
        <span className="col-info">
          1d left <em>{NFTItem.expire_date}</em>
        </span>
      </div>
      <div className="table-col col-buy">
        <span className="col-title">Buy It Now</span>
        <span className="col-info">${NFTItem.price}</span>
      </div>
    </a>
  );
};

export default ResaleNFTTableRow;
