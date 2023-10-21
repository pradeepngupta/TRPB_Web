import React from 'react'
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to THE ROYAL PARATHA BOX restaurant
            </h1>

            <p className='text-white'>The best paratha restaurant available in Electronic City, Bengaluru</p>

            <p className='text-white'>
                Book online or call <span></span>
                    <Link to="tel:+916366579691" className='special-word'>
                    (+91)6366-579-691
                    </Link>  
            </p>
        </div>
    </div>
  )
}

export default Hero