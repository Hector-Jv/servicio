import React, { useState } from "react";

//import { IconName } from "react-icons/fa";

import "./TemasInteres.css";
import tipo from "./Temas";

function TemasInteres() {
  const [datos, setDatos] = useState(0);

  const handlerCargarDatos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);

    setDatos(opcion);
  };

  return (
    <div className="informacionTema">
      <br />
      <br />
      <div className="informacionTrabajos">
        <select
          name="tipo"
          id="seltipo"
          onClick={handlerCargarDatos}
          className="trabajos"
        >
          {tipo.map((item, i) => (
            <option key={"tipo" + i} value={i}>
              {item.nombre}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />
        {tipo[datos].datos.map((item, i) => (
          <div className="infoTrabajo">
            <table className="tablaTrabajosAlumno">
              <tr>
                <td className="celdaNombre celda">
                  <div className="nombreTrabajo">{item}</div>
                </td>
                <td className="celdaAño celda">
                  <a
                    href={`${tipo[datos].enlace[i]}`}
                    className="descargarCurriculum"
                    target="_blank"
                  >
                    Ver
                  </a>
                </td>
              </tr>
            </table>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default TemasInteres;
