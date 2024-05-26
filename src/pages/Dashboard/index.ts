import {asyncActions as dashboardAsyncActions, slice as dashboardSlice} from './dashboard-reducer'

const dashboardActions = {
  ...dashboardAsyncActions,
  ...dashboardSlice.actions
}

const dashboardReducer  = dashboardSlice.reducer

export {
  dashboardActions,
  dashboardReducer
}