import React from "react";

import alumno1 from "./img/alumno1.jpg";
import alumno2 from "./img/alumno2.jpg";
import alumno3 from "./img/alumno3.jpg";
import alumno4 from "./img/alumno4.jpg";
import alumno5 from "./img/alumno5.jpg";
import alumno6 from "./img/alumno6.jpg";

//import "./Alumnos.css";

function InicioAlumno() {
  return (
    <div>
      <section class="contenedor-img">
        <div class="texto-sobre-imagen">Alumnos</div>
        <div class="galeria">
          <div class="galeria_item">
            <img src={alumno1} alt="Imagen de alumnos 1" />
          </div>
          <div class="galeria_item">
            <img src={alumno2} alt="Imagen de alumnos 2" />
          </div>
          <div class="galeria_item">
            <img src={alumno3} alt="Imagen de alumnos 3" />
          </div>
          <div class="galeria_item">
            <img src={alumno4} alt="Imagen de alumnos 4" />
          </div>
          <div class="galeria_item imagen5">
            <img src={alumno5} alt="Imagen de alumnos 5" />
          </div>
          <div class="galeria_item imagen6">
            <img src={alumno6} alt="Imagen de alumnos 6" />
          </div>

          <div class="galeria_item imagen8">
            <img src={alumno2} alt="Imagen de alumnos 2" />
          </div>
          <div class="galeria_item imagen7">
            <img src={alumno1} alt="Imagen de alumnos 1" />
          </div>
        </div>
      </section>

      <section class="contenedor-alumnos">
        <h2>Trabajos de los alumnos</h2>

        <div class="cards-alumnos" id="cards-alumnos"></div>
      </section>
    </div>
  );
}

export default InicioAlumno;
