import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Pdf from '../assets/whitepaper.pdf';


const Header = () => {
  return (
    <div>
      <Navbar className="bg-brand-custom" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <Link to="/" >
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto my-2 my-lg-0" >
            <NavDropdown className="brand-fifth" title="About" id="about">
              {/* <NavDropdown.Item className="" href="#action3">World</NavDropdown.Item> */}
              <NavDropdown.Item className="" href="#roadmap">Roadmap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="" href="#team">Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="product">
              <NavDropdown.Item href="https://kargain.com/" target="_blank">Marketplace</NavDropdown.Item>
              <NavDropdown.Item href="#workshop">Workshop</NavDropdown.Item>
              <NavDropdown.Item href="#Vincent">Vincent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/kargainworld" target="_blank">Sandbox</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Governance" id="governance">
              <NavDropdown.Item href="/tokenomics">Tokenomics</NavDropdown.Item>
              <NavDropdown.Item href="https://forum.kargain.world/" target="_blank">Forum</NavDropdown.Item>
              <NavDropdown.Item href="https://snapshot.org/#/kargainworld.eth" target="_blank">Voting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://docs.kargain.world/" target="_blank">Documentation</NavDropdown.Item>
              <NavDropdown.Item href="https://discord.com/invite/jRT4qtEpkW" target="_blank">Support</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#whitepaper" id="whitepaper" onClick={() => window.open(Pdf)}>Whitepaper</Nav.Link>
            {/* <Nav.Link href="/tokenomics" >Tokenomics</Nav.Link> */}
          </Nav>
          <ul class="footer-social">
            <li><a href="https://twitter.com/KargainWorld" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://github.com/kargainworld" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://discord.com/invite/jRT4qtEpkW" target="_blank"><i class="fa-brands fa-discord"></i></a></li>
          </ul>
          
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
