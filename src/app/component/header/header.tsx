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
                            <Link href="#home">Work</Link>
                            <Link href="#link">About</Link>
                            <Link href="#link">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}