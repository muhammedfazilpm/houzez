import React from "react";
import Navbar from "../components/Navbar";
import "./about.css";
import Footer from "../components/Footer";
import Abouttestimonial from "../components/Abouttestimonial";
const About = () => {
  const Testimonials=[{
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie at tortor egestas pulvinar.",
    image:"	https://demo15.houzez.co/wp-content/uploads/2018/07/Artboard-4team-400x400-150x150.jpg",
    name:"by Peter Walters House Seller"
  },{
    para:"Quisque molestie at tortor egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:"https://demo15.houzez.co/wp-content/uploads/2018/07/testimonial-150x150.jpg",
    name:"by Teresa Barnett House Seller"
  },
  {
    para:"Sed euismod id arcu non accumsan. Mauris ut magna id odio venenatis tincidunt nec eu ligula.",
    image:"https://demo15.houzez.co/wp-content/uploads/2018/07/testimonial-2-150x150.jpg",
    name:"by Kath & MikePeterson House Owners"
  }
]
  return (
    <div>
      <Navbar />
      <div className="about_1">
        <h1>About Us</h1>
      </div>
      <div className="about_2">
        <h1>About Indus Wayfair</h1>
        <div className="about_2_center">
          <div className="about_2_card">
            <p>
            Indus Wayfair is a visionary real estate company born from the merger of two
successful builders, Indus Gratia and Wayfair Developers. With over a decade of experience in
crafting luxurious villas and residential spaces, Indus Gratia brought a wealth of expertise and a
solid reputation to the partnership. Wayfair Developers, known for their innovative approach and
contemporary designs, complemented this with a modern edge. Together, we are committed to
creating homes that not only meet but exceed the expectations of our discerning clients. At
Indus Wayfair, we believe in building more than just houses; we build legacies."

            </p>
          </div>
          {/* <div className="about_2_card">
            <p>
              Houzez is also a WordPress-based property management system which
              allows you to own and maintain a real estate marketplace,
              coordinate your agents, accept submissions and offer membership
              packages.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="about_3">
        <div className="about_3_center">
          <h1>Meet Our Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <div className="about_3_cards">
            <div className="about_3_card">
              <img src="https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-1team.jpg" />
              <div className="overlay">
                <p>
                  Kathleen Grant Funder Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In malesuada, odio sit amet pharetra
                  vehicula, sapien leo egestas magna, vitae auctor diam magna
                  cursus arcu.
                </p>
              </div>
            </div>
            <div className="about_3_card">
              <img src="https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-4team.jpg" />
              <div className="overlay">
                <p>
                  Kathleen Grant Funder Kathleen Grant Funder Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. In malesuada, odio sit
                  amet pharetra vehicula, sapien leo egestas magna, vitae auctor
                  diam magna cursus arcu. Keith Bailey CEO Keith Bailey CEO
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada, odio sit amet pharetra vehicula, sapien leo egestas
                  magna, vitae auctor diam magna cursus arcu.
                </p>
              </div>
            </div>
            <div className="about_3_card">
              <img src="https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-2team.jpg" />
              <div className="overlay">
                <p>Text on Hover 3</p>
              </div>
            </div>
            <div className="about_3_card">
              <img src="https://demo15.houzez.co/wp-content/uploads/2020/03/Artboard-3team.jpg" />
              <div className="overlay">
                <p>Text on Hover 4</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="about_4">
        <div className="about_4_center">
          <h1>Read From Our Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <div className="about_4_cards">
            <div className="about_4_card">
              <div className="about_4_card_image">
                <img src="/kitchen.jpg" />
                <h2>Skills That You Can Learn In The Real Estate Market</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec...
                </p>
              </div>
            </div>
            <div className="about_4_card">
              <div className="about_4_card_image">
                <img src="/street 01.jpg" />
                <h2>Skills That You Can Learn In The Real Estate Market</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec...
                </p>
              </div>
            </div>
            <div className="about_4_card">
              <div className="about_4_card_image">
                <img src="/upper living room .jpg" />
                <h2>Skills That You Can Learn In The Real Estate Market</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec...
                </p>
              </div>
            </div>
            <div className="about_4_card">
              <div className="about_4_card_image">
                <img src="https://demo15.houzez.co/wp-content/uploads/2017/11/106-592x444.jpg" />
                <h2>Skills That You Can Learn In The Real Estate Market</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="section_5">
      <h1>
      Testimonials
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      <div className="section_5_center">
      {Testimonials.map(item => (
        <Abouttestimonial key={item.id} {...item}  />
      ))}
    </div>
      
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
