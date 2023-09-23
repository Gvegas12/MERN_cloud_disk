import { FC, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import UI from "../UI";
import { signin } from "../../actions/user";

import s from "./Login.module.less";
import { useNavigate } from "react-router-dom";

interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoginHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(signin(email, password, "login"));
    navigate("/")
  };

  return (
    <div className={s.Login}>
      <div className={s.header}>Логин</div>
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
      <UI.Button onClick={onLoginHandler} className={s.btn}>
        Войти
      </UI.Button>
    </div>
  );
};

export default Login;
