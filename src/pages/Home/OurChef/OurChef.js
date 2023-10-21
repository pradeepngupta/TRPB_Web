import React from 'react'
import './OurChef.css'

import { BsFillStarFill } from "react-icons/bs";

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}
        <div className='container chef-info'>
        <BsFillStarFill color="#c3512f" /><h3 className="heading-tertiary">We have <span>an amazing team</span> for providing finest culinary experience with our food and services.</h3>
        <br/><br/>
        </div>
                
    </div>
  )
}

export default OurChef