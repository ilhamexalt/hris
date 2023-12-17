import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBarMobile from "../../components/MenuBarMobile";
import MenuBarDesktop from "../../components/MenuBarDesktop";
import Navbar from "../../components/Navbar";
import { List } from "antd";

const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));

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
            <div>
              <List
                size="small"
                bordered
                dataSource={[
                  data?.company.address,
                  data?.company.phone,
                  data?.company.email,
                  data?.company.company_name,
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
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
          <div>
            <List
              size="small"
              bordered
              dataSource={[
                data?.company.company_name,
                data?.company.email,
                data?.company.address,
                data?.company.phone,
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
