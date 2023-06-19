import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
//import "./App.css";
import "./P.css";
import { ROUTES } from "./constants/routes";

import Inicio from "./pages/Administrador/Inicio/Inicio";
import Alumnos from "./pages/Administrador/Alumnos/Alumnos";
import InfoAlumno from "./pages/Administrador/Alumnos/InfoAlumno";
import Trayectoria from "./pages/Administrador/Trayectoria/Trayectoria";
import TemasInteres from "./pages/Administrador/Interes/TemasInteres";
import Menu_no_r from "./components/Views/Menu/Menu_no_r";
import TemasInvestigacion from "./pages/Administrador/Investigacion/TemasInvestigacion";
import InfoGaleria from "./pages/Administrador/Galeria/InfoGaleria";
import Contacto from "./pages/Administrador/Contacto/Contacto";
import Footer from "./pages/Administrador/Footer/Footer";
import Calendario from "./pages/Administrador/Calendario/Calendario";

function App() {
  return (
    <div className="body">
      <div>
        <Menu_no_r />
      </div>
      <div className="contenido" style={{ padding: "1rem" }}>
        <Routes>
          <Route path={ROUTES.INICIO} element={<Inicio />} />
          <Route path={ROUTES.ALUMNOS} element={<Alumnos />} />
          <Route path={ROUTES.TRAYECTORIA} element={<Trayectoria />} />
          <Route path={ROUTES.INFOALUMNO + "/:id"} element={<InfoAlumno />} />
          <Route path={ROUTES.INVESTIGACIÓN} element={<Calendario />} />
          <Route path={ROUTES.INTERES} element={<TemasInteres />} />
          <Route path={ROUTES.CONTACTO} element={<Contacto />} />
          <Route path={ROUTES.GALERIA} element={<InfoGaleria />} />
          {/*<Route path={ROUTES.CONTACTO} element={<Contacto />} />*/}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
