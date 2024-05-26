import {createSlice} from "@reduxjs/toolkit";
import {thunkTryCatch} from "../../utils/thunkTryCatch";
import {createAppAsyncThunk} from "../../utils/createAppAsyncThunk";
import {appActions} from "../../features/commonActions/App";
import {dashboardAPI} from "../../api/dashboard-api";
import {TeamType} from "../../api/types";

const {setAppStatus} = appActions;

const fetchTeamsTC = createAppAsyncThunk<{ teams: TeamType[] }, undefined>(
  "teams/fetchTeamsItems", async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await dashboardAPI.getData();
      dispatch(setAppStatus({status: "succeeded"}));
      return {teams: res.data.data.teams};
    });
  });

export const asyncActions = {
  fetchTeamsTC
};

export const slice = createSlice({
  name: "teams",
  initialState: [] as Array<TeamType>,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeamsTC.fulfilled, (state, action) => {
        return action.payload.teams.map(team => ({
          ...team,
          employees: team.employees.map(employee => ({
            ...employee
          }))
        }))
      })
  }
});
