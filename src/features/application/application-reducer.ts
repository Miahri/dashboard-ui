import {createSlice} from "@reduxjs/toolkit";
import {appActions} from "../commonActions/App";

export const slice = createSlice({
  name: "app",
  initialState: {
    status: "idle",
    error: null
  } as InitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(appActions.setAppStatus, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(appActions.setAppError, (state, action) => {
        state.error = action.payload.error;
      });
  }
});

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type InitialStateType = {
  status: RequestStatusType
  error: string | null
}