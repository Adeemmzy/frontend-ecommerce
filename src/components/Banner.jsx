import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
      <div className="steph z-0">
        <div className="steph img">
        <img src="/img/15-pro-max-3.jpg" alt="" />
        </div>
        <div className="like"></div>
        <div className="steph-container font-bold text-4xl uppercase text-[#fff]">
            <h2>Welcome to Emmzy Stores</h2>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <br />
            <button><Link to="" className="border-1  p-2 text-[#fff] rounded-md capitalize bg-[#502274] hover:text-[#502274]  hover:bg-white">See Products</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
