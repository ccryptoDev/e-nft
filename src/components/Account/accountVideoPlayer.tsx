import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { createRef, useRef } from "react";
import { videoItemType } from '../../utils/types'

interface Props {
  videos: Array<videoItemType>
}

export default function VideoCarousel({
  videos
}: Props) {
  const carousel = useRef();
  const settings = {
    infinite: true,
    customPaging: function (i: number) {
      return (
        <div id="thumbnail">
          <div className="item">
            <img
              src={videos[i].thumbnail}
              height="100%"
              width="100%"
              alt={videos[i].alt}
            />
            <span>
              <strong>{videos[i].description}</strong>
            </span>
          </div>
        </div>
      );
    },
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  
  return (
    <div className="video-slider">
      {/* @ts-ignore */}
      <button type="button" className="image-gallery-icon image-gallery-left-nav" aria-label="Previous Slide" onClick={() => carousel.current.slickPrev()}>
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {/* @ts-ignore */}
      <button type="button" className="image-gallery-icon image-gallery-right-nav" aria-label="Next Slide" onClick={() => carousel.current.slickNext()}>
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      {/* @ts-ignore */}
      <Slider {...settings} ref={carousel}>
        {videos.map((item) => (
          <div key={item.id}>
            <video poster={item.original} id={item.id} playsInline controls>
              <source src={item.video} type="video/mp4"></source>
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
}
