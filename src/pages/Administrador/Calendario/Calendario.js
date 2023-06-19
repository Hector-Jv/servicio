import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Calendario.css";

const locales = {
  //"en-US": require("date-fns/locale/en-US"),
  es: require("date-fns/locale/es"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 4, 0),
    end: new Date(2023, 4, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 4, 2),
    end: new Date(2023, 4, 2),
  },
  {
    title: "Conference",
    start: new Date(2023, 4, 20),
    end: new Date(2023, 4, 23),
  },
];

function Calendario() {
  return (
    <div className="App">
      <h1 className="tituloCalendario">Calendario</h1>
      <div></div>
      <Calendar
        className="calendario"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default Calendario;
