import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { isAfter, parseISO } from 'date-fns/esm';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { Link, useParams } from 'react-router-dom';
import { CalendarConteiner } from './styles'

export const Calendar = ({ selectedDate, setSelectedDate }) => {
    const [monthAvailability, setMonthAvailability] = useState([]);

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleDateChange = useCallback((day, modifiers) => {
        if (modifiers.available && !modifiers.disabled) {
          setSelectedDate(day);
        }
      }, []);
    const handleMonthChange = useCallback((month) => {
         setCurrentMonth(month);
      }, []);

 
    
    const disabledDays = useMemo(() => {
        const dates = monthAvailability
          .filter(monthDay => monthDay.available === false)
          .map(monthDay => {
            const year = currentMonth.getFullYear();
            const month = currentMonth.getMonth();
            return new Date(year, month, monthDay.day);
          });
    
        return dates;
      }, [currentMonth, monthAvailability]);
    return (
        <CalendarConteiner>
        <DayPicker
    weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
    fromMonth={new Date()}
    disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
    modifiers={{
      available: { daysOfWeek: [1, 2, 3, 4, 5] },
    }}
    onMonthChange={handleMonthChange}
    onDayClick={handleDateChange}
    selectedDays={selectedDate}
    months={[
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]}
  />
        </CalendarConteiner>
    )
}