import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/Paratha1.jpg";
import MenuInfo from "./MenuInfo/MenuInfo";
import MenuItems from "./MenuItems/MenuItems";

const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuInfo/>
      <MenuItems/>
    </div>
  );
};

export default Menu;
