import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import SignOutButton from "../SignOut";
import EditBlogButton from "../BlogIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import "./index.css";



const Footer = (props, { authUser }) => (
  <Container>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</Container>
);

Footer.contextTypes = {
  authUser: PropTypes.object
};

const NavigationAuth = () => (
 
    <Card className="jumfoot">
      <SignOutButton />
      <EditBlogButton />
      
        <Container fluid className="social-links">
        <Nav fluid>
          <Row fluid>
            <Nav.Item>
              <Nav.Link
                href="https://www.facebook.com/DaKreweduRoux/"
                target="https://www.facebook.com/DaKreweduRoux/"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* email  */}
              <Nav.Link
                href="mailto:dakreweduroux@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon="envelope" />
              </Nav.Link>
            </Nav.Item>
          </Row>
          </Nav>
        </Container>
      
      <hr />

  
        <Card.Body>
          <Row>
            <Col className="footercol">
              <Card.Title>Sitemap</Card.Title>

              <Card.Link href="/">Home</Card.Link>

              <Card.Link href="/history">History</Card.Link>

              <Card.Link href="/royal">Royal Court</Card.Link>
            </Col>
            <Col className="footercol">
              <Card.Title>More</Card.Title>
              <Card.Link href="/too">
                Da Krewe du Roux Too
                <i class="fa fa-child" aria-hidden="true" />
              </Card.Link>

              <Card.Link href="/ruff">
                Da Krewe du Ruff{" "}
                <Image className="icon" src="https://i.imgur.com/Uu8I2bj.png" />
              </Card.Link>
              <Card.Link href="/donation">Sponsor Documents</Card.Link>
            </Col>
            <Col className="footercol">
              <Card.Title>Admin Access</Card.Title>

              <Card.Link href="/signup">Sign Up</Card.Link>
            </Col>
          </Row>
        </Card.Body>
   
    </Card>

);

const NavigationNonAuth = () => (

    <Card className="jumfoot">
      <Nav className="justify-content-center">
        <Container className="social-links">
          <Row fluid>
            <Nav.Item>
              <Nav.Link
                href="https://www.facebook.com/DaKreweduRoux/"
                target="https://www.facebook.com/DaKreweduRoux/"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* email  */}
              <Nav.Link
                href="mailto:dakreweduroux@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon="envelope" />
              </Nav.Link>
            </Nav.Item>
          </Row>
        </Container>
      </Nav>
      <hr />
      <Container className="linkscont">
        <Nav>
          <Row className="justify-content-md-center">
            <Col className="footercol">
              <Nav.Item>
                <h4>Sitemap</h4>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/history">History</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/royal">Royal Court</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <h4>More</h4>
              <Nav.Item>
                <Nav.Link href="/too">
                  Da Krewe du Roux Too
                  <i class="fa fa-child" aria-hidden="true" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/ruff">
                  Da Krewe du Ruff{" "}
                  <Image
                    className="icon"
                    src="https://i.imgur.com/Uu8I2bj.png"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/donation">Sponsor Documents</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <h4>Admin Access</h4>
              <Nav.Item>
                <Nav.Link href="/signin">Sign In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Nav>
      </Container>

      <div />
    </Card>
 
);

export default Footer;
