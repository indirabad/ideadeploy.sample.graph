import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Button, Menu } from "antd";
import style from "./Navigation.module.scss";
import { NavLink, withRouter } from "react-router-dom";
import { LINEAR_GRAPH, PIE_GRAPH } from "../../const/path";
const routes = [
  { title: "Linear graph", path: LINEAR_GRAPH },
  { title: "Pie graph", path: PIE_GRAPH },
];
const Navigation = (props) => {
  const { location } = props;
  return (
    <Header className={style.Navigation}>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        {routes.map((route) => (
          <Menu.Item key={`${route.path}`}>
            <NavLink to={route.path}>{route.title}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};
export default withRouter(Navigation);
