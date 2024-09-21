import React from 'react'
import Navbarbarwhite from '../components/Navbarwhite'
import Footer from '../components/Footer'
import './contactus.css'
import Navbar from '../components/Navbar'
function Contactus() {
  return (
    <>
    <div className='contactus_bg'>
    <Navbar/>
    <div className='contactus_center'>
    <h1 className='text-gray-200 mb-5 mt-5 text-4xl font-bold'>Get in Touch</h1>
    <p className='text-gray-200 text-l'> Whether you're interested in our properties or have any queries, we're here to help.
Reach out to us through any of the following methods, and a member of our team will be in
touch with you shortly.</p>
    </div>
    <div className='contact_form_frame'>
    <div>
    <div class="max-w-3xl w-full mx-auto p-10 mb-28 bg-white">
    <form class="mt-8  space-y-6">
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" placeholder='Enter your name' name="first_name" id="first_name" autocomplete="given-name" class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
        <div class="w-1/2">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" placeholder='Enter your last name' name="last_name" id="last_name" autocomplete="family-name" class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" placeholder='Enter your mail' name="email" id="email" autocomplete="email" class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      </div>
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" placeholder='Enter your phone' name="phone" id="phone" autocomplete="tel" class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
        <div class="w-1/2">
          <label for="zip" class="block text-sm font-medium text-gray-700">ZIP CODE</label>
          <input type="text" placeholder='Enter your zip' name="zip" id="zip" autocomplete="postal-code" class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
      </div>
      <div>
        <label for="message" class="block  text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" placeholder='Mssage' name="message" rows="4" class="mt-1 p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
      </div>
      <div>
        <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Us a Message</button>
      </div>
    </form>
  </div>
  
    
    </div>
    <div>
    <div  className='contactus_form_2'>  
    <h1 className='mb-5'>For inquiries contact:  </h1>
    <h1>Amy Miller</h1>
    <p className='mb-5'>Public Relations Manager
    774 NE 84th St Miami, FL 33879
    amy.miller@houzez.com</p>
    <h1>Kyle Parker</h1>
    <p >Public Relations Associated
    774 NE 84th St Miami, FL 33879
    kyle.parker@houzez.com</p>
    
    </div>
 
    </div>
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contactus
