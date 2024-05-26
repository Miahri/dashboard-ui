import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Teams} from "../pages/Teams/Teams";
import {Error404} from "../pages/Error404/Error404";
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {Courses} from "../pages/Courses/Courses";
import {Support} from "../pages/support/Support";

export const PATH = {
  DASHBOARD: '/dashboard',
  TEAMS: '/teams',
  COURSES: '/courses',
  STATISTICS: '/statistics',
  SUPPORT: '/support'
}

export const Pages = () => {
  return (
    <div  id={'pages-routing'}>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.DASHBOARD}/>}/>
        <Route path={PATH.DASHBOARD} element={<Dashboard/>} />
        <Route path={PATH.TEAMS} element={<Teams/>} />
        <Route path={PATH.COURSES} element={<Courses/>} />
        <Route path={PATH.SUPPORT} element={<Support/>} />

        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
  );
};