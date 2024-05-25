import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from "./components/Header/Header";
const App = () => {
  return <div className="app">
    <Sidebar />
    <Main>
      <Header />
    </Main>
  </div>;
};

export default App;
