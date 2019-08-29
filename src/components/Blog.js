import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import H1 from "react-bootstrap/Col";
import BlogForm from "./BlogForm";
import BlogOutput from "./BlogOutput";

const Styles = styled.div`
  .Container-fluid {
    padding-top: 80px;
    background-color: #602d8f;
  }

  .donatetext {
    color: white;
    text-align: right;

    bottom: 0;
    right: 0;
  }
  .card,
  .card-title {
    padding-top: 25px;
    position: relative;
  }

  .card-header,
  .card-footer {
    border-color: #602d8f;
    background-color: #602d8f;
    width: 100%;
    text-align: center;
    color: white;
  }
`;

const Blog = () => (
  <Styles>
    <Container fluid>
      <Row>
        <Col />
        <Col xs={10}>
          <Card fluid>
            <Card.Header fluid as="h3">
              Da Krewe du Roux Blog
            </Card.Header>
            <Card.Body>
              <BlogForm />
              <hr />
              <BlogOutput />
              <Card.Title>2018 Donations</Card.Title>
              <Card.Text>
                2018 Donations El Mina Shriners of Galveston Ronald McDonald
                American Heart Association
              </Card.Text>

              <Container fluid>
                <Accordion defaultActiveKey="1">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Click to see 2018 Donations
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Card className="donatetext">
                          <Card.Img
                            src="https://i.imgur.com/sRf3z7r.jpg/100px270"
                            alt="Card image"
                          />
                          <Card.ImgOverlay>
                            <Card.Title>
                              <div>
                                <H1>El Mina Shriners of Galveston</H1>
                              </div>
                            </Card.Title>
                            <Card.Text />
                            <Card.Text />
                          </Card.ImgOverlay>

                          <Card className="donatetext">
                            <Card.Img
                              src="https://i.imgur.com/S46nIpn.jpg/100px270"
                              alt="Card image"
                            />
                            <Card.ImgOverlay>
                              <Card.Title>
                                <div>
                                  <H1>Ronald McDonald</H1>
                                </div>
                              </Card.Title>
                            </Card.ImgOverlay>
                          </Card>

                          <Card className="donatetext">
                            <Card.Img
                              src="https://i.imgur.com/2E2IuEr.jpg/100px270"
                              alt="Card image"
                            />
                            <Card.ImgOverlay>
                              <Card.Title>
                                <div>
                                  <H1>American Heart Association</H1>
                                </div>
                              </Card.Title>
                              <Card.Text />
                              <Card.Text />
                            </Card.ImgOverlay>
                          </Card>
                        </Card>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Click to see 2019 Donations
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>Donate $$$</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col />
      </Row>
    </Container>
  </Styles>
);
export default Blog;
