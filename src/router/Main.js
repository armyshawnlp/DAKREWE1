import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import History from "../components/History";
import Royal from "../components/Royal";
import Contact from "../components/Contact";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import Event from "../components/Event";
import Ruff from "../components/Ruff";
import Too from "../components/Too";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Blog from "../components/Blog";
import BlogForm from "../components/BlogForm";

const Styles = styled.div`
  .Layout {
  }
`;

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Styles>
    <main>
      <Layout>
        <Switch>
          <Route path="/signin" component={Signin} exact={true} />
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/event" component={Event} />
          <Route path="/royal" component={Royal} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/ruff" component={Ruff} />
          <Route path="/too" component={Too} />
          <Route path="/signup" component={Signup} />
          <Route path="/blogform" component={BlogForm} />
        </Switch>
      </Layout>
    </main>
  </Styles>
);

export default Main;
