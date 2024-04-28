import React from 'react'
import Navbar from '../components/Navbar'
import Carouselproperties from '../components/Courosalproperties'
import './properties.css'
function Properties() {
  return (
    <div>
    <Navbar/>
    <div  className='properties1'>
    <h1>Featured Properties</h1>
    <Carouselproperties/>

    </div>
    </div>
  )
}

export default Properties
