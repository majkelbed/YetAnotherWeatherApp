import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router"
import Layout from "@UI/Layout";
import Countries from "@Views/Countries";
import Dashboard from "@Views/Dashboard";

window.onload = function() {
  ReactDOM.render(
          <Layout>
            <Router>
              <Dashboard path="/"></Dashboard>
              <Countries path="/countries"></Countries>
              {/* <NotFound default></NotFound> */}
            </Router>
          </Layout>
    ,
    document.getElementById("wrapper")
  );
};
