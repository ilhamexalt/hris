import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBarMobile from "../../components/MenuBarMobile";
import MenuBarDesktop from "../../components/MenuBarDesktop";

import { Carousel } from "antd";
import Navbar from "../../components/Navbar";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#171769",
};

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
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

  return (
    <div className="bg-bodyBg min-h-screen">
      {showSidebar ? (
        <>
          {/* Navbar */}
          <Navbar />

          <div className="flex bg-white">
            {/* Sidebar Desktop */}
            <MenuBarDesktop />

            {/* Content */}
            <div className="w-9/12 mx-10 my-10 font-bold">
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>{data?.company.company_name}</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>{data?.company.address}</h3>
                </div>
              </Carousel>
            </div>
          </div>
        </>
      ) : (
        <div>
          {/* Menu Mobile */}
          <div className="p-3 flex justify-between items-center bg-sidebarBg">
            <MenuBarMobile />
          </div>
          {/* Content */}
          <div className="flex min-h-screen w-full justify-center items-center ">
            <h1 className="animate-pulse">Developed By GOGOGO&#10084;</h1>
          </div>
        </div>
      )}
    </div>
  );
}
