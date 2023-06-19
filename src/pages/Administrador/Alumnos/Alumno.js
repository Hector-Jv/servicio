import React, { useState } from "react";

import "./Alumno.css";
import InfoAlumno from "./InfoAlumno";
import { ROUTES } from "../../../constants/routes";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Alumno(props) {
  const navigate = useNavigate();
  //const {(profileImageSrc, name, grade, description, studentItems)} = studentData;
  console.log("de cada alumno son: ", props);
  const [nombre] = useState(props.items.nombre);
  const [grado] = useState(props.items.grado);
  const [interes] = useState(props.items.interes);
  const [laboratorio] = useState(props.items.laboratorio);
  const [correo] = useState(props.items.correo);
  const [telefono] = useState(props.items.telefono);
  const [imagen] = useState(props.items?.imagen);
  const [tipo] = useState(props.items.tipo);
  const info = {
    nombre,
    grado,
    interes,
    laboratorio,
    correo,
    telefono,
    imagen,
    tipo,
  };
  //console.log("props: ", props);
  return (
    <div className="conteneroInfoAlumno">
      <div className="infoAlumno">
        <div className="contenedorImagen item_alumno">
          {/*//pathname: `${ROUTES.INFOALUMNO}/${nombre}`,*/}
          <Link to={`${ROUTES.INFOALUMNO}/:id`} state={info}>
            {/*<Link to={ROUTES.INFOALUMNO} state={"any type"}>*/}
            <a href={<InfoAlumno />}>
              {imagen != "" && (
                <img
                  src={require(`./img/${imagen}`)}
                  alt="Imagen del alumno"
                  className="imagenAlumno"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="info">
          <div className="nombreAlumno">{nombre}</div>
          <br /> <br />
          <div>Grado de estudio: {grado}</div>
          <br />
          <div>Tesis: {"Estudio de"}</div>
          <br />
          <div>Áreas de interés: {interes}</div>
          <br />
          <div>Laboratorio: {laboratorio}</div>
          <br />
          <div>
            Contacto {correo}, {telefono}
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Alumno;
