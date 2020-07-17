import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="main-body">
      <Header />
      <Route path="/" component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
