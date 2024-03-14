'use client'
import Image from 'next/image'
import {Row, Col, Container} from 'react-bootstrap'
import { AshishImg } from '../../asset/image/img'
import './banner.scss'

export default function Banner(){    
    return(
        <>
            <div className="bannerSection">
                <Container>
                    <Row>
                        <Col xxl="12" md="12" xs="12">
                            <Image className="img-fluid" src={AshishImg} alt="Ashish-Img"/>
                            <div className="location_india">
                                <p>Located <br/>in the India</p>
                                <span>
                                    <div className="globe">
                                        <div className="globe-wrap">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                            <div className="circle-hor"></div>
                                            <div className="circle-hor-middle"></div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="freelance_content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                                    <path d="M95.4933 98.3865L97.7834 68.906C97.9614 67.7651 97.1808 66.6957 96.0397 66.5179C94.8988 66.3399 93.8295 67.1205 93.6517 68.2616C93.6351 68.368 93.6267 68.4755 93.6267 68.5831L91.7124 93.036L57.8885 50.1461C57.1377 49.2689 55.8178 49.1664 54.9404 49.9173C54.063 50.6681 53.9606 51.988 54.7114 52.8652L88.5353 95.7551L64.096 93.8567C62.9551 93.6788 61.8858 94.4594 61.7079 95.6004C61.5301 96.7415 62.3106 97.8106 63.4516 97.9885C63.558 98.005 63.6655 98.0135 63.7731 98.0134L93.2538 100.303C94.4002 100.389 95.4008 99.5328 95.4933 98.3865Z" fill="white" />
                                </svg>
                                <p>Freelance</p>
                                <p>Designer & Developer</p>
                            </div>
                            <div className="ashish_marque">
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                                <p>-</p>
                                <p>Ashish Jain</p>
                            </div>
                        </Col>    
                    </Row>
                </Container>    
            </div>
        </>
    )
}