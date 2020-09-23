import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-es'
import Navbar from '../ui/Navbar'
import CalendarEvent from './CalendarEvent'

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Leonardo'
    }
  }
]

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )

  const onDoubleClick = e => {
    console.log('onDoubleClick: ', e)
  }

  const onSelectEvent = e => {
    console.log('onSelectEvent: ', e)
  }

  const onViewChange = e => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
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
        components={{ event: CalendarEvent }}
        endAccesor="end"
        eventPropGetter={eventStyleGetter}
        events={events}
        localizer={localizer}
        messages={messages}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        startAccesor="start"
      />
    </div>
  )
}

export default CalendarScreen
