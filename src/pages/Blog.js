import React from 'react'
import Navbar from '../components/Navbar'
import Blogcard from '../components/Blogcard'
import Footer from '../components/Footer'
import './blog.css'

function Blog() {
  const Blogcontent=[{
    image:'https://demo15.houzez.co/wp-content/uploads/2017/11/04-1-1536x1024.jpg',
    heading:'Skills That You Can Learn In The Real Estate Market',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et ornare neque...',
    name:"mike",
    year:"8 years ago"
  
  },{
    image:'https://demo15.houzez.co/wp-content/uploads/2017/11/06-1-1536x1024.jpg',
    heading:'Learn The Truth About Real Estate Industry',
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et ornare neque...",
    name:"mike",
    year:"8 years ago"

  },
  {
    image:'https://demo15.houzez.co/wp-content/uploads/2017/11/04-1-1536x1024.jpg',
    heading:'Skills That You Can Learn In The Real Estate Market',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue. Duis mattis laoreet neque, et ornare neque...',
    name:"mike",
    year:"8 years ago"
  
  }]
  return (
    <div>
    <Navbar/>
      <div className='blog_body'>
      <div className='blog_card1'>
      {Blogcontent.map(item => (
        <Blogcard key={item.id} props={item} />
      ))}
    </div>
    
<div className='blog_card2'>
<div className='blog_card2_sec1'>
<h1>Topics</h1>

<ul>
<li>> Appartment</li>
<li>> Family Home</li>
<li>> Villa</li>
<li>> Loft</li>

</ul>


</div>
</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Blog
