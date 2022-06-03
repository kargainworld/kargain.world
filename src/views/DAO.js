import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import dao from "../assets/images/dao.png"

import Vincent from "../assets/images/vincent.png"

const DAO = () => {
    return ( 
        <section className="extra">
            {/* <Container>
                <div className="text-center">
                    <h1>DAO</h1>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <p>With DAO Protocol you can build commerce applications that everyone can trust and anyone can use.</p>
                    <img className="my-5" src="https://assets.website-files.com/6058b6a3587b6e155196ebbb/61961ffa7b0e02ee150da3ba_graphic-min.png" />
                    <p>Built for creators, communities and merchants, DAO Protocol enables the seamless exchange of digital assets for physical products, services and experiences.</p>
                    </AnimationOnScroll>

                    
                </div>
            </Container> */}

        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
            <Container className="dao-section">
                
                        <Row className="align-items-center">

                            

                            <Col lg={8}>

                                <div className="dao-right">

                                
                                <h2 className="underline">DAO</h2>
                                <p>With DAO Protocol you can build commerce applications that everyone can trust and anyone can use.</p>
                                <p>Built for creators, communities and merchants, DAO Protocol enables the seamless exchange of digital assets for physical products, services and experiences.</p>
                                </div>

                            </Col>

                            <Col lg={4}>

                            <img src={Vincent} />

                            </Col>

                        </Row>
            </Container>
        </AnimationOnScroll>
        </section>
    )
}

export default DAO;