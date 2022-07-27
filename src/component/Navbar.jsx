// import React, { Component } from "react";
// import Navitem from "./Navitem";

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       NavItemActive: "",
//     };
//   }
//   activeitem = (x) => {
//     if (this.state.NavItemActive.length > 0) {
//       document
//         .getElementById(this.state.NavItemActive)
//         .classList.remove("active");
//     }
//     this.setState({ NavItemActive: x }, () => {
//       document.getElementById(this.state.NavItemActive).classList.add("active");
//     });
//   };
//   render() {
//     return (
//       <nav className="line item1">
//         <ul className="garis">
//           <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
//           <Navitem
//             item="About"
//             tolink="/about"
//             activec={this.activeitem}
//           ></Navitem>
//           <Navitem
//             item="Education"
//             tolink="/education"
//             activec={this.activeitem}
//           ></Navitem>
//           <Navitem
//             item="Skills"
//             tolink="/skills"
//             activec={this.activeitem}
//           ></Navitem>
//           <Navitem
//             item="Contact"
//             tolink="/contact"
//             activec={this.activeitem}
//           ></Navitem>
//           <Navitem
//             item="Work"
//             tolink="/work"
//             activec={this.activeitem}
//           ></Navitem>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import gambar from "../img/balam.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FolderIcon from "@mui/icons-material/Folder";
import axios from "axios";
import { useState } from "react";

function Navbar() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await axios.get("http://localhost:8000/api/user").then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetchData();
  }, []);

  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    // await axios.post("http://localhost:8000/api/logout").then(() => {
    //remove token from localStorage
    localStorage.removeItem("token");

    //redirect halaman login
    navigate("/");
    // });
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <img
            src={gambar}
            style={{ borderRadius: "50%", width: "60px", margin: "60px" }}
          />
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MENU UTAMA</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">KEMATIAN</p>
          <Link to="/kematian" style={{ textDecoration: "none" }}>
            <li>
              <FolderIcon className="icon" />
              <span>Data Pengambilan</span>
            </li>
          </Link>

          {/* <li>
            <FindInPageIcon className="icon" />
            <span>Cari NIK</span>
          </li> */}
          <p className="title">BANTUAN</p>
          <Link to='/bantuan' style={{ textDecoration: "none"}}>
            <li>
              <FolderIcon className="icon" />
              <span>Data Pengambilan</span>
            </li>
          </Link>
          {/* <li>
            <FindInPageIcon className="icon" />
            <span>Cari NIK</span>
          </li> */}
          <p className="title">PENGGUNA</p>
          {/* <Link to="/user" style={{ textDecoration: "none" }} >
            <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          </Link> */}

          <li onClick={logoutHanlder}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
