import React from 'react'
import './NewsLetter.css'
const NewLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay up to date</p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter