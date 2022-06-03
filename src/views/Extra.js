import { Row, Col, Container } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import smart from "../assets/images/smart.png"

const Extra = () => {
    return (
        <section className="extra">

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
                <Container className="extra-section">
                    
                    <Row className="align-items-center">
                        
                        <Col lg={4} >

                            <div className="extra-right">
                                <img alt="" className="extra_img" src={smart} width="auto" height="100%" />
                            </div>

                        </Col>

                        <Col lg={8}>

                            <div className="extra-left">
                                <h4>Built by developers, <br/>for developers</h4>
                                <p>Built for creators, communities and merchants, Boson Protocol enables the seamless exchange of digital assets for physical products, services and experiences.</p>
                                    <br/>
                                <a href="#" className="custom-btn primary-btn" target="_blank">Learn More</a>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </AnimationOnScroll>
            
        </section>
    )
}

export default Extra;