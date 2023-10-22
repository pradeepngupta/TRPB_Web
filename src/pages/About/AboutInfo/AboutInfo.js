import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              Thinking on the Cloud Kitchen Concepts, Our journey of The Royal Paratha Box started.
              But our passion for delivering an exceptional dining experience led us to open our doors to guests.
              Rooted in the rich culinary tradition of North India, particularly Punjab and Haryana, We celebrate the art of crafting the finest Parathas.
              Beyond our delicious offerings, we pride ourselves on our warm hospitality and top-notch service to ensure your visit is truly special.

              
            </p>

            <blockquote>
            COMFORTS. CLASSICS. CURIOSITIES
            </blockquote>

            <p>
            Come and discover why "The Royal Paratha Box" holds a special place in the hearts of locals and visitors alike, as we continue to redefine the essence of Parathas in the heart of Electronic City, Bengaluru.

            Come take a bite out of Electronic City at The Royal Paratha Box -- we'll see you soon!
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE <span>TO DINE</span> WITH YOUR FAMILY AND FRIENDS
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Located at Hulimanagala Road in Electronic City Phase 1, Bengaluru, this casual yet polished <span className="special-word">family-style North Indian Restaurant</span> features 8 indoor dining seats, and 8 seats outdoors on the semi-covered patio.
            </p>

            <blockquote>
              BRUNCH | LUNCH | DINNER | DESSERTS
            </blockquote>

            <p>
            Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide TRPB's menu of <span className="special-word">house-made Royal Parathas and Desserts</span>.
            We always welcome walk-ins. Guests like Royal Paratha in their Brunch / Lunch / Snacks / Dinner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
