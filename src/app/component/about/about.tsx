'use client'
import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import './about.scss'

export default function About(){
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    function handleMouseEnter(event) {
        const startX = event.clientX;
        const startY = event.clientY;

        function handleMouseMove(event) {
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
    }
    return(
        <>
            <div className="about_sec">
                <Container>
                    <Row>
                        <Col xxl="6"  lg="12" xs="12">
                            <div className="about_left">
                                <h4>Helping brands to stand out in the digital era.
                                    Together we will set the new status quo. No
                                    nonsense, always on the cutting edge.</h4>
                            </div>
                        </Col>
                        <Col xxl="6" lg="12" xs="12">
                            <div className="about_right">
                                <p>The combination of my passion
                                    for design, code & interaction
                                    position me in a unique place in
                                    the web design world.</p>
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