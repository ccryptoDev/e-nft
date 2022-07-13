import { DropType } from '../../utils/types'

interface Props {
  dropInfo: DropType;
  dropImg: string;
}

const Drop = ({
  dropInfo,
  dropImg
}: Props) => {
  return (
    <div className="drop-item">
      <div className="drop-details">
        <a href="/nft/superbuddha/" title={dropInfo.title}>
          <img src={dropImg} alt="" />
        </a>
        <div>
          <h4>{dropInfo.title}</h4>
          <h5>{dropInfo.subtitle}</h5>
          <p>{dropInfo.description}</p>
        </div>
      </div>
      <div className="button-wrap">
        <a className="btn-base btn-small btn-outline-white" href={dropInfo.link} title="Create Your Account">View Now</a>
      </div>
    </div>  
  )
}

export default Drop;