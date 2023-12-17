import { GrOrganization } from "react-icons/gr";
import { MdDashboard, MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function MenuBarDesktop() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="bg-sidebarBg w-56 min-h-screen py-4">
      {/* Menu */}
      <div>
        <Link
          to="/dashboard"
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
          <GrOrganization /> Manage Employee
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
  );
}
