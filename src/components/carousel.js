import React from 'react'
import { useState} from 'react';

const Carousel = ({ projects, cardStyle }) => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        setIndex(index === 0 ? projects.length - 1 : index - 1);
    }
    const handleNextClick = () => {
        setIndex(index === projects.length - 1 ? 0 : index + 1);
    };
  return (
    <div className='carousel__container'>

        <div className='carousel__wrapper'>
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img className='carousel__image' src={project.image} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                
                 <button className='carousel__prev' onClick={handlePrevClick}>
                 %lt;
             </button>
             <button className='carousel__next' onClick={handleNextClick}>
                 %gt;
             </button> 
             </div>  
            ))}
        </div>         
    </div>
  )
}

export default Carousel