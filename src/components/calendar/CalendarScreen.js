import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux'

import { messages } from '../../helpers/calendar-messages-es'
import { uiOpenModal } from '../../actions/ui'
import Navbar from '../ui/Navbar'
import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'
import { eventClearActiveNote, eventSetActive } from '../../actions/events'
import AddNewFab from '../ui/AddNewFab'
import DeleteEventFab from '../ui/DeleteEventFab'

const localizer = momentLocalizer(moment)

const CalendarScreen = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector(state => state.calendar)

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )

  const onDoubleClick = e => {
    console.log('onDoubleClick: ', e)
    dispatch(uiOpenModal())
  }

  const onSelectEvent = e => {
    dispatch(eventSetActive(e))
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

  const onSelectSlot = e => {
    console.log(e)
    dispatch(eventClearActiveNote())
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
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        startAccesor="start"
      />
      <AddNewFab />
      {!!activeEvent && <DeleteEventFab />}
      <CalendarModal />
    </div>
  )
}

export default CalendarScreen
