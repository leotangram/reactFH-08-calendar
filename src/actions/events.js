import { fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'

export const eventStartAddNew = event => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth
    try {
      const response = await fetchWithToken('events', event, 'POST')
      const body = await response.json()
      if (body.ok) {
        event.id = body.event.id
        event.user = {
          _id: uid,
          name
        }
        dispatch(eventAddNew(event))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const eventAddNew = event => ({
  type: types.eventAddNew,
  payload: event
})

export const eventSetActive = event => ({
  type: types.eventSetActive,
  payload: event
})

export const eventClearActiveNote = () => ({
  type: types.eventClearActiveEvent
})

export const eventUpdated = event => ({
  type: types.eventUpdates,
  payload: event
})

export const eventDeleted = () => ({
  type: types.eventDeleted
})
