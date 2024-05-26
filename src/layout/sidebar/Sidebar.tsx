import React, {FC} from 'react';
import s from './Sidebar.module.css';
import {Nav} from "../navigation/Nav";

type PropsType = {
  open: boolean
}

export const Sidebar: FC<PropsType> = ({open}) => {
  const sidebarClass = s.sidebar
    + (open ? ' ' + s.open : '')

  return (
    <>
      <aside className={sidebarClass}>
        <Nav />
      </aside>
    </>
  );
};