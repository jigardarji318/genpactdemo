import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Counter } from "./features/counter/Counter";
import AddEmployee from "./features/addemployee/AddEmployee";
import ShowEmployee from "./features/showemployee/ShowEmployee";
import Analytics from './features/analytics/Analytics'  

import AppHeader from "./features/header/Header";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <AppHeader />
        <Content style={{ padding: "50px 50px", height: "100vh" }}>
          <Switch>
            <Route exact path="/" component={AddEmployee} />
            <Route exact path="/showemployee" component={ShowEmployee} />
            <Route exact path="/analytics" component={Analytics} />
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
