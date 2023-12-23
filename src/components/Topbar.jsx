import { RiMessage2Line } from "react-icons/ri";
import { Avatar, Skeleton } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Topbar() {
  const data = JSON.parse(localStorage.getItem("data"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex items-center px-6 justify-between w-full h-20 ">
        <div className="text-body hover:cursor-pointer">
          <Skeleton loading={loading}>
            <h1 className="font-bold text-2xl">Hi, {data?.employee.name}</h1>
            <p className="tracking-wide">{"Let's spirit for today!"}</p>
          </Skeleton>
        </div>
        <div className="flex items-center gap-3 hover:cursor-pointer">
          <span className="w-10 h-10 border-2 border-rightBg rounded-full flex justify-center items-center relative">
            <span className="w-2 h-2  bg-red-500 rounded-full absolute top-2 left-5"></span>
            <RiMessage2Line />
          </span>
          <Link to="/profile">
            <Avatar size="large" icon={<UserOutlined />} />
          </Link>
        </div>
      </div>
    </>
  );
}
