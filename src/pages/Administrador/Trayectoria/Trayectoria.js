import React from "react";

import "./Trayectoria.css";
import Profesor from "./img/profilepic.jpg";
import hawc from "./img/Hawc.jpg";

function Trayectoria() {
  return (
    <div>
      <div className="trayectoria">
        <section class="imagenTrayectoria">
          <img
            className="imagenTrayectoriaHawc"
            src={hawc}
            alt="Imagen de la institución"
          />
          <div className="nombre">Dr. Jesús Alberto Martínez Castro</div>
        </section>
        <div className="nombreOculto">Dr. Jesús Alberto Martínez Castro</div>
        <br />
        <br />
        <br />
        <div className="informacion">
          <div className="contenedorImagenTrayectoria">
            <img src={Profesor} className="imagenProfesor" alt="" />
          </div>
          <div className="contenedorInfo">
            Miembro del Sistema Nacional de Investigadores (I), actualmente
            colabora con el experimento HAWC (High Altitude Water Cherenkov; con
            sede en la Sierra Negra, en los límites entre Veracruz y Puebla.
            <br />
            <br />
            Jesús, ha sido profesor del Instituto Politécnico Nacional desde
            Septiembre de 1995 a la fecha y se encuentra adscrito al Centro de
            Investigación en Computación como Profesor Titular C (Categoría
            Máxima que otorga el IPN). <br />
            <br />
            Jesús, también ha sido evaluador de artículos en diversas revistas
            adscritas al Journal of Citation Report. Su especialidad es Física
            Nuclear y Partículas elementales de altas energías aunque ha
            colaborado también en proyectos interdisciplinarios
            (Física-Medicina-Cómputo) y en proyectos de computación paralela y
            distribuida (Actualmente colaborando con el desarrollo de la GRID,
            la cual es considerada como la siguiente generación de Internet).
          </div>
        </div>

        <a
          className="contenedorInfo perfil"
          href="https://ipn.elsevierpure.com/es/persons/jes%C3%BAs-alberto-mart%C3%ADnez-castro"
        >
          {" "}
          Perfil{" "}
        </a>
        <div className="proyectos"></div>
      </div>
      {/*<InicioAlumno></InicioAlumno>
      <Alumno></Alumno>
  <Alumno></Alumno>*/}
    </div>
  );
}

export default Trayectoria;
