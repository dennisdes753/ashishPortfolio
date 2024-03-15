'use client'
import React, { useState, MouseEventHandler } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './about.scss'

export default function About(){
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (event) => {
        const startX = event.clientX;
        const startY = event.clientY;

        function handleMouseMove(event: MouseEvent) {
            const currentX = event.clientX;
            const currentY = event.clientY;

            const deltaX = currentX - startX;
            const deltaY = currentY - startY;

            const threshold = 10; // Adjust this value as needed

            if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
                let newTranslateX = 0;
                let newTranslateY = 0;

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    newTranslateX = deltaX > 0 ? threshold : -threshold;
                } else {
                    newTranslateY = deltaY > 0 ? threshold : -threshold;
                }

                setTranslateX(newTranslateX);
                setTranslateY(newTranslateY);
            }
        }

        function handleMouseLeave() {
            setTranslateX(0);
            setTranslateY(0);
            document.removeEventListener('mousemove', handleMouseMove);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
    };
    return(
        <>
            <div className="about_sec" data-scroll-section>
                <Container>
                    <Row>
                        <Col xxl="6"  lg="12" xs="12">
                            <div className="about_left">
                                <h4>As a skilled frontend developer, I specialize in crafting user-friendly and visually appealing web experiences. Proficient in modern frontend technologies such as HTML, CSS, and JavaScript frameworks like React and Next.js, I excel at translating design concepts into responsive and interactive interfaces. With a strong focus on user experience and accessibility, I am dedicated to delivering high-quality solutions that meet both client requirements and industry standards.</h4>
                            </div>
                        </Col>
                        <Col xxl="6" lg="12" xs="12">
                            <div className="about_right">
                                <p>The combination of my passion
                                    for design, code & interaction
                                    position me in a unique place in
                                    the web design world.</p>
                                <p className="font-bold my-3">My SKills are:</p>
                                <button className="btn btn-primary">HTML</button>
                                <button className="btn btn-primary">CSS</button>
                                <button className="btn btn-primary">Sass</button>
                                <button className="btn btn-primary">React</button>
                                <button className="btn btn-primary">Next</button>
                                <button className="btn btn-primary">Git</button>
                                <button className="btn btn-primary">Tailwind</button> 
                                <button className="btn btn-primary">Javascript</button>                           
                            </div>
                            <div className="about_button">
                                <button
                                    className="btn btn-primary"
                                    id="hoverButton"
                                    style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    About Me
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}