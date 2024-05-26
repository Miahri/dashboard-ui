import {createSlice} from "@reduxjs/toolkit";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../../features/commonActions/App";
import {dashboardAPI} from "../../api/dashboard-api";
import {CourseType, SkillType} from "../../api/types";

const {setAppStatus} = appActions;

const fetchInProgressCoursesTC = createAppAsyncThunk<{ inProgressCourses: CourseType[] }, undefined>(
  "inProgressCourses/fetchInProgressCoursesTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {inProgressCourses: res.data.data.in_progress_courses};
    });
  });

const fetchUpcomingCoursesTC = createAppAsyncThunk<{ upcomingCourses: CourseType[] }, undefined>(
  "upcomingCourses/fetchUpcomingCoursesTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {upcomingCourses: res.data.data.upcoming_courses};
    });
  });

const fetchSkillsInDevTC = createAppAsyncThunk<{ skillsInDev: SkillType[] }, undefined>(
  "skillsInDev/fetchSkillsInDevTC", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {skillsInDev: res.data.data.skills_in_development};
    });
  });

export const asyncActions = {
  fetchInProgressCoursesTC,
  fetchUpcomingCoursesTC,
  fetchSkillsInDevTC,
};

const initialState: CoursesPageType = {
  inProgressCourses: [],
  upcomingCourses: [],
  skillsInDev: [],
};

export const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInProgressCoursesTC.fulfilled, (state, action) => {
        return {
          ...state,
          inProgressCourses: action.payload.inProgressCourses.map((items: CourseType) => ({...items}))}
      })
      .addCase(fetchUpcomingCoursesTC.fulfilled, (state, action) => {
        return {
          ...state,
          upcomingCourses: action.payload.upcomingCourses.map((items: CourseType) => ({...items}))}
      })
      .addCase(fetchSkillsInDevTC.fulfilled, (state, action) => {
        return {
          ...state,
          skillsInDev: action.payload.skillsInDev.map((items: SkillType) => ({...items}))}
      })
  }
});

//types
export type CoursesPageType = {
  inProgressCourses: CourseType[]
  upcomingCourses: CourseType[]
  skillsInDev: SkillType[]
}
