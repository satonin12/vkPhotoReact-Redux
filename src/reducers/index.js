import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'

// export const initialState = {
//   user: {
//     name: 'Владислав',
//     surname : 'Сатонин',
//     age: 21
//   }
// }

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})

// export function rootReducer(state = initialState) {
//   return state
// }
