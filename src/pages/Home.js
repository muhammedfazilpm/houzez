import React from "react";
import "./home.css";
import Navbarwhite from "../components/Navbarwhite";
import Navbar from "../components/Navbar";
import { HiArrowSmLeft } from "react-icons/hi";
import Carousel from "../components/Courosal";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <div className="firstimage">
        <Navbar />
        <div className="center-div  text-white ">
        <div className="center-div-content">
          <h3>Our Journey​</h3>
          <p style={{letterSpacing:"1px",lineHeight:'1.2'}}>
          Indus Wayfair is the result of the strategic merger between Indus Gratia and Wayfair
Developers, two pioneers in the real estate industry. Indus Gratia, known for its luxurious villa
constructions, has been a trusted name for over a decade, with successful projects such as
Hyacinth, Village Garden, and Breezy Meadows. Wayfair Developers along with Cloud One, Sky
Villas, Granday Mansion, directors of Wayfair developers where engaged in commercial
construction for decades brought a unique blend of modern design and functionality to the table,
further enhancing the quality and diversity of our offerings. Together, as Indus Wayfair, we continue to uphold the legacy of excellence, delivering homes that resonate with our clients’
aspirations.

          </p>
          </div>
          {/* <button className="bg-blue-600 pr-6 pl-6 p-2 mt-8">
            Get Started
          </button> */}
        </div>
      </div>
      <div></div>
      <div className="section2">
        <h1>Why Choose Us?</h1>
        {/* <p>
          This real estate website builder is equipped with every tool you’d
          need to deliver a product that
          <br /> any realtor or real estate agency would be delighted to have
        </p> */}
      </div>
      <div>
        <div className="section2_cards">
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-2.png" />
            </div>
            <h1>Craftsmanship</h1>
            <p>
            Every detail is meticulously designed and executed to perfection. 
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-3.png" />
            </div>
            <h1>Innovation</h1>
            <p>
            We integrate cutting-edge technology to create future-ready homes
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-4.png" />
            </div>
            <h1>Sustainability</h1>
            <p>
            Our commitment to eco-friendly practices ensures a greener tomorrow
            </p>
          </div>
          <div className="section2_card">
            <div className="section2_img_container">
              <img src="https://demo15.houzez.co/wp-content/uploads/2018/07/Asset-1-1.png" />
            </div>
            <h1>Customer-Centric</h1>
            <p>
            We build relationships that last, just like our homes
            </p>
          </div>
        </div>
      </div>

      <div className="section_3">
        <div className="section_3_centerdiv">
          <h1>Our Clients</h1>
          <p>
            After years of business, our responsibility and attention to the
            customer have never been so effective. Find out what people say
            about us.
          </p>
          <div className="section_3_cards">
            <div className="section_3_card">
              <HiArrowSmLeft />
              <p>
              Indus Wayfair has truly redefined luxury living. Their attention to detail and
              commitment to quality is unmatched
              </p>
              <div className="section_3_innercard">
                <img
                  className="section_3_innercard_image"
                  src="https://demo15.houzez.co/wp-content/uploads/2018/07/Artboard-4team-400x400-150x150.jpg"
                />
                <p>
                  <b>Ravi Menon</b>
                  <br />
                  Business Consultant
                </p>
              </div>
            </div>
            <div className="section_3_card">
              <HiArrowSmLeft />
              <p>
              From start to finish, the experience with Indus Wayfair was seamless.
              They understood our needs and delivered beyond our expectations
              </p>
              <div className="section_3_innercard">
                <img
                  className="section_3_innercard_image"
                  src="https://demo15.houzez.co/wp-content/uploads/2018/07/testimonial-150x150.jpg"
                />
                <p>
                  <b>Priya Radhakrishnan</b>
                  <br />
                  IT Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_4">
      
      <div className="section_4_container">
      <h1>A Legacy Built on Trust</h1>
      <p>Indus Wayfair stands as a testament to the successful merger of two industry giants,
Indus Gratia and Wayfair Developers. Together, we continue to build homes that inspire,
innovate, and elevate the standard of living.
</p>
      <button onClick={()=>navigate("/about")} className="bg-blue-500 pl-3 pr-3 p-2 mt-2 ">Learn More About Us</button>
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
  <button onClick={()=>navigate("/properties")} className="bg-blue-500 text-white p-4 hover:bg-blue-400 mt-4">Check our Properties</button>
     </div>
     
     {/* <div style={{padding:"20px",margin:"20px",textAlign:"center",display:"flex",justifyContent:"center"}}  >
        <div style={{maxWidth:"800px"}}  >
          <h3  style={{color:"black",fontWeight:"350",fontSize:"60px"}}>Our Journey​</h3>
          <p style={{letterSpacing:"1px",lineHeight:'1.2',color:"black",fontSize:"20px"}}>
          Indus Wayfair is the result of the strategic merger between Indus Gratia and Wayfair
Developers, two pioneers in the real estate industry. Indus Gratia, known for its luxurious villa
constructions, has been a trusted name for over a decade, with successful projects such as
Hyacinth, Village Garden, and Breezy Meadows. Wayfair Developers along with Cloud One, Sky
Villas, Granday Mansion, directors of Wayfair developers where engaged in commercial
construction for decades brought a unique blend of modern design and functionality to the table,
further enhancing the quality and diversity of our offerings. Together, as Indus Wayfair, we continue to uphold the legacy of excellence, delivering homes that resonate with our clients’
aspirations.

          </p>
          </div>
          <button className="bg-blue-600 pr-6 pl-6 p-2 mt-8">
            Get Started
          </button>
        </div> */}


     <div className="section_6">
     <h1>Explore Our Properties</h1>
     {/* <p>Read some of our selling stories to see how our expert agents help you prepare your home for sale, set a price, determine a selling strategy and negotiate with buyers</p> */}
     <div className="section_6_cards">
     <div style={{display:"flex",alignItems:'center',justifyContent:"center",flexDirection:"column"}} className="section_6_card">
     <img  src="/Explore properties Granday.jpg"/>
    <h2>Granday Mansion, Thevara</h2>
    {/* <p>Lorem ipsum dolor sit amet elit, conse tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
     </div>
     <div style={{display:"flex",alignItems:'center',justifyContent:"center",flexDirection:"column"}} className="section_6_card">
      
      <img src="/Explore properties Aureole.jpg"/>
     <h2>Aureole, Irumpanam</h2>
     {/* <p>Lorem ipsum dolor sit amet elit, conse tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
     </div>
     </div>
     <button onClick={()=>navigate("/properties")} className="bg-blue-500 mt-4 p-3 text-white mb-5">View All Properties</button>

     </div>

     <Footer/>
    </div>
  );
}

export default Home;
