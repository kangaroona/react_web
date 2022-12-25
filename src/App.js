import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import Clock from "./components/clock";
import React, { Suspense, createContext } from "react";
import Contxttest from "./components/contexttest";
import Effecttest from "./components/effecttest";
import Counter from "./components/count";
import Reftest from "./components/reftest";
import Dec from "./components/dec";
import Clock1 from "./components/clock1";
// const Clock1 = React.lazy(() => import("./components/clock1"));
function App(props) {
  console.log("app start running");
  const ThemeContext = createContext("light");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Effecttest />
        <Dec />
        <p>{props.name}</p>
        {/* <Contxttest /> */}
        <Reftest />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />
      <ThemeContext.Provider value="dark">
        <Clock date={new Date()} />
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Clock1 name="hook clock" />
        </Suspense> */}
      </ThemeContext.Provider>
      <Welcome name="nana" />
      <Welcome name="cc" />
    </div>
  );
}

export default App;
