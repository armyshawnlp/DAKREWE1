import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Blog from "./Blog";
import Row from "react-bootstrap/Row";
import Jumbo from "./Jumbo";

const Styles = styled.div``;

const Donation = () => (
  <Styles>
       <Container fluid>
      <div>
        <Jumbo />
      </div>
    </Container>
    <Container>
  
      <Row style={{ padding: "80px" }}>
        <Col className="col1" />
        <Col xs={6} className="coltext">
          <h1>Da Krewe du Roux Blog</h1>
        </Col>
        <Col className="col1" />
      </Row>
      <Row>
        <Col />
        <Col md={{ span: 9, offset: 2 }}>
          <Blog />
        </Col>
        <Col />
      </Row>
     </Container>
  </Styles>
);
export default Donation;
