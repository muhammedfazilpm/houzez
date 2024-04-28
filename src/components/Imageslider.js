import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineShower } from 'react-icons/md';
import { MdOutlineKingBed } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const ImageSlider = ({ images,price,shover,bed,space,heading }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 text-3xl text-white" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 text-3xl text-white" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='w-full min-h-[300px] bg-white p-4 mt-2  shadow-2xl'>
      <Slider className='-mx-2' {...settings}> {/* Adjust the mx value to reduce the gap ce*/}
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-full" src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
      <div>
        <h4>{heading}</h4>
        <div className='flex justify-center items-center'>
          <p>₹{price}</p>
          <MdOutlineKingBed className='ml-4' />{bed}
          <MdOutlineShower className='ml-4' />{shover}
          <TbRulerMeasure className='ml-4' />{space}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
