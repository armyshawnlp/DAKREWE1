import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styled from "styled-components";



const Styles = styled.div`
  .eventlink {
    padding-top: 45px;
  }
  .btn-outline-primary {
    border-color: #602d8f;
    background-color: #34b44a;
    
  }
  .card-header,
  .card-footer {
    border-color: #602d8f;
    background-color: #602d8f;
    width: 100%;
    color: white;
  }
  .text{
    color: white;
  }
  .button{
    width:50px:
  }
  .card-title{
    
    color: #602d8f;
  
  }
`;

const Event = () => (
  <Styles>
    <Container fluid>
      <Card className="text-center eventlink">
        <Card.Header />
        <Card.Body>
          <Card.Title>Da Island Dirty Birdie Charity Classic</Card.Title>
          <Card.Text>Friday, Sep 27, 2019 at 7:00AM</Card.Text>
          <Image src="https://i.imgur.com/bgnK6jD.png/171x180" rounded />
          <Button
            variant="outline-primary"
            size="lg"
            block
            href="https://dirtybirdie.ezevent.com/"
          >
          <Container className="text">
            Purchase Your Tickets
            </Container>
          </Button>
          <Button
            variant="outline-primary"
            size="md"
            block
            href="https://www.facebook.com/events/319357478733703/"
          >
          <Container className="text">
            Event Facebook Link
            </Container>
          </Button>
        </Card.Body>
        <Card.Footer>
          Upcoming events:{" "}
          <p>Formal Ball January 25, 2020 at The Tremont House</p>
          <p>Da Chicken Run February 8, 2020 at Tin Cup's Caddy Shack</p>
        </Card.Footer>
      </Card>
    </Container>
  </Styles>
);

export default Event;
