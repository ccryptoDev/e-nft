import Climate from '../../assets/images/climate.png'
import Bootsy from '../../assets/images/bootsy.jpg'
import BootsyName from '../../assets/images/bootsy-name.jpg'
import Chewfu from '../../assets/images/chewfu.jpg'
import ChewfuName from '../../assets/images/chewfu-name.jpg'
import Steven from '../../assets/images/steven.jpg'
import StevenName from '../../assets/images/steven-name.jpg'

const Article = () => {
  return (
    <div className="the-article">
      <div className="the-overlay">
        <img className="climate" src={Climate} alt="" />
        <div className="bootsy">
          <img className="big-image" src={Bootsy} alt="" />
          <img className="the-name" src={BootsyName}  alt="" />
        </div>
        <div className="chewfu">
          <img className="big-image" src={Chewfu} alt="" />
          <img className="the-name" src={ChewfuName}  alt="" />
        </div>
        <div className="steven">
          <img className="big-image" src={Steven} alt="" />
          <img className="the-name" src={StevenName}  alt="" />
        </div>
      </div>
      <h2 className="the-title">A Radical Collaboration to save the planet</h2>
      <div className="the-quote">
        <h3>
          "Humankind has confronted and overcome immense challenges
          before; challenges that have required us to work together and
          put aside division and difference to fight a common threat."
        </h3>
      </div>
      <p className="the-description">
        Music4ClimateJustice is a new digital and live concert and event
        platform launching at the United Nations Climate Change Conference
        (COP26) on November 4th in Glasgow, Scotland—the biggest climate
        event ever—to drive measurable actions for change, and to bring
        greater awareness to the fact that the most marginalized in our
        society (indigenous, brown and black communities, women, and
        children) are the most impacted by climate injustice. Further,
        their goal is to raise financial support for climate refugees and
        those suffering the most. A recent report from UNICEF states
        nearly half of the world's children—roughly 1 billion—live in one
        of 33 countries classified as "extremely high risk" due to climate
        change impacts. Your support can help Music4ClimateJustice make a
        real difference to those suffering the most from climate change
        now and in the future.
      </p>
      <div className="button-wrap">
        <a className="btn-base btn-big model-button btn-bootsy" href="https://www.music4climatejustice.org" >
          Visit Music4ClimateJustice
        </a>
      </div>
    </div>
  )
}

export default Article