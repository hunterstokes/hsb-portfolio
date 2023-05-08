import React, { useState } from 'react'
import Image from 'next/image';


export const Imagecard = ({ imageArray, cardStyle }) => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        setIndex(index === 0 ? imageArray.length - 1 : index - 1);
    }
    const handleNextClick = () => {
        setIndex(index === imageArray.length - 1 ? 0 : index + 1);
    };


    return (
        <div className='imagecard__container'>
            <div className={`card ${cardStyle}`}>
                {imageArray.map((imageArray, i) => (
                    i === index && (
                        <div key={imageArray.id} className="image-card">
                            <button className='carousel__prev' onClick={handlePrevClick}>
                            &#8666;
                             </button>
                            <img className='carousel__image' src={imageArray.image} alt={imageArray.name} />
                            
                            <button className='carousel__next' onClick={handleNextClick}>
                            &#8667;
                            </button>
                            <h3>{imageArray.name}</h3>
                            <p>{imageArray.description}</p>
                            <a href='{imageArray.link}'>{imageArray.link}</a>

                        </div>
                    )

                ))}
            </div>
            

        </div>
    )
}
