/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";

import s from "./App.module.less";
import { useEffect } from "react";
import { checkAuth } from "../../actions/user";
import { Disk } from "../Disk/Disk";

function App() {
  const { isAuth } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <main className={s.App}>
        <Routes>
          {!isAuth && (
            <>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route
            path="/"
            element={isAuth ? <Disk /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
