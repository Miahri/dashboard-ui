import React from 'react';
import s from './CalendarComponent.module.css';
import 'react-calendar/dist/Calendar.css';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {Dayjs} from "dayjs";

type PropsType = {
  date: Dayjs | null
  setDate: (date: Dayjs) => void
}

export const CalendarComponent: React.FC<PropsType> = ({date, setDate}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={s.calendarContainer}>
          <DateCalendar
            value={date}
            onChange={(newValue: Dayjs) => setDate(newValue)}
            slotProps={{
              day: {
                sx: {
                  "&.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "#5954AF"
                  }
                }
              }
            }}
            sx={{
              "color": "#212A34",
              "fontWeight": "bold"
            }}
          />
        </div>
      </LocalizationProvider>
    </>
  );
};




