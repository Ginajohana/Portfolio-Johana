import React from 'react';
import johanasemeniukImage from '../../img/johanasemeniuk.jpg';
import "../../styles/about.css";

export const About = () => {
    return (
        <div className='about-container'>
    <div className='about-content'>
        <div className='about-img'>
            <img src={johanasemeniukImage} alt="Johana Semeniuk" />
        </div>
        <div className='about-text'>
            <h2>About<span>Me</span></h2>
            <h4>Full Stack Developer</h4>
            <p>I'm thrilled to announce that I've successfully completed a 
                Full Stack Developer bootcamp <br></br>and remain committed to my professional development...</p>
        </div>
    </div>
    <div className='services'>
                <div className='container'>
                <h1 className="services-title">My <span>Services</span></h1>
                    <div className='services-list'>
                        <div className='service-item'>
                            <i className="fa-solid fa-code"></i>
                            <h2>UI/UX Design</h2>
                            <p> My goal is to create exceptional digital experiences for users. <a href='#' className='read'>Learn more</a></p>
                        </div>
                        <div className='service-item'>
                            <i className="fa-solid fa-crop-simple"></i>
                            <h2>Another Service</h2>
                            <p>Description of another service here. <a href='#' className='read'>Learn more</a></p>
                        </div>
                        <div className='service-item'>
                            <i className="fa-brands fa-apple"></i>
                            <h2>Yet Another Service</h2>
                            <p>Description of yet another service here. <a href='#' className='read'>Learn more</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      
    )
}