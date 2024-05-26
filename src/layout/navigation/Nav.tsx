import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import dashboardIcon from './icons/dashboard.svg';
import teamsIcon from './icons/team.svg';
import coursesIcon from './icons/documents.svg';
import supportIcon from './icons/support.svg';
import {PATH} from '../Pages';
import commonStyles from '../../styles/CommonStyles.module.css';

export const Nav = () => {
  return (
    <nav id={'menu'} className={`${commonStyles.verticalContainer} ${s.nav}`}>
      <NavLink
        id={'dashboard-link'}
        to={PATH.DASHBOARD}
        className={({isActive}) => isActive ? s.active : s.nav}
      >
        <img
          src={dashboardIcon}
          id={'dashboard-icon'}
          alt={'open dashboard'}
        />
        Dashboard
      </NavLink>

      <NavLink
        id={'teams-link'}
        to={PATH.TEAMS}
        className={({isActive}) => isActive ? s.active : s.nav}
      >
        <img
          src={teamsIcon}
          id={'teams-icon'}
          alt={'open teams overview'}
        />
        Teams
      </NavLink>

      <NavLink
        id={'courses-link'}
        to={PATH.COURSES}
        className={({isActive}) => isActive ? s.active : s.nav}
      >
        <img
          src={coursesIcon}
          id={'courses-icon'}
          alt={'open courses overview'}
        />
        Courses
      </NavLink>

      <NavLink
        id={'support-link'}
        to={PATH.SUPPORT}
        className={({isActive}) => isActive ? s.active : s.nav}
      >
        <img
          src={supportIcon}
          id={'support-icon'}
          alt={'open support'}
        />
        Support
      </NavLink>
    </nav>
  );
};