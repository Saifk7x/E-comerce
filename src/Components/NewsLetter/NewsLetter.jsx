import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsLetter and stay updated </p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>


    </div>
  )
}

export default NewsLetter