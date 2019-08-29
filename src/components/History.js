import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbo from "./Jumbo";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  .founderow {
    text-align: center;
  }

  .founders {
    text-align: center;
  }

.row{
  display: flex;
  align-items:center;
  align-items: flex-start;
  
}
  .mr-3 {
    padding-top: 15px;
  }
  .title {
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .founderscont {
    margin-top: 5vh;
    margin-bottom: 40px;
  }

  .imagecol img {
    margin: 10px;
    border: 3px solid #000;
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
        object-fit: cover;
  }
  .imagecol {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-height: 100vh;
    object-fit: cover;
    align-content: center;
    align-items:center;
    
    
  }
 
  .bodycont {
    display: flex;
    align-items: stretch;
    margin-bottom: 20px;
    text-align: left;
    justify-content: center;
    font-size: 1.04em;
    flex-wrap: wrap;
    flex-flow: row wrap;
    flex-direction: row;
    align-items: center;
  }
  .bodycol1{
    flex-shrink: 1;
  }
  .bodycol2{
    flex-shrink: 2;
  }
  h1, h2{
    color: #602d8f;
    }
.foundersnamesrow{
  display: flex;
  justify-content:center;
  flex-wrap: nowrap;
  align-items: center;
  
}
.foundersnamesrow .col{
  text-align: center;
}
p {
  font-size: 1.1em;
}
 
`;

const History = () => (
  <Styles>
    <Container fluid>
      <div>
        <Jumbo />
      </div>
    </Container>

    <Container className="title">
      <h1>Da Krewe du Roux History</h1>
    </Container>
    <Container fluid className="bodycont">
      <Row>
        <Col xs={12} md={8} className="bodycol1">
          <Container>
            <p>
              Da Krewe du Roux was founded in 2017, to bring the original
              spirit, festivities, and traditions of Mardi Gras to the city of
              Galveston. Da Krewe du Roux’s original 40 members were the first
              Krewe to hold a traditional, old-school, rural Louisiana Mardi
              Gras Chicken Run on the Island. <p />
              The first annual Courir de Mardi Gras was held at Tin Cup’s Caddy
              Shack on Stewart Road and all families and children were invited
              to learn about this spectacular event. A first for the Island’s
              celebrations and many more to come! The Mardi Gras Chicken Run is
              a tradition that’s over 250 years old and is held in predominantly
              Cajun (Acadian) communities in Central and Southern Louisiana.
              Begun as a last shout before the Lenten season, in which Catholic
              leaders and rules were mocked and indiscretions flaunted, it soon
              became a celebration feeding the community. These celebrations
              have grown in each area as a celebration of each community’s best,
              providing opportunity for those of all cultures to come together.
              The Chicken Run begins with an overview of the rural Mardi Gras
              tradition in French and English. Following the Krewe’s
              performance, attendees will participate in a traditional chicken
              run, typically organized by age group. The one who gets the
              chicken will win a special prize.
              <p /> “This is the poor man’s Mardi Gras,” said Danielle Guidry,
              co-founder of the Krewe and 2018’s Queen du Roux. “We’ll visit,
              beg, borrow, sing, dance, do whatever the tradition says to get
              what we need for a big gumbo. You can always spot us in ragged,
              colorful Mardi Gras costumes and “fringed material” as we
              represent our true rural Louisiana traditions.”
              <p /> Da Krewe du Roux also hosts Da Island Dirty Birdie Charity
              Classic Golf Tournament at Moody Gardens in the fall. “This is not
              your typical golf tournament” says Daniel Guidry, co-founder of
              the Krewe and 2018’s King du Roux. The inaugural event in 2018 was
              a huge success and the Krewe looks forward to hosting this event
              for many years to come. Da Krewe du Roux holds their annual formal
              attire Mardi Gras ball at the kickoff of carnival season. “We have
              an original New Orleans tradition of a Second Line at our ball. We
              dance and parade with decorated umbrellas and invite all of our
              guests to experience it. A traditional Brass Band leads us through
              the crowds and we celebrate the coronation of our Royal Court
              while we dance and show-off” says Cindy Anderson, co-founder of
              the Krewe and 2018’s Royal Court Duchess du Roux.
              <p /> Da Krewe du Roux is a non-profit organization benefiting El
              Mina Shriners of Galveston, Ronald McDonald House, and The
              American Heart Association. Representing Gulf Coast Counties. In
              order to withstand the Louisiana traditions, Da Krewe du Roux
              requires a certain percentage of their members to have Louisiana
              Roots and be approved by their mascot Gumbeaux the Chicken. They
              also have a children’s Mardi Gras Krewe for their children and
              grandchildren called Da Krewe du Roux Too (because our children
              love our Mardi Gras traditions too) !
            </p>
          </Container>
        </Col>
        <Col auto className="bodycol2">
          <Container className="imagecol">
            <div className="list-unstyled">
              <div as="li1">
                <img
                  fluid
                  width={300}
                  height={300}
                  className="mr-3"
                  src="https://i.imgur.com/rZoGngs.jpg"
                  alt="Generic placeholder"
                />
              </div>

              <div as="li2">
                <img
                  fluid
                  width={300}
                  height={300}
                  className="mr-3"
                  src="https://dakreweduroux.org/wp-content/uploads/2019/01/founders1-1024x683.jpg"
                  alt="Generic placeholder"
                />
              </div>

              <div as="li3">
                <img
                  width={300}
                  height={300}
                  className="mr-3"
                  src="https://dakreweduroux.org/wp-content/uploads/2019/01/founders2.jpg"
                  alt="Generic placeholder"
                />
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>

    <hr />
    <Container className="founderscont">
      <Row>
        <Col>
          <hr />
        </Col>
        <Col className="founders">
          <h2>Founders</h2>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>

    <Container>
      <Card>
        <Card.Img
          variant="top"
          src="https://i.imgur.com/Xh12yVt.jpg/100px180"
        />
        <Card.Body>
          <Card.Text>
            <Row className="foundersnamesrow">
              <Col><h5>Cindy Anderson</h5></Col>
              <Col>
      <Image src="https://i.imgur.com/sifjBuI.png" />
    </Col>
              <Col>
                <h5>  Daniel Guidry </h5>   <div className="fleur">     </div>
              </Col>
              <Col>
      <Image src="https://i.imgur.com/sifjBuI.png" />
    </Col>
              <Col><h5> Danielle Guidry</h5></Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Container>
  </Styles>
);

export default History;
