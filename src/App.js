import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppBase from "./AppBase";
import Layout from "./components/Layout/Layout";

function App() {
  let role = "admin";
  return (
    <BrowserRouter>
      <Layout role={role}>
        <AppBase role={role} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
