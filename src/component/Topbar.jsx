import { useContext } from "react";
import profile from "../img/profile.png";
import "../style/Topbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../context/darkModeContext";
import { Link } from "react-router-dom";
const Topbar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <h2 style={{fontWeight: '-moz-initial'}}>Sistem Informasi Penyaluran Dana Santunan Kematian dan Bantuan</h2>
        </div>

        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <Link to="/user" style={{ textDecoration: "none"}}>
              <img src={profile} alt="" className="avatar" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;


