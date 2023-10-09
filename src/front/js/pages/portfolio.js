import React, { useRef } from 'react';
import "../../styles/portfolio.css";
import pelicula1 from '../../img/pelicula1.jpg';
import pelicula2 from '../../img/pelicula2.jpg';
import pelicula3 from '../../img/pelicula3.jpg';

export const Portfolio = () => {
  const handleMouseMove = (e, rowRef) => {
    const boundingBox = rowRef.current.getBoundingClientRect();
    const mouseX = e.clientX - boundingBox.left;
    const mouseY = e.clientY - boundingBox.top;

    const rotationValue = ((mouseX / boundingBox.width) - 0.5) * 20;
    const scaleValue = 1.2; 

    rowRef.current.style.transform = `rotate(${rotationValue}deg) scale(${scaleValue})`;
  };

  const handleMouseLeave = (rowRef) => {
    rowRef.current.style.transform = 'rotate(0deg) scale(1)';
  };

  const rowRefs = [useRef(), useRef(), useRef()];

  return (
    <div className='container col-12'>
      <div id='portfolio' className='project'>
        <div className='main-text' id='project'>
          <h2>Project <span>Movies4Geeks</span></h2>
          <div className='portfolio-content'>
            {rowRefs.map((ref, index) => (
              <div
                key={index}
                className='row mobile-frame'
                ref={ref}
                onMouseMove={(e) => handleMouseMove(e, ref)}
                onMouseLeave={() => handleMouseLeave(ref)}
              >
                <img src={index === 0 ? pelicula1 : index === 1 ? pelicula2 : pelicula3} alt="Movies4Geeks Project" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

