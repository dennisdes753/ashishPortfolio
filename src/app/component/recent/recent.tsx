'use client'
import Link from 'next/link'
import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap'
import { FMLProject, FractionProject, HealthCareProject, MetaGameProject, RudrakshProject } from '../../asset/image/img'
import './recent.scss'

export default function Recent(){
    return(
        <>
            <div className="recent_sec">
                <Container>
                    <Row>
                        <Col xxl="12" md="12" xs="12">
                            <div className="recent_projects">
                                <h6>Recent Work</h6>
                                <Link href="https://fml.app/" target="_blank" className="recent_fml">
                                    <div className="project">
                                        <h4>FML Club</h4>
                                        <p>Development</p>
                                    </div>
                                    <div className="fml_project">
                                        <Image className="img-fluid" src={FMLProject} alt="FML-Project"/>
                                    </div>
                                </Link>
                                <Link href="https://fraction.estate/" target="_blank" className="recent_fml">
                                    <div className="project">
                                        <h4>Fraction Estate - Real Estate</h4>
                                        <p>Development</p>
                                    </div>
                                    <div className="fml_project">
                                        <Image className="img-fluid" src={FractionProject} alt="FML-Project" />
                                    </div>
                                </Link>
                                <Link href="https://rudraksh-resume.netlify.app/" target="_blank" className="recent_fml">
                                    <div className="project">
                                        <h4>Designer Resume</h4>
                                        <p>Development</p>
                                    </div>
                                    <div className="fml_project">
                                        <Image className="img-fluid" src={RudrakshProject} alt="FML-Project" />
                                    </div>
                                </Link>
                                <Link href="https://main--sage-chebakia-9b1cd1.netlify.app/" target="_blank" className="recent_fml">
                                    <div className="project">
                                        <h4>Top on Fit</h4>
                                        <p>Development</p>
                                    </div>
                                    <div className="fml_project">
                                        <Image className="img-fluid" src={HealthCareProject} alt="FML-Project" />
                                    </div>
                                </Link>
                                <Link href="https://lovely-rabanadas-bd7058.netlify.app/" target="_blank" className="recent_fml">
                                    <div className="project">
                                        <h4>Meta Game</h4>
                                        <p>Development</p>
                                    </div>
                                    <div className="fml_project">
                                        <Image className="img-fluid" src={MetaGameProject} alt="FML-Project" />
                                    </div>
                                </Link>
                            </div>
                            <div className="show_projects">
                                <Link href="#">More Work</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}