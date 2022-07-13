import { nftStepInfo } from '../../pages/home/nft-making-step'
import { nftStepType } from '../../utils/types'
import NFTStep from './NFTStep'

const GettingStarted = () => {
  const nftSteps: Array<nftStepType> = nftStepInfo
  return (
    <div className="block-full block-infographic">

		<div className="nft-block">
			<div className="block-title">
				<h2>Getting Started</h2>
				<h1>Making Your First E-NFT Purchase</h1>
			</div>
	
			<div className="steps-wrap">
        {nftSteps.map((nftStep: nftStepType) => (
          <NFTStep nftStep={nftStep} key={nftStep.stepNumber} />
        ))}
			</div>
			
			<a className="btn-base btn-big btn-blue-dark" href="/login/" title="Create Your Account">Create Your Account &amp; Wallet</a>

		</div>
	</div>
  )
}

export default GettingStarted;
