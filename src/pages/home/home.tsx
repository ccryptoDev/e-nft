import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss'
import {
  HomeSlider,
  Discover,
  GettingStarted
} from '../../components/Home'

import { slider as sliderInfo } from './slider'
import { Slide } from '../../utils/types'
import Slider1 from '../../assets/images/slider/slider1.png'
import Slider2 from '../../assets/images/slider/slider2.png'
import Slider3 from '../../assets/images/slider/slider3.png'
import Slider4 from '../../assets/images/slider/slider4.png'
import Slider5 from '../../assets/images/slider/slider5.png'

const Home = () => {
  const sliderImg = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5
  ];
  const sliderData: Array<Slide> = sliderInfo;

  const parallax = React.useRef<any>(null);

  React.useEffect(() => {
    function scrollHandler() {
      const element = parallax.current ;
      if (element) {
        let offset = window.pageYOffset;
        element.style.backgroundPositionY = - offset * 0.5 + "px";
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="top-wrap space-wrap" ref={parallax}>
      <div className="carousel-wrap">
        <HomeSlider sliderInfo={sliderData} sliderImg={sliderImg} />
      </div>
      <Discover />
      <GettingStarted />
    </div>
  )
}

export default Home;