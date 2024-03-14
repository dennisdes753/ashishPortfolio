'use client'
import React, {useState, useRef, useEffect} from 'react'
import Header from './component/header/header'
import Banner from './component/banner/banner'
import About from './component/about/about'
import Recent from './component/recent/recent'
import Project from './component/projects/projects'
import Footer from './component/footer/footer'

export default function Home() {
	const [preloader, setPreloader] = useState(true);
	const [timer, setTimer] = useState(3);

	const id = useRef<number | null>(null);

	const clear = () =>{
		window.clearInterval(id.current as number);
		setPreloader(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer(timer => timer - 1);
		}, 1000);

		return () => {
			if (id.current) {
				clearInterval(id.current);
			}
		};
	}, []);

	useEffect(()=>{
		if(timer===0){
			clear();
		}
	},[timer]);

	return (
		<>
			{preloader ? (
				<div className="loader-wrapper absolute">
					<h1>Namaste</h1>
					<h2>Welcome to My Portfolio</h2>
				</div>
			):(

					<section>
						<div className="main_header">	
							<Header/>
							<Banner/>
						</div>	
						<div className="after_header">
							<About/>
							<Recent/>
							<Project/>
							<Footer/>
						</div>
					</section>
				)
			}	
		</>	
	);
}
