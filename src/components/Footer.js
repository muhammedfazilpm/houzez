import React from 'react'
import './footer.css'
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='footer_body'>
<div className='footer_body_cards' >
<div className='footer_body_card'>
<img style={{width:'100px'}} src='/INDUS WAYFAIR Logo_page-0001.jpg'/>
</div>
<div className='footer_body_card'>
  Contact Us
 774 NE 84th St Miami, FL 33879
 (800) 123 6543
 email@houzez.co</div>
<div className='footer_body_card'>Company
Home
Terms and Conditions
Privacy</div>



</div>
<div className='footer_bottom'>
{/* <TiSocialInstagram size={30} />
<SlSocialFacebook size={30}/> */}

</div>
    </div>
  )
}

export default Footer
