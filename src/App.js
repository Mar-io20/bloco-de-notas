import { render } from "@testing-library/react";
import React from "react";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </form>

      <ul>
        <li>
          <section>
            <h3>Titulo</h3>
            <p>Escreva sua nota</p>
          </section>
        </li>
        <li>
          <section>
            <h3>Titulo</h3>
            <p>Escreva sua nota</p>
          </section>
        </li>
        <li>
          <section>
            <h3>Titulo</h3>
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default App;
