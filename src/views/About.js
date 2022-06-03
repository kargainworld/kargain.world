import { Row, Col, Container } from "react-bootstrap";
import global from "../assets/images/global.png"
import logo from "../assets/images/logo.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
    return (

        <section className="about-section">
            <Container className="h-100">
                <Row className="h-100">
            
                    <Col lg={12} className="img-col text-center align-self-center">

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <div>
                            <img className="top_logo" src={logo} />
                            <p className="my-4">
                                A decentralised autonomous organisation (DAO) that aims to be a fully integrated ecosystem of private buyers and sellers, vehicle workshops, professional dealers, built on blockchain technology and controlled by its users collectively.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <img className="globe-img" src={global} />
                    </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>

            {/* <div className="scroll-mouse">
                <i class="fa-solid fa-computer-mouse"></i>
            </div> */}

            

            <div>
                
            </div>

        </section>

    )
}

export default About;