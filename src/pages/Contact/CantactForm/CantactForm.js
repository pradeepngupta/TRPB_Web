import React from 'react'
import './CantactForm.css'
import { Link } from "react-router-dom";

import bgImage from '../../../assets/kheer.jpg'

const CantactForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>

                <p>Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone. We're looking forward to hearing from you!</p>

                <img src={bgImage} alt="get in touch" />

                <p>In order to submit your personal information you must agree to and accept the terms of our <Link to="/privacypolicy">
                Privacy Policy
              </Link> .</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>First Name</label>
                            <input type="text" name='fname' />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <input type="text" name='lname' />
                        </div>
                    </div>
                    <div className='form-field name-email'>
                        <div>
                            <label>Phone Number</label>
                            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CantactForm