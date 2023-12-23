import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, Button, Drawer } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";
import { RiMessage2Line } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdDomain } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import swal from "sweetalert";

export default function MenuBarMobile() {
  const [open, setOpen] = useState(false);
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
    <div className="p-3 flex justify-between items-center border-b bg-white">
      <Button type="primary" onClick={showDrawer} className="bg-button">
        <GiHamburgerMenu />
      </Button>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <div>
          <Link
            to="/dashboard"
            className="text-body font-bold flex items-center gap-3 py-3 cursor-pointer hover:text-button text-sm transition-all duration-300"
          >
            <MdDashboard /> Dashboard
          </Link>
        </div>
        <div>
          <Link
            to={"/employee"}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <GrOrganization /> Manage Employee
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <TbReport /> Manage Report
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <FaRegMoneyBill1 /> Manage Payroll
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <MdDomain /> Manage Master
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <MdMoreTime /> Manage Overtime
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <GrSchedulePlay /> Manage Schedule
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              swal("Info", `Coming Soon!`, "info", {
                button: false,
              });
            }}
            className="text-body font-bold flex items-center gap-3  py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
          >
            <IoSettingsOutline /> Setting
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

      <div className="font-bold flex items-center gap-3 ">
        <div className="flex items-center gap-3 hover:cursor-pointer">
          <span className="w-10 h-10 border-2 border-rightBg rounded-full flex justify-center items-center relative">
            <span className="w-2 h-2 bg-red-500 rounded-full absolute top-2 left-5"></span>
            <RiMessage2Line />
          </span>
          <Link to="/profile">
            <Avatar size="large" icon={<UserOutlined />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
