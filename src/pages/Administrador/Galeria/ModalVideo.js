import React from "react";

import "./Galeria.css";

const ModalVideo = ({ clickImage, clickTipo, setClickImage }) => {
  console.log("esta en modal");
  console.log("clickImage: ", clickImage);
  console.log("clickTipo: ", clickTipo);
  console.log("setClickImage: ", setClickImage);
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImage(null);
    }
  };
  if (clickTipo == "Video")
    return (
      <div className="">
        <div className="overlayVideo dismiss row " onClick={handleClick}>
          <video controls className="overlayVideo videoAlumno">
            <source
              src={require(`../Alumnos/${clickImage}`)}
              type="video/mp4"
            ></source>
          </video>

          <span className="dismiss" onClick={handleClick}>
            X
          </span>
        </div>
      </div>
    );
};

export default ModalVideo;
