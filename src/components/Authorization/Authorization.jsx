import React, { useState, useEffect } from "react";
import style from "./Authorization.module.scss";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Authorization.actions";
import { useHistory } from "react-router";

const Authorization = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authState);
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    dispatch(logout());
  }, []);

  useEffect(() => {
    if (authState.isAuthorized) {
      history.push("/");
    }
  }, [authState]);

  return (
    <div className={style.authorization}>
      <Form onFinish={onSubmit} className="login-form">
        <div className={style.authorizationForm}>
          <div className={style.authorizationFormTitle}>
            <h3>Log in</h3>
          </div>
          <div className={style.authorizationFormWrapper}>
            <Form.Item
              name="login"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                </Button>
              )}
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Authorization;
