import { Col, Container, Row } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import marketplace from "../assets/images/img.png"
import marketplace1 from "../assets/images/market.png"
import Vincent from "../assets/images/vincent_new.png"

const Marketplace = () => {
    return (
        <section className="marketplace-section pb-5">

                {/* <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
                <div className="section-title">
                <h5>See our marketplace</h5>
                <h2>Things, Money and Data:<br/>
                    AN OPEN TOKENIZED ECONOMY.</h2>
                </div>
                </AnimationOnScroll> */}

            <section className="marketplace-inner" id="workshop">
               
                <Container>

                    <Row className="align-items-center">

                        <Col lg={6}>

                            <div className="market-meta">
                            <h2>Workshop</h2>
                            <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* <a href="#" className="custom-btn primary-btn" target="_blank">Learn More</a> */}

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="market-img">

                            <img src={marketplace} className="workshop_img"/> 

                            </div>
                            
                        </Col>

                        <div className="marketplace_section">

                        <Col lg={6}>

                        <div className="market-img">

                            <img src={marketplace1} className="marketplace_img" />

                            </div>

                        </Col>

                        
                        <Col lg={6}>

                        <div className="market-meta">
                        <h2>Marketplace</h2>
                        <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        {/* <a href="#" className="custom-btn primary-btn" target="_blank">Learn More</a> */}

                        </div>

                        </Col>
                        </div>

                        <Col lg={6}>

                            <div className="market-meta">
                            <h2 id="Vincent">Vincent</h2>
                            <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* <a href="#" className="custom-btn primary-btn" target="_blank">Learn More</a> */}

                            </div>

                        </Col>

                        <Col lg={6}>

                        <div className="market-img">

                            <img src={Vincent} className="vincent_img" />

                            </div>
                            
                        </Col>


                    </Row>
                    
                </Container>

            </section>

        </section>
    )
}

export default Marketplace;