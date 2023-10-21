import React from 'react'
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to <br />THE ROYAL PARATHA BOX
            </h1>
            <h3 className='heading-secondary text-white'> Flavours from Home | Ghar ka Swad </h3>
            <br></br>
            <p className='text-white'>The best paratha restaurant available in Electronic City, Bengaluru</p>

            <p className='text-white'>
                Book online or call <span></span>
                    <Link to="tel:+916366579691" className='text-white'>
                    (+91)6366-579-691
                    </Link>  
            </p>
        </div>
    </div>
  )
}

export default Hero