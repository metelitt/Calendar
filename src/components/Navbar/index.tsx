import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Row } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux"; 
import { toggleAuth } from "../../store/reducers/auth"; 
import { useDispatch } from "react-redux";
import { RootState } from "../../store";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.auth);
  const dispatch =useDispatch()
  const onAuthClick = () => {
    dispatch(toggleAuth());
    navigate(isAuth ? "" : "/login");
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={onAuthClick} key='login'>
              <LoginOutlined />
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme='dark' mode="horizontal" selectable={false}>
            <Menu.Item onClick={onAuthClick} key='logout'>
              <LogoutOutlined />
            </Menu.Item>
          </Menu>
        )}
      </Row>

      <div className="content">
        <Outlet />
      </div>
    </Layout.Header>
  );
};