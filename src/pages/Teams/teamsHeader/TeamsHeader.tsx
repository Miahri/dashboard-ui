import React from 'react';
import s from "./TeamsHeader.module.css";

export const TeamsHeader = () => {
  return (
    <div className={s.rowContainer}>
      <div className={s.selectInput}>
        <h3>Teams</h3>
        <button className={s.addTeamBtn}>Add new team</button>
      </div>
    </div>
  );
};