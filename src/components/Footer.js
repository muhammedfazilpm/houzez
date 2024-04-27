import React from 'react'
import './footer.css'
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='footer_body'>
<div className='footer_body_cards' >
<div className='footer_body_card'>
<img src='https://demo15.houzez.co/wp-content/uploads/2018/07/logo.png'/>
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
<TiSocialInstagram />
<SlSocialFacebook />

</div>
    </div>
  )
}

export default Footer
