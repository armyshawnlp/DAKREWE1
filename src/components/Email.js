import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Styles = styled.div`
.btn-primary{
  border-color: #602d8f;
    background-color: #34b44a;
}
`;

const Email = () => (
  <Styles>
    <Container fluid>
      <Form>
        <Form.Row>
          <Col-6 />
          <Form.Group as={Col } controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col } controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Form.Row>


        <Form.Row>
        <Col-6  />
        <Form.Group as={Col } controlId="exampleForm.ControlMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Col justify-content-md-center />
        <Button variant="primary" type="submit">
          Send Message
        </Button>
        </Form.Row>
      </Form>
    </Container>
  </Styles>
);
export default Email;
