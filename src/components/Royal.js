import React from "react";
import {} from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Jumbo from "./Jumbo";
import MMXVIII from "./MMXVIII";
import MMXIX from "./MMXIX";

const Styles = styled.div`
  .nav {
    background-color: transparent;
    margin: 2rem;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #f9b615;
    text-align: center;
    padding: 2rem;
    &:hover {
      color: #602d8f;
      text-decoration: underline;
    }
  }
  .nav-link {
    padding-top: 14px;
    font-size: 1.3rem;
  }
  .textcont {
    padding-top: 30px;
  }
  .title {
    font-weight: bold;
    text-align: center;
    padding-top: 20px;
  }
  .royaltext {
    text-align: center;
  }
  tr{
    background: #34B44A30;
    text-align: center;
    
  }
  .table-bordered td, .table-bordered th{
   
    border-bottom: 2px solid #602D8F80;
  }
  .tablecont{
  
  }
  h1{
    color: #34b44a;
    text-shadow 2px 2px #602d8f;
    
    }
.tbody{
  width: 50%;
}
`;

const Royal = () => (
  <Styles>
    <Container fluid>
      <Jumbo />
    </Container>
    <Container className="title">
      <h1>Royal Court</h1>
    </Container>

    <Container fluid>
      <Tabs defaultActiveKey="MMXIX" id="uncontrolled-tab-example">
        <Tab eventKey="MMXIX" title="MMXIX">
          <MMXIX />
          <Container className="textcont">
            <p>
              Queen du Roux - Lauren Anding, King du Roux - Brandon Capelo, Lady
              du Roux - Savanna Cashi, Lord du Roux - Stephen Guidry, Princess
              du Roux - Mysty Nauck, Prince du Roux - Mark Cashi, Duchess du
              Roux - Kelly Fowler, Duke du Roux - Lee Johnson, Baroness du Roux
              - Jenna Lussier, Baron du Roux - Jared Nauck
            </p>
          </Container>{" "}
        </Tab>

        <Tab eventKey="MMXVIII" title="MMXVIII">
          <MMXVIII />
          <Container className="royaltext">
            <p>
              Queen du Roux - Danielle Guidry, King du Roux - Daniel Guidry,
              Lady du Roux Brittany Roca, Lord du Roux - Brandon Capelo,
              Princess du Roux - Leslie Daniels, Prince du Roux - Jared Nauck,
              Duchess du Roux - Cindy Anderson, Duke du Roux - Roman Munoz,
              Baroness du Roux - Veronica Saxon, Baron du Roux - Stephen Guidry
            </p>
          </Container>
        </Tab>
      </Tabs>
    </Container>
  </Styles>
);

export default Royal;
