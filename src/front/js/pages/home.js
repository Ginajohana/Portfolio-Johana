import React, { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Context } from '../store/appContext';
import johanasemeniukImage from '../../img/johanasemeniuk.jpg'
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const el = useRef(null);
	const changeText = () => {

	  
	};
	useEffect(() => {
		const options = {
			strings: [store.displayText],
			typeSpeed: 80,
		  };
	
		const typed = new Typed(el.current, options);
		return () => {
		  typed.destroy();
		};
	  }, [store.displayText]);
	return (
		<div className="Home">
			<img src={johanasemeniukImage} alt="Johana Semeniuk" />
			<div className="Home-content">
				<h3>Hello, it's Me</h3>
				<h1>Johana Semeniuk</h1>
				<h3>And I'm a <span className="text"><span ref={el}></span></span></h3>
				<p>I'm a passionate, up-and-coming full-stack developer. 
				While my experience may be limited, my enthusiasm and dedication drive me to learn
				 and improve constantly.</p>
				
				
				<div className="home-sci">
					<a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
					<a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
					<a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
					<a href="https://www.linkedin.com/login/es"><i className="fab fa-linkedin"></i></a>
				</div>
				<a href="#" className="btn-box" onClick={changeText}>More About Me</a>
			</div>
		</div>

	);
};