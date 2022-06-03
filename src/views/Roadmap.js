import { Col, Container, Row } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import matic from "../assets/images/matic.png"


const Roadmap = () => {
    return (
        <section className="roadmap">

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">   
                <div className="section-title">
                <h2 className="blk-border" id="roadmap">Adoption Roadmap</h2>
                </div>
             </AnimationOnScroll>

            <Container>

                <div class="roadmap-meta">

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>01/12/2021</p>
                        </div>

                        <div className="roadmap-start">

                         

                            <div className="roadmap-head">
                                <h4>Launch of the Kargain World WhitePaper</h4>
                                <p>We will publish our whitepaper with the project’s basis.</p>
                            </div>

                        </div>

                    </div>

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>15/01/2022</p>
                        </div>

                        <div className="roadmap-start">

                           

                            <div className="roadmap-head">
                                <h4>NFT Platform v1.0.0</h4>
                                <p>We will launch our application where users will be able to buy and sell their vehicles as NFT’s on the Ethereum network.</p>
                            </div>

                        </div>

                    </div>

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>15/01/2022</p>
                        </div>

                        <div className="roadmap-start">

                            

                            <div className="roadmap-head">
                                <h4>Pre-Launch IDO token $Karg on sushiwap for Ethereum network</h4>
                            </div>

                        </div>

                    </div>

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>15/02/2022</p>
                        </div>

                        <div className="roadmap-start">

                           

                            <div className="roadmap-head">
                            <h4>Launch of $Karg token</h4>
                            </div>

                        </div>

                    </div>

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>15/01/2022</p>
                        </div>

                        <div className="roadmap-start">

                           

                            <div className="roadmap-head">
                            <h4>Launch of Kargain in Snapshot</h4>
                            <p>Launch of the Kargain section within Snapshot together with the proposal discussion forum.</p>
                            </div>

                        </div>

                    </div>

                    <div className="roadmap-data">

                        <div className="roadmap-year">
                            <p>31/03/2022</p>
                        </div>

                        <div className="roadmap-start">

                            {/* <div className="roadmap-image">

                                <img src={matic} />

                            </div> */}

                            <div className="roadmap-head">
                            <h4>NFT Platform v2.0.0</h4>
                                <p>Apply for mechanic workshops in Kargain for DAO, Workshop rating, Vincent Integration, Auction mode.</p>
                            </div>

                        </div>

                        </div>

                    </div>

                    

            </Container>
        
        </section>
    )
}

export default Roadmap;