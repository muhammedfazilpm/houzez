// Properties.js
import React from 'react';
import Navbar from '../components/Navbar'
import Carouselproperties from '../components/Courosalproperties'
import './properties.css'
import Propertiesmaincard from '../components/Propertiesmaincard'
import Footer from '../components/Footer';

const familyhome = [
  {
    heading: "Single Family Homes",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 1",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 2",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    headimage: "https://demo15.houzez.co/wp-content/uploads/2017/11/114.jpg",
    heading: "Family Home",
    description: "11 properties",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2500,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
];
const Apartments=[
  {
    heading: "Apartments",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/65-584x438.jpg",
      "	https://demo15.houzez.co/wp-content/uploads/2017/11/62-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/61-584x438.jpg"
    ],
    price: "4500/month",
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 1",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/23-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 2",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    headimage: "https://demo15.houzez.co/wp-content/uploads/2017/11/114.jpg",
    heading: "Appartment",
    description: "21 properties",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2500,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
]
const Villas=[
  {
    heading: "Villas",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/65-584x438.jpg",
      "	https://demo15.houzez.co/wp-content/uploads/2017/11/62-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/61-584x438.jpg"
    ],
    price: "4500/month",
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 1",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/23-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 2",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    headimage: "https://demo15.houzez.co/wp-content/uploads/2017/11/114.jpg",
    heading: "Villas",
    description: "21 properties",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2500,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
]
const Lofts=[
  {
    heading: "Lofts",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/65-584x438.jpg",
      "	https://demo15.houzez.co/wp-content/uploads/2017/11/62-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/61-584x438.jpg"
    ],
    price: "4500/month",
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 1",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/23-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy 2",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    headimage: "https://demo15.houzez.co/wp-content/uploads/2020/03/205-1.jpg",
    heading: "Lofts",
    description: "25 properties",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],
    price: 2400,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
  {
    images: [
      "https://demo15.houzez.co/wp-content/uploads/2017/11/22-584x438.jpg",
      "https://demo15.houzez.co/wp-content/uploads/2017/11/15-584x438.jpg",
    ],

    price: 2500,
    bed: 2,
    shover: 2,
    space: "1500 sqft",
    heading: "dummy",
  },
]

function Properties() {
  return (
    <div>
      <Navbar/>
      <div  className='properties1'>
        <h1>Featured Properties</h1>
        <Carouselproperties/>
      </div>
      <div className='properties2'>
        <Propertiesmaincard props={familyhome}/>
      </div>
      <div className='properties3'>
      <Propertiesmaincard props={Apartments}/>

      </div>
      <div className='properties2'>
      <Propertiesmaincard props={Villas}/>
    </div>
    <div className='properties3'>
    <Propertiesmaincard props={Lofts}/>

    </div>

      <Footer/>
    </div>
  )
}

export default Properties;
