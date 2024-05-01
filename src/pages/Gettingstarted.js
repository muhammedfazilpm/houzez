import React from 'react'
import './gettingstarted.css'
import Navbarwhite from '../components/Navbarwhite'
import Footer from '../components/Footer'
function Gettingstarted() {
  return (
    <>
    <div className='gettingstarted_card'>
   
    <Navbarwhite/>
    <div className='gettingstarted_card1'>
    <h1>How Much Is My House Worth?​</h1>
    <p>The Inquiry Form widget allows you to design unique forms to capture your leads. This form automatically connects with the integrated Houzez CRM and your email inbox to keep everything on track.</p>
    <div class="max-w-3xl mx-auto">
    <form action="#" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="inquiry-type">
                Inquiry Type
            </label>
            <select id="inquiry-type" name="inquiry-type" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option value="general">General Inquiry</option>
                <option value="support">Support Request</option>
            </select>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/2 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="first-name">
                    First Name
                </label>
                <input id="first-name" name="first-name" type="text" placeholder="First Name" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-1/2 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="last-name">
                    Last Name
                </label>
                <input id="last-name" name="last-name" type="text" placeholder="Last Name" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/2 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="email">
                    Email
                </label>
                <input id="email" name="email" type="email" placeholder="Email Address" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-1/2 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="mobile">
                    Mobile
                </label>
                <input id="mobile" name="mobile" type="tel" placeholder="Mobile Number" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/3 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="city">
                    City
                </label>
                <select id="city" name="city" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                </select>
            </div>
            <div class="w-1/3 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="area">
                    Area
                </label>
                <select id="area" name="area" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="area1">Area 1</option>
                    <option value="area2">Area 2</option>
                </select>
            </div>
            <div class="w-1/3 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="state">
                    State
                </label>
                <select id="state" name="state" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                </select>
            </div>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/2 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="country">
                    Country
                </label>
                <select id="country" name="country" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="country1">Country 1</option>
                    <option value="country2">Country 2</option>
                </select>
            </div>
            <div class="w-1/2 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="zip-code">
                    Zip Code
                </label>
                <input id="zip-code" name="zip-code" type="text" placeholder="Zip Code" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/3 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="property">
                    Property
                </label>
                <select id="property" name="property" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                </select>
            </div>
            <div class="w-1/3 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="max-price">
                    Max Price
                </label>
                <input id="max-price" name="max-price" type="number" placeholder="Max Price" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-1/3 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="min-price">
                    Min Price
                </label>
                <input id="min-price" name="min-price" type="number" placeholder="Min Price" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
        </div>

        <div class="mb-4 flex">
            <div class="w-1/2 mr-2">
                <label class="block text-gray-700 text-sm mb-2" for="beds">
                    Number of Beds
                </label>
                <input id="beds" name="beds" type="number" placeholder="Number of Beds" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-1/2 ml-2">
                <label class="block text-gray-700 text-sm mb-2" for="baths">
                    Number of Baths
                </label>
                <input id="baths" name="baths" type="number" placeholder="Number of Baths" class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
            </div>
        </div>

        <div class="mb-6">
            <label class="block text-gray-700 text-sm mb-2" for="message">
                Message
            </label>
            <textarea id="message" name="message" placeholder="Your message here..." class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
        </div>

        <div class="flex items-center justify-center">
            <button type="submit" class="bg-blue-500 w-full hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </div>

    </form>
</div>

    </div>
    </div>
<Footer/>

    </>
  )
}

export default Gettingstarted
