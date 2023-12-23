/* eslint-disable react/prop-types */
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutMobile from "../../components/LayoutMobile";
import { useMediaQuery } from "react-responsive";
import { Typography } from "@material-tailwind/react";
import Topbar from "../../components/Topbar";
import { Skeleton } from "antd";

const TABLE_HEAD = ["Name", "Username", "Email", "Action"];

const ListEmployee = () => {
  const [loading, setLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);
  const fetchDataUser = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/users/");
    const res = await api.json();
    setEmployee(res);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    fetchDataUser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isDesktopOrLaptop && (
        <Layout className="flex bg-bodyBg min-h-screen">
          <div className="w-full">
            <Topbar />
            {/* Content */}
            <div className="w-4/5 mt-5 mx-auto">
              <h1 className="text-lg mb-3">List Employee</h1>
              <div className="h-full w-full overflow-x-scroll scrollbar-hide bg-white text-body shadow-sm rounded-md">
                <Skeleton loading={loading}>
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70 "
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {employee.map(({ name, email, username, id }) => {
                        const isLast = id === employee.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={id}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {username}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {email}
                              </Typography>
                            </td>
                            <td className={classes + " space-x-2"}>
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-green-500 cursor-pointer hover:text-green-600"
                              >
                                Edit
                              </Typography>
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium text-red-500 cursor-pointer hover:text-red-600"
                              >
                                Delete
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Skeleton>
              </div>
            </div>
          </div>
        </Layout>
      )}

      {isTabletOrMobile && (
        <LayoutMobile className="bg-bodyBg">
          <div className="whitespace-nowrap mx-5 mt-5">
            <h1 className="text-base mb-3">List Employee</h1>
            <div className="h-full w-full overflow-x-scroll  bg-white text-body shadow-sm rounded-md">
              <Skeleton loading={loading}>
                <table className="w-full min-w-max table-auto text-left text-xs">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {employee.map(({ name, email, username, id }) => {
                      const isLast = id === employee.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {username}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {email}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              Edit
                            </Typography>
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              s
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Skeleton>
            </div>
          </div>
        </LayoutMobile>
      )}
    </>
  );
};

export default ListEmployee;
