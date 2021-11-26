import { render } from "@testing-library/react";
import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";


function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
