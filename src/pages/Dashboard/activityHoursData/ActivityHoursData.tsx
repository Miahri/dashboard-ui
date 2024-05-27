import * as React from 'react';
import s from './ActivityHoursData.module.css';
import {FC} from "react";
import {ActivityHourType} from "../../../api/types";
import {ItemWithBar} from "../../../common/itemWithBar/ItemWithBar";
import {CircleProgress} from "../../../components/circleProgress/CircleProgress";
import c from '../../../styles/CommonStyles.module.css';

type PropsType = {
  foundObject: ActivityHourType | null
}

export const ActivityHoursData: FC<PropsType> = ({foundObject}) => {

  return (
    <div className={c.progressData}>
      {!foundObject ? <p>No data found</p>
        : <>
          <CircleProgress value={foundObject.lessons_taken} label={"LESSONS"}/>

          <div className={s.activityData}>
            <ItemWithBar label={"HOURS"} value={foundObject.hours}/>
            <ItemWithBar label={"EXAMS"} value={foundObject.exams_completed}/>
          </div>
        </>
      }
    </div>
  );
}