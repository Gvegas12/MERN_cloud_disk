import { FC } from "react";
import { NavLink } from "react-router-dom";

import s from "./Navbar.module.less";

import Logo from "../../assets/img/icons/cloud-logo.svg";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <div className={s.Navbar}>
      <img src={Logo} alt="" className={s.logo} />
      <div className={s.header}>MERN CLOUD</div>
      <div className={s.login}>
        <NavLink to="/login">Войти</NavLink>
      </div>
      <div className={s.registration}>
        <NavLink to="/registration">Регистрация</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
