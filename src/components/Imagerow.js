import React from "react";

import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  .cont {
    display: flex;
    min-height: 10vh;
    align-items: center;
    flex-wrap: wrap
    justify-content: center;
  }

  .row {
  }
  .im {
    width: 40vh;
    height: 40vh;
    margin: 30px;
    box-shadow: 4px 7px 45px -10px rgba(0, 0, 0, 0.3);
    border-radius: 7px;
  }

  /* Small screens */
  @media (max-width: 500px) {
    .navigation {
      /* On small screens, we are no longer using row direction but column */
      flex-direction: column;
    }
  }
`;
const Imagerow = () => (
  <Styles>
    <Container fluid className="cont">
      <Image src="https://i.imgur.com/8szJOVX.jpg" className="im" />

      <Image src="https://i.imgur.com/hTc10z2.jpg" className="im" />

      <Image src="https://i.imgur.com/uQvSuha.jpg" className="im" />
    </Container>
  </Styles>
);

export default Imagerow;
