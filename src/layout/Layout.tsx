import React, {FC, ReactNode, useState} from 'react';
import {Header} from "./header/Header";
import {Sidebar} from "./sidebar/Sidebar";
import s from './Layout.module.css';

type PropsType = {
  children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const handleMenu = () => setOpen(!open);
  const currentDate = new Date().toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Sidebar open={open} />
      <Header open={open} currentDate={currentDate} handleMenu={handleMenu} />
      <div className={`${s.mainContent} ${!open ? s.sideBarClosed : ''}`}>
        {children}
      </div>
    </>
  );
};