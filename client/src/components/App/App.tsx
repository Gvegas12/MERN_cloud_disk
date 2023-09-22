import Navbar from "../Navbar/Navbar";

import s from "./App.module.less";

function App() {
  return (
    <>
      <Navbar />
      <main className={s.App}></main>
    </>
  );
}

export default App;
