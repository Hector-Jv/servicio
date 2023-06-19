import React from "react";

import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto">
      <br />
      <br />
      <div>
        <label className="titulo">Contacto</label>
        <br />
        <br />
        <div className="correo">
          <div className="etiqueta"> Asunto</div>{" "}
          <input className="inputEntrada"></input>
        </div>
        <br />
        <div className="correo">
          <div className="etiqueta"> Correo</div>{" "}
          <input className="inputEntrada"></input>
        </div>
        <br />
        <div className="mensaje">
          <div className="etiqueta">Mensaje</div>
          <textarea className="textMensaje"></textarea>
        </div>
        <br />
        <br />

        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Contacto;
