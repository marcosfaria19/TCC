import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./Routes";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Rotas />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
