import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import ImageSlider from './Imageslider';


const Carouselproperties = () => {
   
   const Properties=[{
    image:'https://demo15.houzez.co/wp-content/uploads/2017/11/71-592x444.jpg',
    rate:'4500/mo',
    heading:'Modern Apartment On The Bay',
    bed:'1',
    shover:'2'
  },
{
    image:'	https://demo15.houzez.co/wp-content/uploads/2017/11/23-592x444.jpg',
    rate:'3700/mo',
    heading:'Modern Apartment On The Bay',
    bed:'2',
    shover:'1'
}

]
  const responsiveOptions = {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    768: {
      items: 5,
    },
  };
  
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row title mb-8">
          
        </div>
      </div>
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <OwlCarousel  
            items={1} 
            smItems={2} 
            mdItems={3} 
            className="owl-theme corousalbigcard" 
            loop 
            nav 
            margin={8} 
            responsive={responsiveOptions}
            autoplay
            autoplayTimeout={3000} 
          >

          {Properties.map(item => (
            <div key={item.id} className='courosalcard relative'>
              <img className="w-full" src={item.image} alt="img" />
              <div className="absolute bottom-0 left-0 p-1 bg-black bg-opacity-50">
                <h3 className="text-white text-sm font-bold">{item.rate}</h3>
              </div>
              <div className="mt-2 ml-20">
                <p>{item.heading}</p>
                <div className='flex  justify-center items-center'>
                <MdOutlineBed /> {item.bed}
                <MdOutlineShower className='ml-2' />
                {item.shover}
                </div>
               
              </div>
            </div>
          ))}
          
          
           
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carouselproperties;
