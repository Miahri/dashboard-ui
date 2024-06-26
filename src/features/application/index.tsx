import * as appSelectors from './selectors'
import {RequestStatusType as T1, slice} from './application-reducer'

const appReducer = slice.reducer
const actions = slice.actions

const appActions = {
  ...actions
}
export type RequestStatusType = T1

export {
  appSelectors,
  appReducer,
  appActions
}