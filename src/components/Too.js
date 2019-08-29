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
  .imagerow {
    display: flex;
    align-content: space-between;
    align-items: center;
  }
  .image {
    padding: 5 px;
  }
`;

const Too = () => (
  <Styles>
    <Container fluid>
      <Jumbo />

      <Container fluid className="title">
        <h1>Da Krewe du Roux Too</h1>
      </Container>
      <Container fluid>
        <Row flex className="imagerow">
          <Col>
            <Image src="https://i.imgur.com/c14CSVj.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/c14CSVj.jpg" />
          </Col>
          <Col>
            <Image src="https://i.imgur.com/c14CSVj.jpg" />
          </Col>
        </Row>
      </Container>
    </Container>
  </Styles>
);

export default Too;
