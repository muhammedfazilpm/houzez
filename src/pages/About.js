import React from 'react';
import Navbar from '../components/Navbar';
import './about.css';
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about_1'>
        <h1>About Us</h1>
      </div>  
      <div className='about_2'>
        <h1>Your Vision Unrestricted</h1>
        <div className='about_2_center'>
          <div className='about_2_card'>
            <p>Houzez is a premium WordPress theme for real estate agents and agencies where modern aesthetics are combined with a tasteful simplicity and where the ease of use is achieved without compromise in your ability to customize the design.</p>
          </div>
          <div className='about_2_card'>
            <p>Houzez is also a WordPress-based property management system which allows you to own and maintain a real estate marketplace, coordinate your agents, accept submissions and offer membership packages.</p>
          </div>
        </div>
      </div>
      <div className='about_3'>
        <div className='about_3_center'>
          <h1>Meet Our Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <div className='about_3_cards'>
            <div className='about_3_card'>
              <img src='https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-1team.jpg'/>
              <div className='overlay'>
                <p>Kathleen Grant
                Funder
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.</p>
              </div>
            </div>
            <div className='about_3_card'>
              <img src='https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-4team.jpg'/>
              <div className='overlay'>
                <p>
                Kathleen Grant
                Funder
                Kathleen Grant
                Funder
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.
                
                Keith Bailey
                CEO
                Keith Bailey
                CEO
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.</p>
              </div>
            </div>
            <div className='about_3_card'>
              <img src='https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-2team.jpg'/>
              <div className='overlay'>
                <p>Text on Hover 3</p>
              </div>
            </div>
            <div className='about_3_card'>
              <img src='https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-3team.jpg'/>
              <div className='overlay'>
                <p>Text on Hover 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about_4'>
<div className='about_4_center'>
<h1 >
Read From Our Blog
</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
<div className='about_4_cards'>
<div className='about_4_card'>
<div className='about_4_card_image'>
<img src='https://demo15.houzez.co/wp-content/uploads/2017/11/04-1-592x444.jpg'/>
<h2>Skills That You Can Learn In The Real Estate Market</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>

</div>



</div>
<div className='about_4_card'>
<div className='about_4_card_image'>
<img src='https://demo15.houzez.co/wp-content/uploads/2017/11/06-1-592x444.jpg'/>
<h2>Skills That You Can Learn In The Real Estate Market</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>



</div>

</div>
<div className='about_4_card'>
<div className='about_4_card_image'>
<img src='https://demo15.houzez.co/wp-content/uploads/2017/11/07-1-592x444.jpg'/>
<h2>Skills That You Can Learn In The Real Estate Market</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>



</div>

</div>
<div className='about_4_card'>
<div className='about_4_card_image'>
<img src='https://demo15.houzez.co/wp-content/uploads/2017/11/106-592x444.jpg'/>
<h2>Skills That You Can Learn In The Real Estate Market</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>



</div>
</div>

</div>



</div>


      </div>
      <Footer/>
    </div>
  );
}

export default About;
