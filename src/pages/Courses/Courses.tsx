import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {useActions} from "../../utils/redux-utils";
import {CoursesPageType} from "./courses-reducer";
import {coursesActions} from "./index";
import s from './Courses.module.css';
import {SelectComponent} from "../../components/select/SelectComponent";
import {ItemWithIcon} from "../Dashboard/itemWithIcon/ItemWithIcon";
import skill1 from "../../images/skill1.svg";
import skill2 from "../../images/skill2.svg";
import skill3 from "../../images/skill3.svg";
import skill4 from "../../images/skill4.svg";
import skill5 from "../../images/skill5.svg";
import {CourseCard} from "./courseCard/CourseCard";
import {CourseType} from "../../api/types";

const icons = [skill1, skill2, skill3, skill4, skill5]

export const Courses = () => {
  const {
    inProgressCourses,
    upcomingCourses,
    skillsInDev
  } = useSelector<AppRootStateType, CoursesPageType>(state => state.courses);

  const {
    fetchInProgressCoursesTC,
    fetchUpcomingCoursesTC,
    fetchSkillsInDevTC
  } = useActions(coursesActions);

  useEffect(() => {
    fetchInProgressCoursesTC();
    fetchUpcomingCoursesTC();
    fetchSkillsInDevTC();
  }, [])

  const [option, setOption] = useState<string>('In progress');
  const [values, setValues] = useState<CourseType[]>(inProgressCourses);

  useEffect(() => {
    if (option === 'In progress') {
      setValues(inProgressCourses);
    } else if (option === 'Upcoming') {
      setValues(upcomingCourses);
    }
  }, [option, inProgressCourses, upcomingCourses])

  return (
    <div className={s.wrapper}>
      <div className={`${s.container} ${s.content}`}>
        <div className={s.rowContainer} style={{height: 80}}>
          <h3>Courses</h3>
          <div className={s.selectInput}>
            <SelectComponent currentValue={option} label={"Team"} options={['In progress', 'Upcoming']}
                             setValue={setOption}/>
          </div>
        </div>
        <div className={`${s.container}`}>
          {values.map((v, index) => <CourseCard course={v}
                                                icon={icons[index % icons.length]}/>
          )}
        </div>
      </div>
      <div className={`${s.container} ${s.additionalData}`}>
        <h3>Skills in development</h3>
        {skillsInDev.map((skill, index) => {
          return (
            <div key={index} className={`${s.statDataContainer}`}>
              <ItemWithIcon label={skill.skill}
                            value={skill.employees}
                            itemIcon={icons[index % icons.length]}
                            topSkills={true}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};
