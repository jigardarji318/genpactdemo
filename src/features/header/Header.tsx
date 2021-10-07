import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Header.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const AppHeader: React.FC = () => {
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState<Array<string>>(["1"]);
  const addNewEmp = (): void => {
    history.push("/");
  };

  const showEmployee = () => {
    history.push("/showemployee");
  };

  const showAnalytics = () => {
    history.push("/analytics");
  };

  const menuOnClick = (e: any) => {
    setSelectedKey([e.key]);
  };

  useEffect(() => {
    if (history.location.pathname === "/showemployee") {
      setSelectedKey(["2"]);
    }
    if (history.location.pathname === "/analytics") {
      setSelectedKey(["3"]);
    }
  }, []);

  return (
    <>
      <Header className="appHeader">
        <div className="logo"></div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={selectedKey}
          onClick={(ev) => menuOnClick(ev)}
        >
          <Menu.Item key={1} onClick={addNewEmp}>
            Add New Employee
          </Menu.Item>
          <Menu.Item key={2} onClick={showEmployee}>
            Show Employees
          </Menu.Item>
          <Menu.Item key={3} onClick={showAnalytics}>
            Analytics
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default AppHeader;
