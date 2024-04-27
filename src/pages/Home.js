import React from "react";
import "./home.css";
import Navbarwhite from "../components/Navbarwhite";
import { HiArrowSmLeft } from "react-icons/hi";
import Carousel from "../components/Courosal";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <div className="firstimage">
        <Navbarwhite />
        <div className="center-div  text-white ">
          <h3>How Much Is My House Worth?​</h3>
          <p>
            Houzez was built to get more real estate leads, increase your
            conversions rate, schedule more viewings for your properties and
            ultimately earn more commissions
          </p>
          <button className="bg-blue-600 pr-6 pl-6 p-2 mt-8">
            Get Started
          </button>
        </div>
      </div>
      <div></div>
      <div className="section2">
        <h1>Which Are Your Benefits?</h1>
        <p>
          This real estate website builder is equipped with every tool you’d
          need to deliver a product that
          <br /> any realtor or real estate agency would be delighted to have
        </p>
      </div>
      <div>
        <div className="section2_cards">
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-2.png" />
            </div>
            <h1>Get More Real Estate Leads</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-3.png" />
            </div>
            <h1>Increase Your Conversion Rate</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-4.png" />
            </div>
            <h1>Improve Your Brand Awareness</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-1-1.png" />
            </div>
            <h1>Support Your Business Goals</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
        </div>
      </div>

      <div className="section_3">
        <div className="section_3_centerdiv">
          <h1>We Help You To Sell Your Home</h1>
          <p>
            After years of business, our responsibility and attention to the
            customer have never been so effective. Find out what people say
            about us.
          </p>
          <div className="section_3_cards">
            <div className="section_3_card">
              <HiArrowSmLeft />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                molestie at tortor egestas pulvinar.
              </p>
              <div className="section_3_innercard">
                <img
                  className="section_3_innercard_image"
                  src="https://demo15.houzez.co/wp-content/uploads/2018/07/Artboard-4team-400x400-150x150.jpg"
                />
                <p>
                  by<b>Peter Walters</b>
                  <br />
                  House Seller
                </p>
              </div>
            </div>
            <div className="section_3_card">
              <HiArrowSmLeft />
              <p>
                Quisque molestie at tortor egestas pulvinar. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <div className="section_3_innercard">
                <img
                  className="section_3_innercard_image"
                  src="https://demo15.houzez.co/wp-content/uploads/2018/07/testimonial-150x150.jpg"
                />
                <p>
                  by<b>Teresa Barnett</b>
                  <br />
                  House Seller
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_4">
      
      <div className="section_4_container">
      <h1>Would You Like To An Expert ?</h1>
      <p>Houzez as features that your client might not even have dreamt about</p>
      <button className="bg-blue-500 pl-3 pr-3 p-2 mt-2 ">Speak to an Expert</button>
      </div>  
      </div>
      <div>
     </div>
     <div className="section_5">
     <h1>
     Discover Our Properties​ 
     </h1>
     <p>Find out the finest selection of carefully selected first-class and exclusive properties available on the market.</p>
     
     <Carousel/>
  <button className="bg-blue-500 text-white p-4 hover:bg-blue-400 mt-4">Check our Properties</button>
     </div>
     <div className="section_6">
     <h1>Real Estate Success Stories</h1>
     <p>Read some of our selling stories to see how our expert agents help you prepare your home for sale, set a price, determine a selling strategy and negotiate with buyers</p>
     <div className="section_6_cards">
     <div className="section_6_card">
     <img src="https://demo15.houzez.co/wp-content/uploads/2017/11/12-1.jpg"/>
    <h2>Learn The Truth About Real Estate Industry</h2>
    <p>Lorem ipsum dolor sit amet elit, conse tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
     </div>
     <div className="section_6_card"> <img src="https://demo15.houzez.co/wp-content/uploads/2017/11/12-1.jpg"/>
     <h2>Quick Tips About Business Development</h2>
     <p>Lorem ipsum dolor sit amet elit, conse tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
     </div>
     </div>
     <button className="bg-blue-500 mt-4 p-3 text-white mb-5">Find More Stories</button>

     </div>

     <Footer/>
    </div>
  );
}

export default Home;
