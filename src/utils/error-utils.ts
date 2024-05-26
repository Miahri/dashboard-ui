import axios from 'axios';
import { Dispatch } from "redux";
import {appActions} from "../features/commonActions/App";
import {ApiResponse} from "../api/types";

// original type:
// BaseThunkAPI<S, E, D extends Dispatch = Dispatch, RejectedValue = undefined>

export const handleAsyncServerAppError = (data: ApiResponse,
                                             dispatch: Dispatch,
                                             showError = true) => {
  if (showError) {
    dispatch(appActions.setAppError({error: 'Some error occurred'}))
  }
  dispatch(appActions.setAppStatus({status: 'failed'}))
}

export const handleAsyncServerNetworkError = (error: unknown,
                                              dispatch: Dispatch,
                                              showError = true) => {
  let errorMessage = 'Some error occurred';
  if(axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error?.message || errorMessage;
  } else if(error instanceof Error) {
    errorMessage = `Native error: ${error.message}`;
  } else {
    errorMessage = JSON.stringify(error);
  }
  if (showError) {
    dispatch(appActions.setAppError({error: errorMessage}))
  }
  dispatch(appActions.setAppStatus({status: 'failed'}))
}