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
			<section className="main_header">
				<Header />
				<Banner/>
			</section>	
			<section className="after_header">
				<About/>
				<Recent/>
				<Project/>
				<Footer/>
			</section>
		</>	
	);
}
