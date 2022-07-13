import Promo from './Promo'
import Charity from './Charity'
import Article from './Article'

const NFTHeader = () => {
  return (
    <div className="nft-header">
      <Promo />
      <hr />
      <Charity />
      <hr />
      <Article />
    </div>
  )
}

export default NFTHeader