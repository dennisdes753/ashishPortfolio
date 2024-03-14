'use client';

import Image from 'next/image'
import { MadCoderLogo } from '../../asset/image/img'
import Link from 'next/link'
import { Container, Nav, Navbar} from 'react-bootstrap'
import './header.scss'

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary portfolio_navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className="img-fluid" src={MadCoderLogo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="resume_button btn btn-primary" href="https://drive.google.com/file/d/11grhO4I5u54srNJ8BVoxrG2Rh2Kkg0X0/view?usp=sharing" target="_blank">Resume</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}