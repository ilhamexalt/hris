import { GrOrganization } from "react-icons/gr";
import { MdDashboard, MdLogout } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdDomain } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import swal from "sweetalert";
import Logo_Dashboard from "../assets/logo-dashboard.png";
// import Support from "../assets/support.png";

export default function SidebarDesktop() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="bg-white w-72 min-h-screen py-4">
      <div className="text-title font-bold text-3xl text-center flex items-center px-5 py-3 gap-3 mb-10">
        <img src={Logo_Dashboard} alt="Logo HRIS" />
        <p>HRIS</p>
      </div>

      {/* Menu */}
      <div>
        <Link
          to="/dashboard"
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer hover:text-button text-sm transition-all duration-300"
        >
          <MdDashboard /> Dashboard
        </Link>
      </div>
      <div>
        <Link
          to="/employee"
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
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
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
        >
          <IoSettingsOutline /> Setting
        </Link>
      </div>
      <div>
        <Link
          onClick={handleLogout}
          className="text-body font-bold flex items-center gap-3 px-5 py-3 cursor-pointer  hover:text-button text-sm transition-all duration-300"
        >
          <MdLogout /> Logout
        </Link>
      </div>

      {/* <div className="px-5 py-3 ">
        <img src={Support} alt="Help Center" />
      </div> */}
    </div>
  );
}
