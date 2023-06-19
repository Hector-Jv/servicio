import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
//import "./Menu_no_r.css";
import "./Menu_no_r2.css";

import Alumnos from "../../../pages/Administrador/Alumnos/Alumnos";
import Trayectoria from "../../../pages/Administrador/Trayectoria/Trayectoria";
import TemasInteres from "../../../pages/Administrador/Interes/TemasInteres";
import Inicio from "../../../pages/Administrador/Inicio/Inicio";
import TemasInvestigacion from "../../../pages/Administrador/Investigacion/TemasInvestigacion";
import Contacto from "../../../pages/Administrador/Contacto/Contacto";
import Calendario from "../../../pages/Administrador/Calendario/Calendario";
import Galeria from "../../../pages/Administrador/Galeria/Galeria";
import InfoGaleria from "../../../pages/Administrador/Galeria/InfoGaleria";

function Menu_no_r() {
  return (
    <div class="header">
      <nav id="nav">
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          Dr. Jesús Alberto Martínez Castro
        </label>
        <ul>
          <Link to={ROUTES.INICIO} style={{ textDecoration: "none" }}>
            <li>
              <a href={<Inicio />}>Inicio</a>
            </li>
          </Link>
          <Link to={ROUTES.TRAYECTORIA} style={{ textDecoration: "none" }}>
            <li>
              <a href={<Trayectoria />}>Trayectoria</a>
            </li>
          </Link>
          <Link to={ROUTES.GALERIA} style={{ textDecoration: "none" }}>
            <li>
              <a href={<InfoGaleria />}>Galeria</a>
            </li>
          </Link>
          <Link to={ROUTES.INVESTIGACIÓN} style={{ textDecoration: "none" }}>
            <li>
              <a href={<Calendario />}>Calendario</a>
            </li>
          </Link>
          <Link to={ROUTES.ALUMNOS} style={{ textDecoration: "none" }}>
            <li>
              <a href={<Alumnos />}>Alumnos</a>
            </li>
          </Link>
          <Link to={ROUTES.INTERES} style={{ textDecoration: "none" }}>
            <li>
              <a href={<TemasInteres />}>Temas de interés</a>
            </li>
          </Link>
          {/*<Link to={ROUTES.CONTACTO} style={{ textDecoration: "none" }}>
            <li>
              <a href={<Contacto />}>Contacto</a>
            </li>
  </Link>*/}
        </ul>
      </nav>
    </div>
  );
  /*return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <a href="#" class="enlace">
        <div class="logo">Dr. Jesús Alberto</div>
      </a>
      <ul>
        <li>
          <a class="active" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Portafolio</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );*/
}

export default Menu_no_r;
