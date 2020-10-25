import React, { Children } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { eo, es, enUS } from "date-fns/locale";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const CalendarUi = React.memo((props) => {
  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <div style={{ height: props.height ? props.height : 700 }}>
      <DragAndDropCalendar
        defaultView="month"
        selectable
        toolbar
        popup={true}
        views={props.views}
        eventPropGetter={props.eventStyle}
        events={props.eventCalendar}
        localizer={localizer}
        resizable={true}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 16, 0, 0)}
        components={{
          dateCellWrapper: props.styleComponents,
        }}
        onSelectEvent={props.updateEvent}
        onSelectSlot={props.newEvent}
      />
    </div>
  );
});

export default CalendarUi;
