import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }
`;

export const Layout = props => (
  <Styles>
    <Container fluid>{props.children}</Container>
  </Styles>
);
