import {createAction} from "@reduxjs/toolkit";
import {RequestStatusType} from "../application/application-reducer";

const setAppStatus = createAction<{status: RequestStatusType}>('appActions/setAppStatus')
const setAppError = createAction<{error: string | null}>('appActions/setAppError')

export const appActions = {
  setAppStatus,
  setAppError
}