import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import s from './CircleProgress.module.css';
import {FC} from "react";

type PropsType = {
  label: string
  value: number
}

export const CircleProgress: FC<PropsType> = ({value, label}) => {

  return (
    <div className={s.wrapper}>
      <div className={`${s.circle} ${s.outerCircle}`}>
        <CircularProgress determinate value={value}
                          sx={{
                            '--CircularProgress-size': '150px',
                          }}
                          thickness={6}
                          variant="solid"
                          color="neutral"
        >
          <div className={`${s.circle} ${s.innerCircle}`}>
            <p>{label.toUpperCase()}</p>
            <h6>{value}</h6>
          </div>
        </CircularProgress>
      </div>
    </div>
  );
}