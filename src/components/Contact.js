import React from "react";
import Email from "./Email";
import Jumbo from "./Jumbo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Styles = styled.div`
  .title {
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .social {
    background-color: #602d8f;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
  i {
    color: white;
    font-size: 4em;
  }
  .emailcont {
    padding-top: 30px;
    margin-bottom: 30px;
  }
  .words {
    color: white;
    background-color: #602d8f;
    text-align: center;
    height: 8vh;
    
  }
  h1{
    color: #602d8f;
    }
`;

const Contact = () => (
  <Styles>
    <Container fluid>
      <Jumbo />
      <Row>
      <Col>
        <Container fluid className="title">
          <h1>Contact Us!</h1>
        </Container>
        </Col>
      </Row>
      <Container fluid className="social">
     
      <a href="https://www.facebook.com/DaKreweduRoux/" target="https://www.facebook.com/DaKreweduRoux/">
            <i className="fa fa-facebook-square" aria-hidden="true"/>
            </a>
          
            
      </Container>
      <Container fluid className="words">
      <h4>Follow Da Krewe du Roux on Facebook</h4>
      </Container>
      <Container className="emailcont">
        
          <Email />
       
      </Container>
    </Container>
  </Styles>
);

export default Contact;
