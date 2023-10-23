import React from 'react';

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className='section'>
      <div className='container policy-content'>
        <div>
      <h1 className='heading-secondary'>Privacy Policy</h1>
      <p>
        This privacy policy explains how we collect, use, and share your personal information when you visit our website or fill out our contact form.
      </p>
      </div>
      <div>
      <h2>
        Information we collect
      </h2>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address</li>
        <li>Dietary restrictions</li>
        <li>Feedback</li>
      </ul>
      </div>
      <div>
      <h2>
        How we use your information
      </h2>
      <ul>
        <li>Respond to your contact inquiries</li>
        <li>Process your reservations</li>
        <li>Send you promotional emails and newsletters (with your consent)</li>
        <li>Improve our website and services</li>
      </ul>
      </div>
      <h2>
        How we share your information
      </h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share your personal information with third-party service providers who help us operate our website and provide our services, such as email marketing providers and reservation systems. These third-party service providers are prohibited from using your personal information for any other purpose.
      </p>
      <h2>
        Your choices
      </h2>
      <ul>
        <li>You can opt out of receiving promotional emails and newsletters from us by clicking the unsubscribe link in any of our emails.</li>
        <li>You can request access to your personal information, or have it corrected or deleted, by contacting us at <Link to="mailto:theroyalparathabox@gmail.com">theroyalparathabox@gmail.com</Link>
        </li>
      </ul>
      <h2>
        Data security
      </h2>
      <p>
        We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security measures, including encryption and password protection.
      </p>
      <p>
        Changes to this privacy policy
      </p>
      <p>
        We may update this privacy policy from time to time. If we make any material changes to this privacy policy, we will post a notice on our website.
      </p>
      <h2>
        Contact us
      </h2>
      <p>
        If you have any questions about this privacy policy, please contact us at <Link to="mailto:theroyalparathabox@gmail.com">theroyalparathabox@gmail.com</Link>
      </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;