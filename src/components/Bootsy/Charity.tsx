
import heartIcon from '../../assets/images/icon-single-heart.png'

const Charity = () => {
  return (
    <div className="for-charity">
      <img className="the-icon" src={heartIcon} alt="" />
      <h2>
        Majority of proceeds to benefit Music4ClimateJustice Charity
      </h2>
      <p>
        Donations support Music4Climate® Impact, a 501(c)(3) non-profit
        fund sponsored by Legacy Global Foundation.
      </p>
      <div className="button-wrap">
        <a className="btn-base btn-big model-button btn-bootsy" href="https://www.music4climatejustice.org/beneficiaries">
          Donate Now
        </a>
      </div>
    </div>
  )
}

export default Charity