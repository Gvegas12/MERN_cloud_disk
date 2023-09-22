import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import s from "./App.module.less";
import Registration from "../Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className={s.App}>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
