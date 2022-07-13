import Drop from './Drop';
import { drops } from '../../pages/home/drops';
import { DropType } from '../../utils/types'

import DropImg1 from '../../assets/images/recent-drop-superbuddha.jpg'
import DropImg2 from '../../assets/images/recent-drop-karen.jpg'
import DropImg3 from '../../assets/images/recent-drop-tory.jpg'


const Discover = () => {
  const dropInfos: Array<DropType> = drops
  const dropImgs = [
    DropImg1,
    DropImg2,
    DropImg3,
  ];
  return (
		<div className="nft-block feature-recent-drops">
    <div>
      <div className="title">
        <div>
          <h6 className="the-subtitle">Discover</h6>
          <h2 className="the-title">Recent Drops</h2>
        </div>
        <a className="btn-base btn-medium btn-bluetogreen-dark" href="/marketplace/" title="Create Your Account to View More Drops">View More Drops &rarr;</a>
      </div>
      <div className="the-drops">
        { dropInfos.map((dropInfo:  DropType) => (
          <Drop dropInfo={dropInfo} dropImg={dropImgs[dropInfo.id -1]} key={dropInfo.id} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Discover;