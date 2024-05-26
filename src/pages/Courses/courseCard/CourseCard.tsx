import React, {FC} from 'react';
import s from './CourseCard.module.css';
import {CourseType} from "../../../api/types";

type PropsType = {
  course: CourseType
  icon: string
}

export const CourseCard: FC<PropsType> = ({course, icon}) => {
  return (
    <div className={s.courseCardContainer}>
      <img src={icon} alt={'course-icon'}/>
      <div className={s.courseColumnContainer}>
        <p className={s.date}>Due {new Date(course.due_date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</p>
        <h6>{course.title}</h6>
        <p className={s.description}>{course.description}</p>
        <p className={s.status}>{course.status}</p>
        <p>Assigned to {course.assigned_to}</p>
      </div>
    </div>
  );
};