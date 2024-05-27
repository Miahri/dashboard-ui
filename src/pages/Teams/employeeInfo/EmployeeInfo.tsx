import React, {FC} from 'react';
import s from "./EmployeeInfo.module.css";
import {ItemWithBar} from "../../../common/itemWithBar/ItemWithBar";
import skill1 from "../../../images/skill1.svg";
import skill2 from "../../../images/skill2.svg";
import skill3 from "../../../images/skill3.svg";
import skill4 from "../../../images/skill4.svg";
import skill5 from "../../../images/skill5.svg";
import {EmployeesWithIdNPhotoType} from "../../../api/types";
import c from '../../../styles/CommonStyles.module.css';

type PropsType = {
  employee: EmployeesWithIdNPhotoType | null
  setSelectedEmp: (id: string) => void
}

let icons = [skill1, skill2, skill3, skill4, skill5]

export const EmployeeInfo: FC<PropsType> = ({employee, setSelectedEmp}) => {
  return (
    <>{employee ? <>
      <button onClick={() => setSelectedEmp('')}>x</button>
      <p className={s.empTitle}>{employee.title}</p>
      <div className={s.divider}></div>
      <div className={c.progressData} style={{margin: '20px'}}>
        <img src={employee.photo} alt={'ava'} className={s.empPhoto}/>
        <h3>{employee.name}</h3>
        <p className={s.empEmail}>{employee.email}</p>
        <div className={s.activityData}>
          <ItemWithBar label={"Score"}
                       value={employee.current_score}/>
          <ItemWithBar label={"Lessons"}
                       value={employee.lessons_taken}/>
        </div>
      </div>
      <div className={s.divider}></div>
      <div>
        <h6>Skills</h6>
        {employee.skills_being_developed.map((skill, index) => {
          return <div key={index} className={`${s.container} ${s.statDataContainer}`}>
            <p className={s.skill}>{skill}</p>
            <img
              className={`${s.itemIcon}`}
              src={icons[index]}
              id={'icon'}
              alt={'icon'}
            />
          </div>
        })}
      </div>
    </> : <p>No data</p>}</>


  );
};