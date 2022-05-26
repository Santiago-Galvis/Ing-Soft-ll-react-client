import React from "react";
import Img from "../../assets/img/png/photo.png";

import "./Index.scss";

export default function index() {
  return (
    <div class='card'>
      <div class='card__header'>
        <img src={Img} width='600'></img>
      </div>
      <div class='card__body'>
        <br />
        <span>Technology</span>
        <h4>Santiago Galvis</h4>
        <p>
          Estudiante de Ingenieria en Sistemas de la Universidad Autonoma de
          Manizales!
        </p>
      </div>
    </div>
  );
}
