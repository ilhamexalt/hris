import { Button, Input, Form } from "antd";
import { Link } from "react-router-dom";
import swal from "sweetalert";
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
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  //   const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col bg-bodyBg bg-cover">
      <div className="mb-5">
        {/* <img src="./src/assets/logo-login.png" alt="Login" width={200} /> */}
        <h1 className="font-bold text-5xl">HRIS</h1>
        <span className="tracking-wide">DEVELOPMENT</span>
      </div>
      <Form name="basic" className=" w-72">
        <Form.Item
          className="w-full"
          onChange={() => {
            // setUsername(e.target.value);
          }}
        >
          <Input placeholder="Company Name" />
        </Form.Item>

        <Form.Item
          onChange={() => {
            // setPassword(e.target.value);
          }}
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>
        <Form.Item
          onChange={() => {
            // setPassword(e.target.value);
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
          onChange={() => {
            // setPassword(e.target.value);
          }}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-button w-full tracking-widest"
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
          >
            {/* {loading ? (
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
            ) : ( */}
            REGISTER
            {/* )} */}
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
