import Carousel from 'react-bootstrap/Carousel'
import { Slide } from '../../utils/types'

interface Props {
  sliderInfo: Array<Slide>,
  sliderImg: Array<any>
}

const HomeSlider = ({
  sliderInfo,
  sliderImg
}: Props): JSX.Element => {
  return (
    <Carousel interval={20000}>
      {sliderInfo.map((slider: Slide) => {
        return(
          <Carousel.Item key={slider.id}>
            <div className="caption-wrap">
              <div className="caption-content">
                <h3>{slider.title}</h3>
                <h1>{slider.mainDesc}</h1>
                <h2>{slider.shortDesc}</h2>

                <div className="button-wrap">
                  {slider.register === true && <a className="btn-base btn-big btn-blue-dark" href="/login">Register/Login</a>}
                  {slider.preview === true && <a className="btn-base btn-big btn-outline-white" href="/nft/superbuddha">Preview</a>}
                  {slider.buy === true && <a className="btn-base btn-big btn-outline-white" href={slider.link}>Buy Now</a>}
                </div>
              </div>

              <div className="caption-image-wrap">
                <div className="caption-image">
                  <a href={slider.link}>
                    <img src={sliderImg[slider.id-1]} className="image fit" alt="" />
                  </a> 
                </div>
              </div>
            </div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item> 
        );
      })}
    </Carousel>
  );
}

export default HomeSlider