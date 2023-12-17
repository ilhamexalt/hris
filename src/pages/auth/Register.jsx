import { Button, Input, Form, message, Spin } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { LoadingOutlined } from "@ant-design/icons";
// import { UploadOutlined } from "@ant-design/icons";
// import { Upload } from "antd";

// const props = {
//   beforeUpload: (file) => {
//     const isPNG = file.type === "image/png";
//     if (!isPNG) {
//       message.error(`${file.name} is not a png file`);
//     }
//     return isPNG || Upload.LIST_IGNORE;
//   },
//   onChange: (info) => {
//     console.log(info.fileList);
//   },
// };

const Register = () => {
  const [companyname, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //   const navigate = useNavigate();
  //   const [loading, setLoading] = useState(false);
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
        content: "Please complete the registration form",
        duration: 2,
      });
    }, 1000);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      companyname === "" ||
      address === "" ||
      telephone === "" ||
      name === "" ||
      email === "" ||
      password === ""
    ) {
      openMessage();
      setLoading(false);
      return false;
    }

    try {
      const api = await fetch("https://bluepath.my.id/company/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: {
            company_name: companyname,
            address: address,
            phone: telephone,
            email: email,
            password: password,
          },
          employee: {
            name: name,
            address: address,
            email: email,
            password: password,
            phone: telephone,
          },
        }),
      });

      const res = await api.json();
      console.log(res);
      if (res) {
        if (res.status === 200) {
          swal("Success", res.message, "success");
          navigate("/");
        } else {
          swal("Error", res.message, "error");
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col bg-bodyBg bg-cover">
      {contextHolder}
      <div className="mb-5">
        {/* <img src="./src/assets/logo-login.png" alt="Login" width={200} /> */}
        <h1 className="font-bold text-5xl">HRIS</h1>
        <span className="tracking-wide">DEVELOPMENT</span>
      </div>
      <Form name="basic" className=" w-72">
        <Form.Item
          className="w-full"
          onChange={(e) => {
            setCompanyname(e.target.value);
          }}
        >
          <Input placeholder="Company Name" />
        </Form.Item>

        <Form.Item
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>
        <Form.Item
          onChange={(e) => {
            setTelephone(e.target.value);
          }}
        >
          <Input placeholder="Telephone" />
        </Form.Item>
        {/* <Form.Item label="Logo Company">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item> */}
        <Form.Item
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
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
            onClick={handleRegister}
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
              "REGISTER"
            )}
          </Button>
        </Form.Item>
      </Form>
      <Link
        to="/"
        className="text-body hover:text-button transition ease-in-out delay-50 text-xs md:text-sm -mt-4 mb-2"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default Register;
