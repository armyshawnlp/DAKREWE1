import "./index.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Event from "../Event";
import Imagerow from "../Imagerow";
import Blog from "../Blog";

const Home = () => (
  <div>
    <Container fluid>
      <Row className="mainrow">
        <Card className="text-white">
          <div data-aos="zoom-in-down">
            <Card.Img
              fluid="true"
              className="mainpic"
              src="https://i.imgur.com/9W7MHhC.jpg"
              alt="Card image"
            />
          </div>
        </Card>
      </Row>

      <Event />
      <Imagerow />
    </Container>
    <Blog />

    <hr />
    <Container fluid className="videobackground">
      <Row>
        <Col>
          <div data-aos="flip-up">
            <Container>
              <div style={{ height: "200", padding: "15%" }}>
                <ResponsiveEmbed aspect="a16by9">
                  <embed
                    type="image/svg+xml"
                    async
                    defer
                    crossorigin="anonymous"
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FDaKreweduRoux%2Fvideos%2F293225151203886%2F&show_text=0&width=476"
                  />
                </ResponsiveEmbed>
              </div>
            </Container>
          </div>
        </Col>
        <Col>
          <div data-aos="flip-up">
            <Container>
              <div style={{ height: "200", padding: "15%" }}>
                <ResponsiveEmbed aspect="a16by9">
                  <embed
                    type="image/svg+xml"
                    async
                    defer
                    crossorigin="anonymous"
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FDaKreweduRoux%2Fvideos%2F299549880708809%2F&show_text=0&width=560"
                  />
                </ResponsiveEmbed>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
