import { Container, Form, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Subscribe = () => {
    return (

        <section>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
            <div className="section-title py-3">
                <h2 className="blk-border">Always stay updated</h2>
                <p>Join now with Kargain World to get the latest news</p>
            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">

                <Container>

                <Row className="justify-content-center">

                <Col lg={6} className="text-center">

                <form className="subscribe">

                    <input type="email" name="email" placeholder="Your Email"/>
                    <input type="submit" value="Subscribe" className="custom-btn primary-btn"/>

                </form>
                
                </Col>
                </Row>
                </Container>

            </AnimationOnScroll>

        </section>
    )
}

export default Subscribe;