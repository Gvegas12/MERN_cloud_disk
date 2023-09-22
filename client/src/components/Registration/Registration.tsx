import { FC, useState, ChangeEvent } from "react";

import UI from "../UI";

import s from "./Registration.module.less";

interface IRegistrationProps {}

const Registration: FC<IRegistrationProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={s.Registration}>
      <div className={s.header}>Регистрация</div>
      <UI.Input
        type="text"
        value={email}
        onChange={onChangeEmail}
        placeholder="Email"
        className={s.input}
      />
      <UI.Input
        type="text"
        value={password}
        onChange={onChangePassword}
        placeholder="Пароль"
        className={s.input}
      />
      <UI.Button onClick={() => console.log("click")} className={s.btn}>
        Войти
      </UI.Button>
    </div>
  );
};

export default Registration;
