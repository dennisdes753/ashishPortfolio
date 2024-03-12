'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap'
import { AshishImg } from '../../asset/image/img'
import './footer.scss'

export default function Footer() {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    function handleMouseEnter(event: MouseEvent) {
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
    }
  return (
    <>
        <footer>
            <Container>
                <Row>
                    <Col xxl="12" md="12" xs="12">
                        <div className="footer_inner">
                            <h4> 
                                <Image className="img-fluid self_img" src={AshishImg} alt="self-image" />
                                Let's work <br/>Together
                            </h4>
                        </div>
                        <div className="get_in_touch">
                            <div className="hr"/>
                            <button
                                className="btn btn-primary"
                                id="hoverButton"
                                style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
                                  onMouseEnter={handleMouseEnter}
                            >
                                Get In Touch</button>
                        </div>
                        <div className="mailid_phone">
                            <Link href="mailto:jainashish753@gmail.com" target="_blank" className="btn btn-primary">jainashish753@gmail.com</Link>
                            <Link href="tel:91+8146133701" className="btn btn-primary">91+ 8146133701</Link>
                        </div>
                        <div className="footer_bottom">
                            <h4>
                                <span className="heading">Version</span>
                                <span className="edition">2024 © Edition</span>
                            </h4>
                            <h4>
                                <span className="heading">Socials</span>
                                  <span className="edition"><Link href="https://www.linkedin.com/in/ashish-jain-b3115b154/" target="_blank">Linkedin</Link></span>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>   
    </>
  )
}