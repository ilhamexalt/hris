import { Button, Form, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
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
        content: "Please input email and password",
        duration: 2,
      });
    }, 1000);
  };

  const isLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      openMessage();
      setLoading(false);
      return false;
    }
    try {
      const api = await fetch("https://bluepath.my.id/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (api.status === 200) {
        const res = await api.json();
        console.log(api.status);
        if (res.token) {
          localStorage.setItem("token", res.token);
          setTimeout(() => navigate("/dashboard"), 2000);
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
      <div className="flex justify-center items-center w-full min-h-screen flex-col bg-bodyBg bg-cover">
        {contextHolder}

        <div className="mb-5 text-center">
          {/* <img src="./src/assets/logo-login.png" alt="Login" width={200} /> */}
          <h1 className="font-bold text-5xl">HRIS</h1>
          <span className="tracking-wide">DEVELOPMENT-ADMIN</span>
        </div>
        <Form name="basic">
          <Form.Item
            className="w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            <Input placeholder="Email" />
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
          className="text-body hover:text-button transition ease-in-out delay-50 text-xs md:text-sm"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default LoginAdmin;
