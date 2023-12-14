import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      swal("Error", "Please input your username and password", "error", {
        buttons: false,
        timer: 2000,
      });
      return false;
    }

    const api = await fetch("https://bluepath.my.id/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const res = await api.json();

    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "/dashboard";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return (window.location.href = "/dashboard");
    }
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen flex-col bg-white bg-cover">
        <div className="mb-5">
          <img src="./src/assets/logo-login.png" alt="Login" width={200} />
        </div>
        <Form name="basic">
          <Form.Item
            name="username"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-button w-full tracking-widest"
              onClick={isLogin}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
        <Link
          to="/forgotpassword"
          className="text-body hover:text-blue-500 transition ease-in-out delay-50"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default Login;
