import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AOS from 'aos';


it("renders without crashing", () => {
  const div = document.createElement("div");
  AOS.init({
    once: true
  });
  ReactDOM.render(
 
      <App />
  
    ,div
  );
  ReactDOM.unmountComponentAtNode(div);
});


