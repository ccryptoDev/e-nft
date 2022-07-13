import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listings } from "../../actions";
import { NFTType } from "../../utils/types";
import ResaleNFTTableHeader from "./ResaleNFTTableHeader";
import ResaleNFTTableRow from "./ResaleNFTTableRow";
import { selectLisings } from "../../selector";
// import nftList from "../../pages/marketplace-listings/NFTData.json";

const ResaleNFTTable = () => {
  const NFTData: NFTType[] = useSelector(selectLisings);
  const dispatch = useDispatch();
  const rowPerPage = 3;
  const [currentpage, setPage] = useState(0);
  const [currentSortBy, setSortBy] = useState("edit_num");
  const indexOfLastRow = (currentpage + 1) * rowPerPage;
  const indexOfStartRow = indexOfLastRow - rowPerPage;
  const currentNFTRows = NFTData?.slice(indexOfStartRow, indexOfLastRow);
  const lastPage = Math.ceil(NFTData?.length / rowPerPage);

  const handlePrevClick = () => {
    if (currentpage != 0) {
      setPage(currentpage - 1);
      // dispatch(listings.paginationRequest(currentpage - 1, rowPerPage));
    }
  };
  const handleNextClick = () => {
    if (currentpage != lastPage - 1) {
      setPage(currentpage + 1);
      // dispatch(listings.paginationRequest(currentpage + 1, rowPerPage));
    }
  };
  const handleSortBy = (event: any) => {
    setSortBy(event.target.value);
    dispatch(listings.tokenListRequest());
  };
  useEffect(() => {
    dispatch(listings.tokenListRequest());
  }, []);
  return (
    <div className="nft-block block-listings">
      <ResaleNFTTableHeader handleSortBy={handleSortBy} />
      <div className="listings-wrap">
        <div className="css-table">
          {currentNFTRows?.map((NFTInfo: NFTType, i: number) => (
            <ResaleNFTTableRow {...NFTInfo} key={i} />
          ))}
          <p>&nbsp;</p>
          <div className="table-row pagination-row">
            <div className="table-col col-prev-btn">
              <span
                className={
                  currentpage != 0 ? "table-btn active-btn" : "table-btn"
                }
              >
                <a onClick={() => handlePrevClick()}>&larr; Prev Page</a>
              </span>
            </div>
            <div className="table-col col-page">
              <span>
                Page <strong>{currentpage + 1}&nbsp; </strong> of{" "}
                <strong>{lastPage}</strong>
              </span>
            </div>
            <div className="table-col col-next-btn">
              <span
                className={
                  currentpage != lastPage - 1
                    ? "table-btn active-btn"
                    : "table-btn"
                }
              >
                <a onClick={() => handleNextClick()}>Next Page &rarr;</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResaleNFTTable;
