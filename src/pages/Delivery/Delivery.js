import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/Paratha5.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';

const Delivery = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["eat at ", <span>Home</span>]}
        text='Delivery avialable <br> WEEKDAYS (MON-THU) 9:30 am - 3:30pm, 6:00pm - 10:00pm <br>  WEEKENDS (FRI - SUN)  9:30 am - 3:30pm, 6:00pm - 11:00pm'
      />
      <DeliveryInfo />
    </div>
  )
}

export default Delivery