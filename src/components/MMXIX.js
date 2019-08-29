import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const MMXIX = () => (
  <Container>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/Y6ujNNS.jpg/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <p />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/lF58MS4.jpg/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/vSgesBb.jpg/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>Presenting our King du Roux & Queen du Roux</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default MMXIX;
