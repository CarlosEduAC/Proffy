import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/39505695?s=460&u=cc77bfc84338eb337b9376d6af46ba73ce374fc7&v=4"
          alt="Carlos Eduardo Cardoso"
        /> 
        <div>
          <strong>Carlos Eduardo Cardoso</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Aulas de Matemática bem estruturadas e prática.
        <br /> <br />
        Acabe com o seu medo pela matemática com aulas super didáticas e com um preço camarada. 
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 55,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;