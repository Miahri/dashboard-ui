import React, {FC} from 'react';
import s from "./Header.module.css";
import commonStyles from '../../styles/CommonStyles.module.css';
import logo from './icons/logo2.jpg';
import notificationIcon from './icons/notification4.svg';
import {Avatar} from "../avatar/Avatar";

type PropsType = {
  open: boolean
  currentDate: string
  handleMenu: () => void
}

export const Header: FC<PropsType> = ({open, currentDate, handleMenu}) => {

  return (
    <>
      <div id={'header'} className={`${commonStyles.horizontalContainer} ${s.header}`}>
        <div className={`${commonStyles.horizontalContainer} ${s.headerLeft}`}>
          <img
            src={logo}
            id={'logo'}
            className={`${s.logo} ${open ? s.sideBarOpen : ''}`}
            onClick={handleMenu}
            alt={'open menu'}
          />
        </div>
        <div className={`${commonStyles.horizontalContainer} ${s.headerRight}`}>
          <p>{currentDate}</p>
          <img
            src={notificationIcon}
            id={'notification'}
            className={s.notification}
            alt={'open notifications'}
          />
          <Avatar />
        </div>
      </div>
    </>
  );
};