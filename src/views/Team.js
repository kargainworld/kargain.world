import { Col, Container, Row } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import team1 from "../assets/images/client.jpg"

const Team = () => {
    return (
        <section className="team-section py-5">
            <Container>
                 <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                   
                    <div className="section-title">
                    <h2 className="blk-border" id="team">Team</h2>
                    </div>
                </AnimationOnScroll>

                <Row className="py-5">

                    <Col lg={3}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">

                        <div className="team-box">

                            <img src={team1}/>

                            <div className="team-meta">

                                <h3>Team one</h3>
                                <p>Co-founder</p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                    </li>

                                </ul>

                            </div>
                           
                        </div>

                        </AnimationOnScroll>
                    </Col>

                    <Col lg={3}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">

                        <div className="team-box">

                            <img src={team1}/>

                            <div className="team-meta">

                                <h3>Team one</h3>
                                <p>Co-founder</p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                    </li>

                                </ul>

                            </div>
                           
                        </div>

                        </AnimationOnScroll>
                    </Col>

                    <Col lg={3}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">

                        <div className="team-box">

                            <img src={team1}/>

                            <div className="team-meta">

                                <h3>Team one</h3>
                                <p>Co-founder</p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                    </li>

                                </ul>

                            </div>
                           
                        </div>

                        </AnimationOnScroll>
                    </Col>

                    <Col lg={3}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">

                        <div className="team-box">

                            <img src={team1}/>

                            <div className="team-meta">

                                <h3>Team one</h3>
                                <p>Co-founder</p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                    </li>

                                </ul>

                            </div>
                           
                        </div>

                        </AnimationOnScroll>
                    </Col>

                </Row>
                  
            </Container>
        </section>
    )
}

export default Team;