import {asyncActions as coursesAsyncActions, slice as coursesSlice} from './courses-reducer'

const coursesActions = {
  ...coursesAsyncActions,
  ...coursesSlice.actions
}

const coursesReducer  = coursesSlice.reducer

export {
  coursesActions,
  coursesReducer
}