import { Button, Form, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "warning",
        content: "Please input username and password",
        duration: 2,
      });
    }, 1000);
  };

  const isLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (username === "" || password === "") {
      openMessage();
      setLoading(false);
      return false;
    }
    try {
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
      if (api.status === 200) {
        const res = await api.json();
        console.log(api.status);
        if (res.token) {
          setLoading(false);
          localStorage.setItem("token", res.token);
          navigate("/dashboard");
        }
      } else {
        const res = await api.json();
        swal("Warning", res.message, "warning", {
          buttons: false,
          timer: 2000,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen flex-col bg-white bg-cover">
        {contextHolder}

        <div className="mb-5">
          <img src="./src/assets/logo-login.png" alt="Login" width={200} />
        </div>
        <Form name="basic">
          <Form.Item
            className="w-full"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
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
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 18,
                        color: "white",
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "LOGIN"
              )}
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
