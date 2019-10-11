import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'

const initialState = {
  // eslint-disable-next-line no-undef
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
      // eslint-disable-next-line no-undef
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state
  }
}
