import React from 'react';
import { connect } from  'react-redux';
import { startLogin } from '../actions/auth';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Styles = styled.div`
  .Container {
    margin: 80px;
    padding: 30px;
    background-color: #602d8f;
  }
`;

export const LoginPage = ({ startLogin}) => (
    <Styles>
    <ButtonToolbar>
  
        <Button onCLick={startLogin}>Logiiiiin</Button>
    
  



    </ButtonToolbar>
    </Styles>
);

const mapDispatchToProps = (dispatch) => ({

startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);