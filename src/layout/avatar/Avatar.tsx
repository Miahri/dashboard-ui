import React, {useState} from 'react';
import s from "./Avatar.module.css";
import avatarImg from './icons/avatar.jpg';

export const Avatar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const settings = ['Profile', 'Settings', 'Logout'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div id={'user-avatar'} className={s.avatar} onClick={toggleDropdown}>
      <img
        src={avatarImg}
        id={'avatar-img'}
        alt={'open drop-down'}
      />
      {dropdownVisible && (
        <>
          <div className={s.arrowUp}></div>
          <div className={s.dropdownMenu}>
            <ul>{settings.map(item => <li>{item}</li>)}</ul>
          </div>
        </>
      )}
    </div>
  );
};