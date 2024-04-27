import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './courosal.css';

const Carousel = () => {
  const responsiveOptions = {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    768: {
      items: 3,
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
            <div className='courosalcard'>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/71-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/103-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/22-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/15-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/14-1-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/108-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/11-1-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-gray-300 text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
            <div>
              <img className="w-full" src="https://demo15.houzez.co/wp-content/uploads/2017/11/11-1-592x444.jpg" alt="img" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">Your Text Here</h3>
            </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
