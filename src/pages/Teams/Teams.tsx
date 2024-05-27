import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {TeamType} from "../../api/types";
import {useActions} from "../../utils/redux-utils";
import {teamsActions} from "./index";
import {TeamList} from "./teamList/TeamList";
import commonStyles from '../../styles/CommonStyles.module.css';

export const Teams = () => {
  const teams = useSelector<AppRootStateType, TeamType[]>(state => state.teams);
  const {fetchTeamsTC} = useActions(teamsActions);

  useEffect(() => {
    fetchTeamsTC();
  }, [])

  return (
    <div className={commonStyles.wrapper}>
      <TeamList teams={teams} />
    </div>
  );
};