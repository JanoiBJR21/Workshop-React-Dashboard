import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from "./components/Header/Header";
import Content from "./components/Container/Content";
import CardList from "./components/Card/CardList";
import ChartContainer from "./components/Container/ChartContainer";
import ActivityChart from "./components/Charts/ActivityChart";
import SalesChart from "./components/Charts/SalesChart";
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Header />
        <Content>
          <CardList />
          <ChartContainer>
            <ActivityChart />
            <SalesChart />
          </ChartContainer>
        </Content>
      </Main>
    </div>
  );
};

export default App;
