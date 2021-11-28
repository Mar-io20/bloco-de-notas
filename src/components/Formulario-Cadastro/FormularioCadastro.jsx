import React from "react";
import { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="titulo"
        />
        <textarea
          className="form-cadastro_submit"
          placeholder="Escreva sua nota..."
        />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
