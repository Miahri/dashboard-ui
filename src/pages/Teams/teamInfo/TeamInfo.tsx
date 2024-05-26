import React, {FC} from 'react';
import s from "./TeamInfo.module.css";
import {CircleProgress} from "../../../components/circleProgress/CircleProgress";
import {ItemWithBar} from "../../Dashboard/itemWithBar/ItemWithBar";
import {TeamsWithIdType} from "../../../api/types";

type PropsType = {
  selectedTeamData: TeamsWithIdType
}

export const TeamInfo: FC<PropsType> = ({selectedTeamData}) => {
  return (
    <>
      <h3>{selectedTeamData.title}</h3>
      <div className={s.divider}></div>
      <div className={s.progressData}>
        <CircleProgress value={selectedTeamData.overall_score}
                        label={"Score"}/>
        <div className={s.activityData}>
          <ItemWithBar label={"EMPLOYEES"}
                       value={selectedTeamData.total_employee_count}/>
          <button className={s.addEmployee}>Add new employee</button>
        </div>
      </div>
      <div className={s.divider}></div>
      <div className={s.description}>
        <p style={{textAlign: "justify", fontSize: "18px"}}>{selectedTeamData.description}</p>
      </div>
    </>
  );
};