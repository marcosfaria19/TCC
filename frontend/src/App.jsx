import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-dom";
import Header from "./Header"; // Importe o componente Header
import Footer from "./Footer"; // Importe o componente Footer
import Home from "./Home"; // Importe o componente Home
import OutrasPaginas from "./OutrasPaginas"; // Importe outros componentes de páginas

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Renderize o componente Header em todas as páginas */}
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />{" "}
          {/* Rota para a página inicial */}
          <Route
            path="/outras-paginas"
            component={OutrasPaginas}
          />{" "}
          {/* Exemplo de outra página */}
          {/* Adicione mais rotas para outras páginas conforme necessário */}
        </Switch>
        <Footer /> {/* Renderize o componente Footer em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;
