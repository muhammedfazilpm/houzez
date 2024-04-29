import React from 'react'
import './blogcard.css'
import { IoCalendarNumberOutline } from "react-icons/io5";

function Blogcard({props}) {
  return (
    <div className='blog_cards'>
      <img src={props?.image}/>
      <div className='blog_cards_text'>
      <h1>{props?.heading}</h1>
      <p>{props?.content}</p>
      </div>
      <div className='blog_cards_button'>
      <div className='blog_cards_button_1'><h1>{props.name}</h1> <IoCalendarNumberOutline className='ml-4 mr-2' /> <p>{props.year}</p></div>
      <div className='blog_cards_button_2'><button className='bg-blue-500 text-white p-2'>Read More</button></div>
      
      
      </div>
    </div>
  )
}

export default Blogcard
