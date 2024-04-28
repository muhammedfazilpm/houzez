import React from 'react';
import ImageSlider from './Imageslider';

function Propertiesmaincard() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  const familyhome = [
    {
      heading: 'Single Family Homes',
    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
    ,
    price:2400,
    bed:2,
    shover:2,
    space:'1500 sqft',
    heading:"dummy 1"
    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
      ,
      price:2400,
    bed:2,
    shover:2,
    space:'1500 sqft',
    heading:"dummy 2"

    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
      ,
    price:2400,
    bed:2,
    shover:2,
    space:'1500 sqft',
    heading:"dummy"

    },
    {
     
        headimage: "https://demo15.houzez.co/wp-content/uploads/2017/11/114.jpg",
      heading:"Family Home",
      description:"11 properties",
      heading:"dummy"

    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
   
      ,
      price:2400,
      bed:2,
      shover:2,
      space:'1500 sqft',
      heading:"dummy"

    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
      ,
    price:2400,
    bed:2,
    shover:2,
    space:'1500 sqft',
    heading:"dummy"

    
    },
    {
      images: ["https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg", "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg"]
    
      ,
    price:2500,
    bed:2,
    shover:2,
    space:'1500 sqft',
    heading:"dummy"

    }
  ]

  return (
    <div className='grid grid-cols-12 gap-4 mt-5 p-8'>
      {familyhome.map((data, i) => {
        if (i === 0) {
          return (
            <div className='col-span-12 text-3xl font-medium md:col-span-6 lg:col-span-3' key={i}>
              <h1>{data.heading}</h1>
            </div>
          );
        } else if (i === 4) {
          return (
            <div 
            className='col-span-12 md:col-span-6 lg:col-span-3 mt-3' 
            key={i} 
            style={{ 
              backgroundImage: `url(${data.headimage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              position: 'relative',
              minHeight:'200px' // Set position to relative to allow absolute positioning of overlay
            }}
          >
            {/* Overlay */}
            <div 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'rgba(1, 0.8, 0.3, 0.1)', // Adjust opacity as needed
              }}
            ></div>
            
            {/* Content */}
            <p className='text-white ml-2 font-medium text-lg' style={{color: '#ffffff'}}>{data.description}</p>
            <h1 className='text-white ml-2 font-medium text-2xl' style={{color: '#ffffff'}}>{data.heading}</h1>
          </div>
          
          
          
          )
        } else {
          return (
            <div className='col-span-12 md:col-span-6 lg:col-span-3' key={i}>
              <ImageSlider images={data.images} price={data.price} bed={data.bed} shover={data.shover} space={data.space} heading={data.heading}/>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Propertiesmaincard;
