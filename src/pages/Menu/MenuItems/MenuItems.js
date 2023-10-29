import React from 'react'
import './MenuItems.css'

import menuPage1 from '../../../assets/Menu/MENU-Classic-Royal-Paratha.jpg';
import menuPage2 from '../../../assets/Menu/MENU-Fav-Royal-Paratha.jpg';
import menuPage3 from '../../../assets/Menu/MENU-Cheese-Exotic-Royal-Paratha.jpg';
import menuPage4 from '../../../assets/Menu/MENU-Royal-Paratha-Combo.jpg';
import menuPage5 from '../../../assets/Menu/MENU-Paratha-Accompaniments.jpg';
import menuPage6 from '../../../assets/Menu/MENU-TRPB-Desserts.jpg';
import menuPage7 from '../../../assets/Menu/MENU-TRPB-Beverages.jpg';

const MenuItems = () => {
    return (
        <div>
            <figure>
                <img src={menuPage1} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage2} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage3} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage4} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage5} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage6} className='menu__img'></img>
            </figure>
            <figure>
                <img src={menuPage7} className='menu__img'></img>
            </figure>
        </div>
    );
}

export default MenuItems;