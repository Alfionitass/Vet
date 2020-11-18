import { combineReducers } from 'redux'
import authReducers from './auth';
import appointmentReducers from './appointment'

export default combineReducers({
  Auth: authReducers,
  Appointment: appointmentReducers,
})