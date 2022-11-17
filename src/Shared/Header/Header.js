import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../Contexts/Authcontext";

const Header = () => {
  const {user,userLogout} = useContext(authProvider)
  const navigate = useNavigate()

  const handleLogout = ()=>{
    userLogout()
    .then(()=>{
      navigate('/login')
    })
    .catch(e => console.error(e))
  }
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link>Reviews</Link></li>
        <li><Link>Contact Us</Link></li>
        {
          user?.uid?
          <Link onClick={handleLogout} className="btn btn-accent text-white">Logout</Link>
          :
          <Link to='/login' className="btn btn-accent bg-accent text-white">Login</Link>
        }
    </>
  return (
    <div className="navbar bg-base-100 px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden md:flex ml-auto">
        <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Header;
