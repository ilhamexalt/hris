import { Button, Form, Input, Spin } from "antd";
import { useState } from "react";
import swal from "sweetalert";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");

  // setLoading(true);

  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col bg-bodyBg bg-cover">
      <Form name="basic" className=" w-72">
        <Form.Item
          className="w-full"
          onChange={() => {
            // setEmail(e.target.value);
          }}
        >
          <Input placeholder="Please enter your email .." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-button w-full tracking-widest"
            onClick={() => {
              swal("Info", "Coming Soon!", "info");
            }}
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
              "SEND"
            )}
          </Button>
        </Form.Item>
      </Form>
      <Link
        to="/"
        className="text-body hover:text-button transition ease-in-out delay-50 text-xs md:text-sm -mt-4 mb-2"
      >
        Back
      </Link>
    </div>
  );
};

export default ForgotPassword;
