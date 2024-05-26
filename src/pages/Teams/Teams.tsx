import React, {useEffect} from 'react';
import s from './Teams.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {TeamType} from "../../api/types";
import {useActions} from "../../utils/redux-utils";
import {teamsActions} from "./index";
import {TeamList} from "./teamList/TeamList";

export const Teams = () => {
  const teams = useSelector<AppRootStateType, TeamType[]>(state => state.teams);
  const {fetchTeamsTC} = useActions(teamsActions);

  useEffect(() => {
    fetchTeamsTC();
  }, [])

  return (
    <div className={s.wrapper}>
      <TeamList teams={teams} />
    </div>
  );
};