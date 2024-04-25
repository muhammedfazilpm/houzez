import React from "react";
import "./home.css";
import Navbarwhite from "../components/Navbarwhite";

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
      <div className="container mx-auto mt-3">
        <div className="section2_cards grid grid-cols-12 md:gap-x-[20px] gap-y-[50px] md:gap-y-[30px]">
          <div className="section2_card col-span-12 md:col-span-6 lg:col-span-3 text-center">
            <div className="section2_img_container flex justify-center">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-2.png" />
            </div>
            <h1>Get More Real Estate Leads</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card col-span-12 md:col-span-6 lg:col-span-3">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-3.png" />
            </div>
            <h1>Increase Your Conversion Rate</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card col-span-12 md:col-span-6 lg:col-span-3">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-4.png" />
            </div>
            <h1>Improve Your Brand Awareness</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              vulputate urna.
            </p>
          </div>
          <div className="section2_card col-span-12 md:col-span-6 lg:col-span-3">
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

      <div className="section_3"></div>
    </div>
  );
}

export default Home;
