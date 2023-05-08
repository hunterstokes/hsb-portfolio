import React from 'react'
import Image from 'next/image'
import closeRoast from '../assets/closeroast.jpg'
import {Imagecard} from './imagecard'


const projects = [
    {
       id: 1,
       name: "Close Roast",
       description: "A coffee shop finding app built on the Yelp API",
       link: "https://github.com/cup-o-coders",
       image: 'https://res.cloudinary.com/huntersattachments/image/upload/v1542072396/closeroast.jpg' 
    },
    {
        id: 2,
        name: "Tutti.space",
        description: "The 'ABnB' for musical spaces",
        link: "https://www.tutti.space/",
        image: 'https://res.cloudinary.com/huntersattachments/image/upload/v1682873172/tuttiwebsite.png'
    },
    {
        id: 3,
        name: "Piedmont Grocery",
        description: "Modern Redesign of their Website",
        link: "piedmontgrocery.com",
        image: '/images/underconstruction.jpeg'
    }
]

export const Projects = () => {
  return (
    <div id='projects' className='projects__container'>
        <h1 className='skills__title'>Projects</h1>
        <hr className='projects__line'></hr>
        <div className='projects__card'>
        <Imagecard className='project__imagecard' imageArray={projects} />
        </div>
    </div>
  )
}
