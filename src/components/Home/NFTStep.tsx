import { nftStepType } from '../../utils/types'

interface Props {
  nftStep: nftStepType  
}

const NFTStep = ({
  nftStep
}: Props) => {
  return (
    <div>
      <span className="step-number">{nftStep.stepNumber}</span>
      <i className={nftStep.icon}></i>
      <h3>{nftStep.stepTitle}</h3>
      <h4>{nftStep.desc}</h4>
    </div>
  )
}

export default NFTStep