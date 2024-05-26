import {createSlice} from "@reduxjs/toolkit";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../../features/commonActions/App";
import {dashboardAPI} from "../../api/dashboard-api";
import {ActivityHourType, SkillType, TopEmployeeType} from "../../api/types";

const {setAppStatus} = appActions;

const fetchActHoursTC = createAppAsyncThunk<{ activityHours: ActivityHourType[] }, undefined>(
  "activityHours/fetchActHoursTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {activityHours: res.data.data.activity_hours};
    });
  });

const fetchTopSkillsTC = createAppAsyncThunk<{ topSkills: SkillType[] }, undefined>(
  "topSkills/fetchTopSkillsTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {topSkills: res.data.data.top_skills};
    });
  });

const fetchTopEmployeesTC = createAppAsyncThunk<{ topEmployees: TopEmployeeType[] }, undefined>(
  "topEmployees/fetchTopEmployeesTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {topEmployees: res.data.data.top_employees};
    });
  });

const fetchAverageScoreTC = createAppAsyncThunk<{ averageScore: number }, undefined>(
  "averageScore/fetchAverageScoreTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {averageScore: res.data.data.average_employee_score};
    });
  });

const fetchCompletedCoursesTC = createAppAsyncThunk<{ totalCompletedCourses: number }, undefined>(
  "totalCompletedCourses/fetchCompletedCoursesTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {totalCompletedCourses: res.data.data.total_completed_courses};
    });
  });

const fetchTotalEmployeesTC = createAppAsyncThunk<{ totalEmployees: number }, undefined>(
  "totalEmployees/fetchTotalEmployeesTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {totalEmployees: res.data.data.total_employees};
    });
  });

export const asyncActions = {
  fetchActHoursTC,
  fetchTopSkillsTC,
  fetchTopEmployeesTC,
  fetchAverageScoreTC,
  fetchCompletedCoursesTC,
  fetchTotalEmployeesTC
};

const initialState: DashboardType = {
  activityHours: [],
  topSkills: [],
  topEmployees: [],
  averageEmployeeScore: null,
  totalCompletedCourses: null,
  totalEmployees: null
};

export const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchActHoursTC.fulfilled, (state, action) => {
        return {
          ...state,
          activityHours: action.payload.activityHours.map((items: ActivityHourType) => ({...items}))}
      })
      .addCase(fetchTopSkillsTC.fulfilled, (state, action) => {
        return {
          ...state,
          topSkills: action.payload.topSkills.map((items: SkillType) => ({...items}))}
      })
      .addCase(fetchTopEmployeesTC.fulfilled, (state, action) => {
        return {
          ...state,
          topEmployees: action.payload.topEmployees.map((items: TopEmployeeType) => ({...items}))}
      })
      .addCase(fetchAverageScoreTC.fulfilled, (state, action) => {
        return {
          ...state,
          averageEmployeeScore: action.payload.averageScore
        }
      })
      .addCase(fetchCompletedCoursesTC.fulfilled, (state, action) => {
        return {
          ...state,
          totalCompletedCourses: action.payload.totalCompletedCourses}
      })
      .addCase(fetchTotalEmployeesTC.fulfilled, (state, action) => {
        return {
          ...state,
          totalEmployees: action.payload.totalEmployees}
      })
  }
});

//types
export type DashboardType = {
  activityHours: ActivityHourType[]
  topSkills: SkillType[]
  topEmployees: TopEmployeeType[]
  averageEmployeeScore: number | null
  totalCompletedCourses: number | null
  totalEmployees: number | null
}
