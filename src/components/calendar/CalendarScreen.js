import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-es'
import Navbar from '../ui/Navbar'

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel'
  }
]

const CalendarScreen = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(
      'event: ',
      event,
      'start: ',
      start,
      'end: ',
      end,
      'isSelected: ',
      isSelected
    )
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: '#ffffff'
    }

    return { style }
  }

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  )
}

export default CalendarScreen
