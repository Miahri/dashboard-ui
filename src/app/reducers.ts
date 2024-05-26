import { combineReducers } from "redux";
import {appReducer} from "../features/application";
import {dashboardReducer} from "../pages/Dashboard";
import {coursesReducer} from "../pages/Courses";
import {teamsReducer} from "../pages/Teams";

export const rootReducer = combineReducers({
  app: appReducer,
  teams: teamsReducer,
  dashboard: dashboardReducer,
  courses: coursesReducer
});