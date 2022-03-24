import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app"


function render(renderSide) {
  if (renderSide === "server") {
    ReactDOM.hydrate(<App/>,document.querySelector("#root"))
  }else if (renderSide === "client") {
    ReactDOM.render(<App />, document.querySelector("#root"));
    
  }
}
render("server")