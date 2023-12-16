import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { MdDashboard, MdLogout } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, Button, Drawer } from "antd";
import { GrOrganization } from "react-icons/gr";
import { UserOutlined } from "@ant-design/icons";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const pxl = window.innerWidth >= 760;
    if (pxl) {
      setShowSidebar(true);
    }
  }, []);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-bodyBg min-h-screen">
      {/* Sidebar */}
      {showSidebar ? (
        <div className="flex">
          {/* Sidebar Desktop */}
          <div className="bg-sidebarBg w-64 min-h-screen">
            {/* Logo */}
            <div className="flex justify-center">
              <img src="./src/assets/logo-login.png" alt="Login" width={100} />
            </div>
            {/* Menu */}
            <div>
              <Link
                onClick={() => {
                  swal("Info", "Coming Soon!", "info", {
                    button: false,
                  });
                }}
                className="text-bodyBg font-bold flex items-center gap-3 px-5 py-3 cursor-pointer hover:text-button text-sm transition-all duration-300"
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
                className="text-bodyBg font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
              >
                <GrOrganization /> Manage Company
              </Link>
            </div>
            <div>
              <Link
                onClick={handleLogout}
                className="text-bodyBg font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
              >
                <MdLogout /> Logout
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className="flex min-h-screen w-full justify-center items-center ">
            <h1>Developed By GOGOGO&#10084;</h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-2 flex justify-between items-center">
            {/* Sidebar Mobile */}
            <div>
              {/* <img src="./src/assets/logo-login.png" alt="Login" width={50} /> */}
              <Avatar icon={<UserOutlined />} />
            </div>
            <Button type="primary" onClick={showDrawer} className="bg-button">
              <GiHamburgerMenu />
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <div>
                <Link
                  onClick={() => {
                    swal("Info", "Sabar bro, gua belum bikin :(", "info", {
                      button: false,
                    });
                  }}
                  className="text-body font-bold flex items-center gap-3 py-3  cursor-pointer  hover:text-button"
                >
                  <MdDashboard /> Dashboard
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
          </div>
          <div className="flex min-h-screen w-full justify-center items-center ">
            <h1 className="animate-pulse">Developed By GOGOGO&#10084;</h1>
          </div>
        </div>
      )}
    </div>
  );
}
