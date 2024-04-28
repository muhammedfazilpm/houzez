import React from 'react'
import './abouttestimonial.css'
import { MdCropFree } from "react-icons/md";

function Abouttestimonial(props) {
  return (
    <div className='about_tesimonial_cards'>
    <MdCropFree />
    <p>{props.para}</p>
    <div className='about_tesimonial_card' >
    <img src={props.image}/>
    <h2>{props.name}
   </h2>
    </div>
    </div>
  )
}

export default Abouttestimonial
