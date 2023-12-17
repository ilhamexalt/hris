import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, Button, Drawer } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { MdDashboard, MdLogout } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";

export default function MenuBarMobile() {
  const [open, setOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <Link to="/profile" className=" font-bold flex items-center gap-3 ">
        <Avatar
          icon={<UserOutlined />}
          style={{
            backgroundColor: "#87d068",
          }}
        />
        <p className="text-sm text-white uppercase">
          {data?.employee.name} as {data?.employee.position}
        </p>
      </Link>

      <Button type="primary" onClick={showDrawer} className="bg-button">
        <GiHamburgerMenu />
      </Button>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <div>
          <Link
            to="/dashboard"
            className="text-body font-bold flex items-center gap-3 py-3  cursor-pointer  hover:text-button"
          >
            <MdDashboard /> Dashboard
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer hover:text-button"
          >
            <GrOrganization /> Manage Employee
          </Link>
        </div>
        <div>
          <Link
            onClick={handleLogout}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer hover:text-button"
          >
            <MdLogout /> Logout
          </Link>
        </div>
      </Drawer>
    </>
  );
}
