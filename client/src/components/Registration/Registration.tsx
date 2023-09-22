import { FC } from "react";

import s from "./Registration.module.less";
import UI from "../UI";

interface IRegistrationProps {}

const Registration: FC<IRegistrationProps> = () => {
  return (
    <div className={s.Registration}>
      <div className={s.header}>Регистрация</div>
      <UI.Input type="text" placeholder="Email" className={s.input} />
      <UI.Input type="text" placeholder="Пароль" className={s.input} />
      <UI.Input type="text" placeholder="Логин" className={s.input} />
      <UI.Input type="text" placeholder="Логин" className={s.input} />
      <button className={s.btn}>Войти</button>
    </div>
  );
};

export default Registration;