import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Jumbo from "./Jumbo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  .title {
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .imagewrap {
    padding: .5vw;
  font-size: 0;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -ms-flex-direction: column;
  -webkit-flex-flow: row wrap; 
  flex-flow: row wrap; 
  display: -webkit-box;
  display: flex;
  }
  .image {
   width: 100%; 
  height: auto;
  }
`;

const Ruff = () => (
  <Styles>
    <Container fluid>
      <Jumbo />

      <Container fluid className="title">
        <h1>Da Krewe du Ruff</h1>
      </Container>
      <Container fluid className="imagewrap">
        <Row flex className="imagerow">
          <Col>
            <Image src="https://i.imgur.com/dNxEdPp.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/6JrtEaT.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/qvgJqOm.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/uWzbQws.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/SgS4Ern.jpg?1" />
          </Col>
        </Row>
      </Container>
    </Container>
  </Styles>
);

export default Ruff;
