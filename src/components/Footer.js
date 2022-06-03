import {
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
  Container,
  Navbar,
} from "react-bootstrap";

import logo from "../assets/images/logo.png";
import Pdf from '../assets/whitepaper.pdf';


const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-top">
        <Container className="flex-wrap">
          <Row>
            <div className="footer_row">

            <Col md={2} className="footer-first" >

              <div className="footer-logo" > 
              <img alt="" src={logo} />
              <p>Boson Protocol's exchange mechanism enables anyone to trade physical products</p>
              </div>
             
            </Col>
            <div className="footer_portions">

             <Col md={2}>
              <div className="d-flex flex-column gap-2">
                <div className="fw-bold footer-heading">About</div>

                <ul className="footer-menu">
                  <li><a href="#roadmap">Roadmap</a></li>
                  <li><a href="#team">Team</a></li>
                </ul>

                </div>
            </Col>
        

            <Col md={2} >
              <div className="d-flex flex-column gap-2">
                <div className="fw-bold footer-heading">Product</div>
                <ul className="footer-menu">
                  <li><a href="https://kargain.com/" target="_blank">Marketplace</a></li>
                  <li><a href="#workshop">Workshop</a></li>
                  <li><a href="#Vincent">Vincent</a></li>
                  <li><a href="https://github.com/kargainworld" target="_blank">Sandbox</a></li>
                </ul>
              </div>
            </Col>

            <Col md={2}>
              <div className="d-flex flex-column gap-2">
                <div className="fw-bold footer-heading">Governance</div>

                <ul className="footer-menu">
                  <li><a href="/tokenomics">Token</a></li>
                  <li><a href="https://forum.kargain.world/" target="_blank">Forum</a></li>
                  <li><a href="https://snapshot.org/#/kargainworld.eth" target="_blank">Voting</a></li>
                  <li><a href="https://docs.kargain.world/" target="_blank">Documentation</a></li>
                  <li><a href="https://discord.com/invite/jRT4qtEpkW" target="_blank">Support</a></li>
                </ul>

                </div>
            </Col>

            <Col md={2}>
              <div className="d-flex flex-column gap-2">
                <div className="fw-bold footer-heading">Whitepaper</div>

                <ul className="footer-contact">

                  {/* <li><i class="fa-solid fa-location-dot"></i> <p>5919 Trussville Crossings Pkwy, Birmingham</p></li> */}
                  <li > <p style={{cursor:"pointer"}}  onClick={() => window.open(Pdf)}>Whitepaper</p></li>
                  
                </ul>
              </div>
            </Col>
            <Col md={2} style={{width:"200px"}}>
              <div className="d-flex flex-column gap-2">
                <div className="fw-bold footer-heading">Contact Info</div>

                <ul className="footer-contact">

                  {/* <li><i class="fa-solid fa-location-dot"></i> <p>5919 Trussville Crossings Pkwy, Birmingham</p></li> */}
                  <li><i class="fa-solid fa-envelope"></i> <p>Info@gmail.com</p></li>
                  <li><a href="https://discord.com/invite/jRT4qtEpkW" target="_blank" style={{color:"#212529"}}><i class="fa-brands fa-discord"></i></a> <p>Discord</p></li>
                  
                </ul>
              </div>
            </Col>
            </div>
            </div>
         

            {/* <Col md={5}>
              <div>
                <p className="fw-bold footer-heading">Stay in touch.</p>

                <InputGroup className="mb-3b">
                  <FormControl placeholder="Email" aria-label="Email" className="" />
                  <Button variant="btn btn-primary">SUBSCRIBE</Button>
                </InputGroup>

                <p>
                  Subscribe to stay in touch. Your email will be kept private.
                  save emails in database
                </p>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer_bottom_in"> 
          <p>© 2022 Kargain World</p>

          <ul className="footer-social">
{/* 
                <li><a href="#" className=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#" className=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#" className=""><i class="fa-brands fa-instagram"></i></a></li> */}

                <li><a href="https://twitter.com/KargainWorld" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://github.com/kargainworld" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://discord.com/invite/jRT4qtEpkW" target="_blank"><i class="fa-brands fa-discord"></i></a></li>
            </ul>
          </div>

        </Container>
      </div>

    </footer>
  );
};

export default Footer;
