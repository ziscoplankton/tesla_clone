import { useState } from 'react';
import Slider from 'react-slick';

import '../../css/shop/bestSellers.css'

import CarouselImageOne from '../../css/shop/images/Carousel1.jpeg'
import CarouselImageTwo from '../../css/shop/images/Carousel2.jpeg'
import CarouselImageThree from '../../css/shop/images/Carousel3.jpeg'
import CarouselImageFour from '../../css/shop/images/Carousel4.jpeg'
import CarouselImageFive from '../../css/shop/images/Carousel5.jpeg'
import CarouselImageSix from '../../css/shop/images/Carousel6.jpeg'

const imagesTitles = [
    'Wall Connector',
    'Model Y All-Weather Interior Liners',
    'Model 3 All-Weather Interior Liners',
    'Model 3/Y Key Fob',
    'Model S/3/Y Pet Liner',
    'Model 3/Y Center COnsole Trays'
]


function SamplePrevArrow(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-caret-left" viewBox="0 0 16 16">
      <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
    </svg>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-caret-right" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
      </svg>
    </div>
  );
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow className="test" />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };




export default function BestSellers() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handlePrev = () => {
      setCurrentSlide((currentSlide - 1 + imagesTitles.length) % imagesTitles.length);
    };
  
    const handleNext = () => {
      setCurrentSlide((currentSlide + 1) % imagesTitles.length);
    };
  
    return (
      <div id="ShopHeroBestSellers">
        <div id="ShopHeroBestSellersTitle">Best Sellers</div>
        <div id="ShopHeroCarousel">
            <Slider {...settings} >
                <div>
                <img src={CarouselImageOne} alt={imagesTitles[0]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[0]}</p>
                </div>
                <div>
                <img src={CarouselImageTwo} alt={imagesTitles[1]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[1]}</p>
                </div>
                <div>
                <img src={CarouselImageThree} alt={imagesTitles[2]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[2]}</p>
                </div>
                <div>
                <img src={CarouselImageFour} alt={imagesTitles[3]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[3]}</p>
                </div>
                <div>
                <img src={CarouselImageFive} alt={imagesTitles[4]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[4]}</p>
                </div>
                <div>
                <img src={CarouselImageSix} alt={imagesTitles[5]} id="ShopHeroCarouselIMG"/>
                <p id="ShopHeroBestSellersImgTitle">{imagesTitles[5]}</p>
                </div>
            </Slider>
        </div>
      </div>
    );
  }
  

