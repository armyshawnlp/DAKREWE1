import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin: 0px;
  }
  .jumbotron {
    background-color: black;
    width: 100%;
    margin: 0;
    padding: 0rem;

    

  }
  .row {
    margin: 0;
  }
  .container-fluid {
    padding: 0;
  }
  .w-100 {
    height:10em;
  }
`;

const Jumbo = () => (
  <Styles>
    <Container fluid>
      <Row>
        <Jumbotron fluid>
          <Image
            fluid
            src="https://i.imgur.com/PwIKmQO.png"
            className="w-100"
          />
          <Card fluid className="jumfoot" />
        </Jumbotron>
      </Row>
    </Container>
  </Styles>
);

export default Jumbo;
