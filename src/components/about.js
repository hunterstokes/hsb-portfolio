import React from 'react'
import Image from 'next/image'
import { Imagecard } from './imagecard'

const travelImages = [
  {
    id: 1,
    name: "Singapore",
    image: '/images/stocktravel1.jpeg',
    description: "I went to singapore it was awesome",
  }, {
    id: 2,
    name: "Japan",
    image: '/images/stocktravel2.jpeg',
    description: null,
  }, {
    id: 3,
    name: "France",
    image: '/images/stocktravel3.jpeg',
    description: null,
  }
];

const cookingImages = [
  {
    id: 1,
    name: "Sushi",
    image: '/images/stockfood1.jpeg',
    description: "I have loved to cook since I was a young kid. I have also always found a passion for finding food anywhere I go. Anything that gets put in front of me I eat. When it comes to cooking or eating I love to experiment. I try just about anything that gets put in front of me. Even still One of my life long goals is to open my own restaurant based on my own experiences and working background to create a place where people come together for good food and friends.",
  }, {
    id: 2,
    name: "Sushi Roll",
    image: '/images/stockfood2.jpg',
    description: null,
    link: null,
  }, {
    id: 3,
    name: "Baked Salmon over rice",
    image: '/images/stockfood3.jpg',
    description: null,
    link: null,
  }, {
    id: 4,
    name: "Gourmet",
    image: '/images/stockfood4.jpg',
    description: '',
    link: null,
  }, {
    id: 5,
    name: "Breakfast",
    image: '/images/stockfood5.jpg',
    description: null,
    link: null,
  }
]


export const About = () => {


  return (
    <div id='about' className='about__container'>

      <div className='about__title'>
        <h1>
          About Me
        </h1>

      </div>
      <br></br>
      <div className='about___text'>
        <div className='about__column'>
          <h2 className='about__heading'>
            Cooking
          </h2>
          <hr className='about__line'></hr>
          <div className='about__filler'>
 
            <Imagecard imageArray={cookingImages} />
          </div>
        </div>
        <div className='about__column'>
          <h2 className='about__heading'>
            Travel
          </h2>
          <hr className='about__line'></hr>
          <div className='about__filler'>
            <Imagecard imageArray={travelImages} />
          </div>
        </div>

      </div>

    </div>
  )
}
