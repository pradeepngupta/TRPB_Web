import React from 'react'
import './Gallery.css'

import imageItem1 from "../../../assets/Paratha1.jpg";
import imageItem2 from "../../../assets/Paratha4.jpg";
import imageItem3 from "../../../assets/Paratha3.jpg";
import imageItem4 from "../../../assets/Paratha2.jpg";
import imageItem5 from "../../../assets/Lassi.jpg";
import imageItem6 from "../../../assets/Paratha5.jpg";
import imageItem7 from "../../../assets/chef.jpg";
import imageItem8 from "../../../assets/cake.jpg";
import imageItem9 from "../../../assets/coffee.jpg";
import imageItem10 from "../../../assets/burger.jpg";

const Gallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img src={imageItem1} className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-2'>
            <img src={imageItem2}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-3'>
            <img src={imageItem3}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-4'>
            <img src={imageItem4}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-5'>
            <img src={imageItem5}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-6'>
            <img src={imageItem6}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-7'>
            <img src={imageItem7}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-8'>
            <img src={imageItem8}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-9'>
            <img src={imageItem9}  className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-10'>
            <img src={imageItem10}  className='gallery__img' />
        </figure>
    </div>
  )
}

export default Gallery