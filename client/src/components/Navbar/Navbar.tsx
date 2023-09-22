import { FC } from "react";

import s from "./Navbar.module.less";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <div className={s.Navbar}>
      <img src="" alt="" className={s.logo} />
      <div className={s.header}>MERN CLOUD</div>
      <div className={s.login}>Войти</div>
      <div className={s.registration}>Регистрация</div>
    </div>
  );
};

export default Navbar;
