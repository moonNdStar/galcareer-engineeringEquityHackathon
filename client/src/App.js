import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Resume from "./components/Resume";
import Search from "./components/Search";
import About from "./components/About";
import Chatbot from "react-chatbot-kit";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Profiles from "./components/Profiles";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import github from "./github-logo.png";
import fb from "./facebook.png";
import twitter from "./twitter-sign.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PostJob from './components/PostJob'
import LoginUser from "./components/LoginUser"
import Home from "./components/Home";
import LoginEmployer from "./components/LoginEmployer";
import React from 'react';
import Career from "./components/Career";
import SignupUser from "./components/SignupUser";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SignupEmployer from "./components/SignupEmployer"
function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark" className="nav-color">
          <Container fluid>
            <Navbar.Brand href="#" className="brand-name">Galcareer</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="justify-content-center flex-grow-1 pe-3 text-center"
                id="nav-elements"
                style={{ maxHeight: "300px" }}

              >
                <Nav.Link as={Link} to="/" className="Link1">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="Link2">
                  ABOUT US
                </Nav.Link>
                <Nav.Link as={Link} to="/career" className="Link6">
                  CAREERS
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="Link5">
                  PROFILES
                </Nav.Link>
                <Nav.Link as={Link} to="/faq" className="Link3">
                  FAQ
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="Link4">
                  CONTACT US
                </Nav.Link>
                
              </Nav>
              <Form className="d-flex text-center button1">

                <Link to="/loginuser">
                  <div className="center-button text-center justify-content-center">
                    <Button variant="light" className="button1" >LOGIN</Button>
                  </div></Link>

              </Form>

              <Form className="d-flex" eventKey={2}>
                <Link to="/signupuser">
                  <Button className="button2" variant="light">SIGN UP</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <div>
          <Routes>
            <Route path="/loginuser" element={<LoginUser />} />
            <Route path="/signupuser" element={<SignupUser />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profiles />} />
            <Route path="/loginemployer" element={<LoginEmployer />} />
            <Route path="/signupemployer" element={<SignupEmployer />} />
            

            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/career" element={<Career />} />
            <Route path="/postajob" element={<PostJob  />}/>
            <Route path="/resume" element={<Resume />}/>
            
          </Routes>
        </div>
      </div>
      <div className="footer" id="lol">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            <br></br>
            <Container fluid="md" className="footer">
              <Row className="space">
                <Col className="text-center" id="socio-img">
                  <a
                    href="https://github.com/moonNdStar/"
                    target={"_blank"}
                    className="icon1"
                  >
                    {" "}
                    <img src={github} height="30px"></img>
                  </a>
                  <a
                    href="https://www.facebook.com/monisha.nagpal.3"
                    target={"_blank"}
                    className="icon2"
                  >
                    <img src={fb} height="30px"></img>
                  </a>
                  <a
                    href="https://www.instagram.com/mooonishaa/?hl=en"
                    target={"_blank"}
                    className="icon3"
                  >
                    <img src={instagram} height="30px"></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/monisha-nagpal-832b351b4/"
                    target={"_blank"}
                    className="icon4"
                  >
                    <img src={linkedin} height="30px"></img>
                  </a>
                  <a
                    href="https://twitter.com/monisha_nagpal"
                    target={"_blank"}
                    className="icon5"
                  >
                    <img src={twitter} height="30px"></img>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p className="copyright">Copyright &#169; 2023 by Rosalind-Franklin</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <p className="love">Made With &#10084;&#65039;</p>
                </Col>
              </Row>
        
        </Container>
        
        </div>
    </BrowserRouter>
  );
}

export default App;
