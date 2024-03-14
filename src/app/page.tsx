'use client'
import Header from './component/header/header'
import Banner from './component/banner/banner'
import About from './component/about/about'
import Recent from './component/recent/recent'
import Project from './component/projects/projects'
import Footer from './component/footer/footer'

export default function Home() {
	return (
		<>
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
		</>	
	);
}
