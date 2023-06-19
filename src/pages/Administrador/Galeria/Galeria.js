import axios from "axios";
import React from "react";

import { useEffect } from "react";

import datos from "./Datos";
import Modal from "./Modal";
import { ROUTES } from "../../../constants/routes";
import { useState } from "react";

import "./Galeria.css";

function Galeria() {
  const [clickImage, setClickImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  console.log("datos son: ", datos);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImage(item.ubicacion);
  };

  const handleRotationRight = () => {
    const totalLength = datos.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = datos[0].ubicacion;
      setClickImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].ubicacion;
    setClickImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = datos.length;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = datos[totalLength - 1].ubicacion;
      setClickImage(newUrl);
    }
    const newIndex = currentIndex - 1;
    const newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].ubicacion;
    setClickImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="row">
      {datos.map((image, index) => (
        <div key={index} className="cardGaleria">
          {image.ubicacion != "" && (
            <img
              src={require(`./img/${image.ubicacion}`)}
              alt="Imagen del alumno"
              className="imagenTrayectoria "
              onClick={() => handleClick(image, index)}
            />
          )}
        </div>
      ))}
      {clickImage && (
        <Modal
          clickImage={clickImage}
          handleRotationRight={handleRotationRight}
          setClickImage={setClickImage}
          handleRotationLeft={handleRotationLeft}
        />
      )}
    </div>
  );
}

export default Galeria;
