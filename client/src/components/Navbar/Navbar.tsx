/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import s from "./Navbar.module.less";

import Logo from "../../assets/img/icons/cloud-logo.svg";
import { logoutAction } from "../../reducers/userReducer/userReducer";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  const { isAuth } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(logoutAction());
    navigate("/login", { replace: true });
  };

  return (
    <div className={s.Navbar}>
      <img src={Logo} alt="" className={s.logo} />
      <div className={s.header}>MERN CLOUD</div>
      <ul className={s.list}>
        {!isAuth && (
          <>
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Регистрация</NavLink>
            </li>
          </>
        )}
        {isAuth && (
          <li>
            <span onClick={onLogoutHandler}>Выход</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
