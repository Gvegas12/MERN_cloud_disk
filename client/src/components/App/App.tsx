/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";

import s from "./App.module.less";

function App() {
  const { isAuth } = useSelector((state: any) => state.user);

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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
