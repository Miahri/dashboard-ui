import React, {FC} from 'react';
import s from './EmployeeCard.module.css';
import LinearProgress from "@mui/joy/LinearProgress";
import c from '../../styles/CommonStyles.module.css';

type PropsType = {
  id: string
  name: string
  photo: string
  email: string
  current_score: number
  title: string
  setSelectedEmp: (id: string) => void
}

export const EmployeeCard: FC<PropsType> = (props) => {
  return (
    <div className={s.employeeCard} onClick={() => props.setSelectedEmp(props.id)}>
      <img
        src={props.photo}
        id={'avatar-img'}
        alt={'open drop-down'}
      />
      <p className={c.name}>{props.name}</p>
      <p className={s.email}>{props.email}</p>
      <div style={{display: 'flex', flexDirection: "row", alignItems: 'center', width: '160px'}}>
        <LinearProgress color="neutral" variant="soft" determinate value={(props.current_score / 5) * 100}/>
        <p>{props.current_score}</p>
      </div>
      <div className={s.divider}></div>
      <p className={s.title}>{props.title}</p>
    </div>
  );
};
