import Logo from "../assets/logo-login.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { GrOrganization } from "react-icons/gr";
import { MdDashboard, MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="h-20 flex items-center justify-between w-full py-2 px-6 cursor-pointer">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" width={100} />
        </div>
        <div className="flex">
          <div>
            <Link
              to="/dashboard"
              className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer hover:text-sidebarBg text-sm transition-all duration-300"
            >
              <MdDashboard /> Dashboard
            </Link>
          </div>
          <div>
            <Link
              to="/employee"
              className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-sidebarBg text-sm transition-all duration-300"
            >
              <GrOrganization /> Manage Employee
            </Link>
          </div>
        </div>

        <div className="w-56 text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-body hover:bg-sidebarBg hover:text-white transition-all delay-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                <h1 className="uppercase">
                  {data?.employee.name} as {data?.employee.position}
                </h1>
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          navigate("/profile");
                        }}
                        className={`${
                          active ? "bg-sidebarBg text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                      >
                        <IoSettingsOutline />
                        Setting Account
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-sidebarBg text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                      >
                        <MdLogout /> Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
}
