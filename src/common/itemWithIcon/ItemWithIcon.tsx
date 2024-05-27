import React, {FC} from 'react';
import s from "./ItemWithIcon.module.css";

type PropsType = {
  label: string
  value: number | null
  itemIcon: string
  topSkills: boolean
}

export const ItemWithIcon: FC<PropsType> = ({label, value, itemIcon, topSkills}) => {
  return (
    <>
      <div className={`${s.skills} ${topSkills ? s.topSkills : ''}`}>
        <p>{label.toUpperCase()}</p>
        <h6>{value ? value : 0}</h6>
      </div>
      <img
        className={`${s.itemIcon} ${topSkills ? s.topSkillsIcon : ''}`}
        src={itemIcon}
        id={'icon'}
        alt={'icon'}
      />
    </>
  );
};