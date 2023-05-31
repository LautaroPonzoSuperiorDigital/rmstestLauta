import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";
import Logout from "../assets/img/Logout.svg";
import Search from "../assets/img/Search.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/nav.css";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-brand">
          <img className="logoNav" src={Logo} alt="Logo" />
        </div>

        {/* NavLinks */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link custom-item"   to="/listingsAdmin" activeClassName="active">
                LISTINGS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-item"   to="/tenantsAdmin"activeClassName="active"> 
                TENANTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-item"   to="/applicantsAdmin" activeClassName="active">
                APPLICANTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-item"   to="/documentsAdmin" activeClassName="active">
                DOCUMENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-item"   to="/subAdminsAdmin" activeClassName="active">
                SUB ADMINS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link chat" to="/chatsAdmin" activeClassName="active">
                CHATS
                <img className="Search" src={Search} alt="Search" />
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ms-auto username">
          <li className="nav-item d-flex align-items-center">
            <NavLink className="nav-link user" to="/profile">
              <span className="username-text">John Smith</span>
            </NavLink>
            <NavLink className="nav-link logout" to="/login">
              <img className="Logout" src={Logout} alt="Logout" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
