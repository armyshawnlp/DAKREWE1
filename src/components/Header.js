import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .nav {
    background-color: transparent;
    margin-bottom: 1rem;
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    text-align: center;
    font-size: 18px;
    justify-content: center;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #f9b615;
    text-align: center;

    &:hover {
      color: #602d8f;
      text-decoration: underline;
    }
  }
  .nav-item {
    text-align: center;
  }
  .navbar-brand {
    padding-top: 2rem;
  }
  .nav-link {
    padding-top: 80px;
    font-size: 1.5rem;
    margin: 9px;
  }
  .navbar-dark .navbar-toggler {
    border-color: #f9b615;
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url(https://i.imgur.com/xDmPbWj.png);
  }
  .navbar-dark {
    background-color: #34b44a;
  }
  @media (min-width: 992px) {
    .navbar-collapse {
      text-align: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 991px) {
    .reactivelogo {
      position: absolute;
      top: 4px;
      left: 16px;
      background-image: url(https://i.imgur.com/qXWE79M.png);
      width: 6em;
      height: 6em;
      z-index: 100;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .nav-link {
    padding-top: 0px;
    font-size: 1.5rem;
    margin: 2px;
  }
  }
  @media (min-width: 992px) {
    .home {
      background-image: linear-gradient(#602d8f, #602d8f),
        // Above css will create background image that looks like a border.
          linear-gradient(transparent, transparent);
      // This will create background image for the container.

      background-repeat: no-repeat;

      /* First sizing pair (4px 50%) will define the size of the border i.e border
     will be of having 4px width and 50% height. */
      /* 2nd pair will define the size of stretched background image. */
      background-size: 4px 45%, calc(100% - 4px) 100%;

      /* Similar to size, first pair will define the position of the border
     and 2nd one for the container background */
      background-position: right bottom, 4px 0;
    }
    .contact {
      background-image: linear-gradient(#602d8f, #602d8f),
        // Above css will create background image that looks like a border.
          linear-gradient(transparent, transparent);
      // This will create background image for the container.

      background-repeat: no-repeat;

      /* First sizing pair (4px 50%) will define the size of the border i.e border
     will be of having 4px width and 50% height. */
      /* 2nd pair will define the size of stretched background image. */
      background-size: 4px 45%, calc(100% - 4px) 100%;

      /* Similar to size, first pair will define the position of the border
     and 2nd one for the container background */
      background-position: left bottom, 4px 0;
    }
  }
`;

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Styles>
    <header>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="justify-content-end"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <div className="reactivelogo" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item className="home">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/history">History</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Navbar.Brand href="/">
                  <img
                    src="https://i.imgur.com/qXWE79M.png"
                    width="100em"
                    height="100em"
                    className="d-inline-block align-top"
                    alt="krewe logo"
                  />
                </Navbar.Brand>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/royal">Royal Court</Nav.Link>
              </Nav.Item>
              <Nav.Item className="contact">
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  </Styles>
);



export default Header;
