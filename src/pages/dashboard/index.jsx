import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, Carousel, Skeleton, List } from "antd";
import Layout from "../../components/Layout";
import LayoutMobile from "../../components/LayoutMobile";
import Topbar from "../../components/Topbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Meta from "antd/es/card/Meta";
import { BsClipboard2Data } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const dataDummy = [
  {
    title: "Dummy Activity 1",
  },
  {
    title: "Dummy Activity 2",
  },
];

export default function Dashboard() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const contentStyle = {
    height: isDesktopOrLaptop ? "300px" : "200px",
    textAlign: "center",
    background: "#364d79",
  };

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
    <div className="">
      {isDesktopOrLaptop && (
        <Layout className="flex bg-bodyBg min-h-screen">
          <div className="w-4/6">
            <Topbar />
            {/* Content */}
            <div className="mx-6">
              <div className="flex items-center justify-between mt-5">
                <h1 className="text-xl">Monthly Monitoring</h1>
                <span className="flex gap-3 text-2xl">
                  <IoIosArrowBack /> <IoIosArrowForward />
                </span>
              </div>
              <div className="grid grid-cols-2 mt-5 gap-3">
                <div className="hover:cursor-pointer">
                  <Card>
                    <Skeleton loading={loading} avatar active>
                      <Meta
                        avatar={
                          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                      <p className="mt-5 flex items-center gap-3 font-body ml-2">
                        <BsClipboard2Data /> <span>40 Data</span>
                      </p>
                    </Skeleton>
                  </Card>
                </div>
                <div className="hover:cursor-pointer">
                  <Card>
                    <Skeleton loading={loading} avatar active>
                      <Meta
                        avatar={
                          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                      <p className="mt-5 flex items-center gap-3 font-body ml-2">
                        <BsClipboard2Data /> <span>40 Data</span>
                      </p>
                    </Skeleton>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 px-4 py-6 bg-rightBg">
            <Card className="h-screen">
              <Skeleton loading={loading} avatar active>
                <h1 className="font-bold text-xl mb-3"> Schedule Today</h1>
                <Carousel autoplay speed={2000}>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="object-cover w-full h-full"
                        src="https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Carousel"
                      />
                    </h3>
                  </div>
                </Carousel>
              </Skeleton>
              <div className="mt-5">
                <Skeleton loading={loading} avatar active>
                  <List
                    itemLayout="horizontal"
                    dataSource={dataDummy}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          className="text-justify"
                          avatar={
                            <Avatar
                              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                </Skeleton>
              </div>
            </Card>
          </div>
        </Layout>
      )}
      {isTabletOrMobile && (
        <LayoutMobile>
          <div className="bg-rightBg">
            <div className="text-body hover:cursor-pointer p-4  w-full h-20  bg-bodyBg ">
              <Skeleton loading={loading}>
                <h1 className="font-bold text-xl">Hi, {data?.employee.name}</h1>
                <p className="tracking-tight">{"Let's spirit for today!"}</p>
              </Skeleton>
            </div>
            {/* Content */}
            <div className="mx-4">
              <div className="flex items-center justify-between mt-5">
                <h1 className="text-lg">Monthly Monitoring</h1>
                <span className="flex gap-3 text-xl">
                  <IoIosArrowBack /> <IoIosArrowForward />
                </span>
              </div>
              {/* <div className="grid grid-cols-2 mt-5 gap-3"> */}
              <div className="whitespace-nowrap space-x-5 sm:space-x-20 overflow-x-scroll scrollbar-hide flex mt-5">
                <Card>
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                    <p className="mt-5 flex items-center gap-3 font-body ml-2">
                      <BsClipboard2Data /> <span>40 Data</span>
                    </p>
                  </Skeleton>
                </Card>

                <Card>
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                    <p className="mt-5 flex items-center gap-3 font-body ml-2">
                      <BsClipboard2Data /> <span>40 Data</span>
                    </p>
                  </Skeleton>
                </Card>

                <Card>
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                    <p className="mt-5 flex items-center gap-3 font-body ml-2">
                      <BsClipboard2Data /> <span>40 Data</span>
                    </p>
                  </Skeleton>
                </Card>

                <Card>
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                    <p className="mt-5 flex items-center gap-3 font-body ml-2">
                      <BsClipboard2Data /> <span>40 Data</span>
                    </p>
                  </Skeleton>
                </Card>
              </div>

              <div className="mt-5">
                <Card className="h-screen">
                  <Skeleton loading={loading} avatar active>
                    <h1 className="font-bold mb-3"> Schedule Today</h1>
                    <Carousel autoplay speed={2000}>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            className="object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Carousel"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            className="object-cover w-full h-full"
                            src="https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Carousel"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            className="object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Carousel"
                          />
                        </h3>
                      </div>
                    </Carousel>
                  </Skeleton>
                  <div className="mt-5">
                    <Skeleton loading={loading} avatar active>
                      <List
                        itemLayout="horizontal"
                        dataSource={dataDummy}
                        renderItem={(item, index) => (
                          <List.Item>
                            <List.Item.Meta
                              className="text-justify"
                              avatar={
                                <Avatar
                                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                                />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                          </List.Item>
                        )}
                      />
                    </Skeleton>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </LayoutMobile>
      )}
    </div>
  );
}
