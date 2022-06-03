import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import chart from "../assets/images/chart-blk.png"

function Tokenomics (){

    return (

        <>
        
        <Layout>

                    <section className="roadmap">

                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
                            <div className="section-title">
                            <h2 className="blk-border">Tokenomics</h2>
                            </div>
                        </AnimationOnScroll>

                        <Container className="pb-5 mb-5">
                            
                            <Row>

                            <Col lg={12}>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
                            <div className="tokens">

                               

                            <p>As a Kargain utility and governance token, $KARG will be distributed as follows:</p>

                            <ul>
                                <li>
                                Community Treasury (40%): distributed to the public through liquidity mining, Bug Bounty rewards,
                            marketing strategy (take decision by voting process) - controlled by DAO voting decisions.
                                </li>

                                <li>
                                Airdrop (10%): reserved for Airdrop to incentivise users.
                                </li>

                                <li>
                                Partners / Investors (20%): reserved for future investors or partners.
                                </li>

                                <li>
                                Team - Company (20%): reserved for the team, released together with the liquidity mining protocol or used
                            as a means of payment or in partnerships
                                </li>

                                <li>
                                IDO (10%): reserved for initial sale.
                                </li>
                            </ul>


                            </div>
                            </AnimationOnScroll>

                            </Col>

                                <Col lg={12}>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   


                            <img src={chart} width={"100%"}/>

                            </AnimationOnScroll>


                            </Col>

                                

                            </Row>

                            

                        </Container>

                    </section>
              
        </Layout>

        </>

    )

}

export default Tokenomics;