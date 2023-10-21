import React, { useState } from "react";

import "./AmazingMeal.css";

import image1 from "../../../assets/Paratha1.jpg";
import image2 from "../../../assets/Paratha2.jpg";
import image3 from "../../../assets/Paratha3.jpg";
import image4 from "../../../assets/Paratha4.jpg";
import image5 from "../../../assets/Paratha5.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing <span>Royal Paratha </span> <span className="ampersand">&#38;</span>
              <br />
              <span>
                Combos / Meals
              </span>
            </h2>

            <h3>We hope to see you soon!</h3>
            <br />
              <br />
            <h4>
             At The Royal Paratha Box Restaurant, we take immense pride in crafting our 9-inch Royal Size Parathas, each bite a delectable experience.
             One will indulge in a culinary journey that's all about pure happiness and delightful flavors.
             
              <br />
              <br />
              Our side dishes are a testament to the love and passion we infuse into evvery dish, ensuring they are as tasty as they are delicious.
             
            </h4>
            <br />
              <br />
            <blockquote>
            Join us for a dining expeirence like no other!.
            </blockquote>
          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <h4>
                We meticulously select only the finest and freshnest ingredients to craft all our culinary creations.
              </h4>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>reservations</span>
                </h3>
              </div>

              <h4>
                To secure your exclusive dining experience, we invite you to contact us for reservations.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
