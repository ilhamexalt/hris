import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, Skeleton } from "antd";
import Layout from "../../components/Layout";
import LayoutMobile from "../../components/LayoutMobile";
import Topbar from "../../components/Topbar";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-bodyBg min-h-screen">
      {isDesktopOrLaptop && (
        <Layout className="flex bg-bodyBg min-h-screen">
          <div className="w-full">
            <Topbar />
            {/* Content */}
            <div className="w-7/12 mt-5 mx-auto">
              <Skeleton loading={loading}>
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
              </Skeleton>
            </div>
          </div>
        </Layout>
      )}
      {isTabletOrMobile && (
        <LayoutMobile className="bg-white">
          {/* Content */}
          <div className="w-9/12 mt-5 mx-auto">
            <Skeleton loading={loading}>
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
            </Skeleton>
          </div>
        </LayoutMobile>
      )}
    </div>
  );
};

export default Profile;
