import {asyncActions as teamsAsyncActions, slice as teamsSlice} from './teams-reducer'

const teamsActions = {
  ...teamsAsyncActions,
  ...teamsSlice.actions
}

const teamsReducer  = teamsSlice.reducer

export {
  teamsActions,
  teamsReducer
}