import React, {useEffect, useState} from 'react';
import s from './Dashboard.module.css';
import {EmployeeCard} from "../../common/employeeCard/EmployeeCard";
import {CalendarComponent} from "../../components/calendar/CalendarComponent";
import {ItemWithIcon} from "../../common/itemWithIcon/ItemWithIcon";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {useActions} from "../../utils/redux-utils";
import {DashboardType} from "./dashboard-reducer";
import {dashboardActions} from "./index";
import dayjs, {Dayjs} from "dayjs";
import {ActivityHoursData} from "./activityHoursData/ActivityHoursData";
import score from '../../images/score.svg';
import courses from '../../images/courses.svg';
import employees from '../../images/employees.svg';
import skill1 from '../../images/skill1.svg';
import skill2 from '../../images/skill2.svg';
import skill3 from '../../images/skill3.svg';
import skill4 from '../../images/skill4.svg';
import skill5 from '../../images/skill5.svg';
import photo1 from "../../images/photo1.jpg";
import photo2 from "../../images/photo2.jpg";
import photo3 from "../../images/photo3.jpg";
import photo4 from "../../images/photo4.jpg";
import photo5 from "../../images/photo5.jpg";
import photo6 from "../../images/photo6.jpg";
import photo7 from "../../images/photo7.jpg";
import photo8 from "../../images/photo8.jpg";
import photo9 from "../../images/photo9.jpg";
import photo10 from "../../images/photo10.jpg";
import photo11 from "../../images/photo11.jpg";
import photo12 from "../../images/photo12.jpg";
import {v1} from 'uuid';

const images = [`${photo1}`, `${photo2}`, `${photo3}`, `${photo4}`, `${photo5}`, `${photo6}`,
  `${photo7}`, `${photo8}`, `${photo9}`,`${photo10}`, `${photo11}`, `${photo12}`];
const icons = [skill1, skill2, skill3, skill4, skill5]

export const Dashboard = () => {
  const {
    activityHours,
    topSkills,
    topEmployees,
    averageEmployeeScore,
    totalCompletedCourses,
    totalEmployees
  } = useSelector<AppRootStateType, DashboardType>(state => state.dashboard);

  const {
    fetchActHoursTC,
    fetchTopSkillsTC,
    fetchTopEmployeesTC,
    fetchAverageScoreTC,
    fetchCompletedCoursesTC,
    fetchTotalEmployeesTC
  } = useActions(dashboardActions);

  useEffect(() => {
    fetchActHoursTC();
    fetchTopSkillsTC();
    fetchTopEmployeesTC();
    fetchAverageScoreTC();
    fetchCompletedCoursesTC();
    fetchTotalEmployeesTC();
  }, [])

  const [date, setDate] = useState<Dayjs | null>(dayjs(activityHours[0]?.date));
  const value = date?.startOf('day');
  const foundObject = activityHours.find(item => item.date === value?.format('YYYY-MM-DD'));

  const topSkillsWithIcons = topSkills.map((skill, index) => ({
    ...skill, icon: icons[index % icons.length]
  }))
  const topEmployeesWithAva = topEmployees.map((topEmp, index) => ({
      id: v1(),
      photo: images[index % images.length],
      ...topEmp
    }));

  return (
    <div id={'dashboard'} className={s.wrapper}>
      <div className={`${s.card} ${s.card1}`}>
        <CalendarComponent date={date} setDate={setDate}/>
        <ActivityHoursData foundObject={foundObject ? foundObject : null}/>
      </div>

      <div className={`${s.card} ${s.card2}`}>
        <div className={`${s.container} ${s.statDataContainer}`}>
          <ItemWithIcon label={"Average employee score"} value={averageEmployeeScore} itemIcon={score} topSkills={false}/>
        </div>
        <div className={`${s.container} ${s.statDataContainer}`}>
          <ItemWithIcon label={"Total completed courses"} value={totalCompletedCourses} itemIcon={courses} topSkills={false}/>
        </div>
        <div className={`${s.container} ${s.statDataContainer}`}>
          <ItemWithIcon label={"Total employees"} value={totalEmployees} itemIcon={employees} topSkills={false}/>
        </div>
      </div>

      <div className={`${s.card} ${s.card3}`}>
        <p className={s.topTitle}>Top Skills</p>
        {topSkillsWithIcons.map((skill, index) => {
          return (
            <div key={index} className={`${s.container} ${s.statDataContainer}`}>
              <ItemWithIcon label={skill.skill} value={skill.employees} itemIcon={skill.icon} topSkills={true}/>
            </div>
          )
        })}
      </div>

      <div className={`${s.card} ${s.card4}`}>
        <p className={s.topTitle}>Top Employees</p>
        <div className={`${s.container} ${s.employeesContainer}`}>
          {topEmployeesWithAva.map((employee) => <EmployeeCard key={employee.id}
                                                                      id={employee.id}
                                                                      name={employee.name}
                                                                      photo={employee.photo}
                                                                      email={employee.email}
                                                                      current_score={employee.current_score}
                                                                      title={employee.title}
                                                                      setSelectedEmp={()=>{}}/>)}
        </div>
      </div>
    </div>
  );
};