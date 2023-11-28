import { Button, Form, Input } from "antd";
import React from "react";
import { rules } from "../../utils/rules";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { login } from "../../store/reducers/auth";

export const LoginForm: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const submit = () => {
        dispatch(login('', ''));
      };

  return (
    <Form
    onFinish={submit}
      style={{
        border: "3px solid #AFEEEE",
        padding: "56px",
        borderRadius: "34px",
      }}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[
           rules.required("Пожалуйста введите имя пользователя")
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
         rules={[ rules.required("Пожалуйста введите пароль")]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{backgroundColor:'#00CED1'}}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
