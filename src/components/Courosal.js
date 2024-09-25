import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './courosal.css';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate=useNavigate()
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
              <img style={{filter:'brightness(50%)',minHeight:"320px"}} className="w-full" src="/Slider 1.jpg" alt="img" />
              <div style={{display:'flex',justifyContent:'center',flexDirection:"column",color:'white'}} className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white"><h2 style={{fontSize:"25px"}}>Redefining Luxury Living</h2><h3>Explore our exquisite villas that blend modern elegance with
              timeless charm</h3>  <button onClick={()=>navigate("/properties")} className="bg-blue-500 text-white p-2 hover:bg-blue-400 mt-10">Discover your Dream home</button>
              </h3>
            </div>
            </div>
            <div>
              <img style={{filter:'brightness(50%)',minHeight:"320px"}} className="w-full" src="/Slider 2.jpg" alt="img" />
              <div style={{display:'flex',justifyContent:'center',flexDirection:"column",color:'white'}} className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white"><h2 style={{fontSize:"25px"}}>A Legacy of Trust</h2><h3>Building homes for a decade with precision, passion, and a
              commitment to quality.</h3>  <button onClick={()=>navigate("/about")}  className="bg-blue-500 text-white p-2 hover:bg-blue-400 mt-10">Learn About Us</button>
              </h3>
            </div>
            </div>
            <div>
              <img style={{filter:'brightness(50%)',minHeight:"320px"}} className="w-full" src="/Slider 3.jpg" alt="img" />
              <div style={{display:'flex',justifyContent:'center',flexDirection:"column",color:'white'}} className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h3 className="text-white"><h2 style={{fontSize:"25px"}}>Experience the Future of Living</h2><h3>Ongoing projects that offer innovative designs and unparalleled
              comfort.</h3>  <button onClick={()=>navigate("/properties")} className="bg-blue-500 text-white p-2 hover:bg-blue-400 mt-10">View Our Projects</button>
              </h3>
            </div>
            </div>
            {/* <div>
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
            </div> */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
