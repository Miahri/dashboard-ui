import React, {FC} from 'react';
import s from './CardGallery.module.css';
import {EmployeeCard} from "../../../common/employeeCard/EmployeeCard";
import {EmployeesWithIdNPhotoType} from "../../../api/types";

type PropsType = {
  employees: EmployeesWithIdNPhotoType[]
  setSelectedEmp: (id: string) => void
}

export const CardGallery: FC<PropsType> = ({employees, setSelectedEmp}) => {
  return (
    <div className={s.wrapper}>
      {employees.map(emp => <EmployeeCard key={emp.id}
                                          id={emp.id}
                                          name={emp.name}
                                          photo={emp.photo}
                                          email={emp.email}
                                          current_score={emp.current_score}
                                          title={emp.title}
                                          setSelectedEmp={setSelectedEmp}/>)}

    </div>
  );
};