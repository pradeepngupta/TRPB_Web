import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

import './DeliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            Order Using <span>Whatsapp / Call</span>
                        </h3>
                    </div>

                    <p>You can place an order by Whatsapp / Call to our phone number: </p>
                    <Link to="tel:+916366579691">
              (+91) 6366 579 691
            </Link> 
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                           additional <span>information</span>
                        </h3>
                    </div>

                    <p>We do delivery using third party vendors, Actual delivery cost may / may not apply. Please check while placing the Order. You can customize your orders too !!!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfo