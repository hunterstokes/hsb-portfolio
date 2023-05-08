import React from 'react'

export const Skills = () => {
    return (
        <div className='skills__container'>
            <a id='skills' ></a>
            <h1 className='skills__title'>Skills</h1>
            <hr className='skills__line'></hr>
            <ul className='skills__list'>
                <li className='skill__item'>
                    <img className='whiteSVG' src='/brandlogos/javascript.svg' />
                    <h3>Javascript</h3>
                </li>
                <li className='skill__item'>
                    <img src='brandlogos/css3.svg' />
                    <h3>CSS3</h3>
                </li>

                <li className='skill__item'>
                    <img src='brandlogos/html5.svg' />
                    <h3>HTML5</h3>
                </li>
                <li className='skill__item'>
                    <img src='brandlogos/postgresql.svg' />
                    <h3>postgreSQL</h3>
                </li>
                <li className='skill__item'>
                    <img src='brandlogos/git.svg' />
                    <h3>Git</h3>
                </li>
                <li className='skill__item'>
                    <img src='brandlogos/nextdotjs.svg' />
                    <h3>NEXTjs</h3>
                </li>
                <li className='skill__item'>
                    <img src='brandlogos/react.svg' />
                    <h3>React</h3>

                </li>
                <li className='skill__item'>
                    <img src='brandlogos/npm.svg' />
                    <h3>npm</h3></li>
                <li className='skill__item'><img src='brandlogos/adobe.svg' />
                    <h3>Adobe</h3></li>
                <li className='skill__item'><img src='brandlogos/figma.svg' />
                    <h3>Figma</h3></li>
                    <li className='skill__item'><img src='brandlogos/amazonaws.svg' />
                    <h3>AWS</h3></li>
            </ul>
        </div>
    )
}
