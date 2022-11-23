import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authProvider } from "../Contexts/Authcontext";
import useAdmin from "../Hooks/useAdmin";
import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
  const {user} = useContext(authProvider)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to='/dashboard'>All Appointments</Link>
            </li>
            {
              isAdmin && <>
                <li>
              <Link to='/dashboard/allUsers'>All Users</Link>
            </li>
                <li>
              <Link to='/dashboard/addDoctor'>Add Doctor</Link>
            </li>
                <li>
              <Link to='/dashboard/manageDoctors'>Manage Doctors</Link>
            </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
