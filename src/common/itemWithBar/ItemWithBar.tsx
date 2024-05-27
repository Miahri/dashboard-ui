import React, {FC} from 'react';
import s from "./ItemWithBar.module.css";

type PropsType = {
  label: string
  value: number
}

export const ItemWithBar: FC<PropsType> = ({label, value}) => {
  return (
    <div className={s.activityItem}>
      <p>{label.toUpperCase()}</p>
      <div className={s.container}>
        <div className={s.bar}></div>
        <h6>{value}</h6>
      </div>
    </div>
  );
};