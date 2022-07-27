import React from "react";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import profile from "../img/profile.png";
import "../style/user.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form"
function User() {
  return (
    <div className="new">
      <Navbar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>Profile Pengguna</h1>
        </div>
        {/* <div className='col-12'>
              <div className='card card-body'>
                <div className='table-responsive'>
                  <table className='table table-boderdered mb-0 text-center'>

                  </table>
                </div>
              </div>

            </div> */}
        <div className="kartu">
          <div>
            <img src={profile} className="profilepic"></img>
          </div>
          <div>
            <Row>
              <Col>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                placeholder="Gunawan Sitepu"
              />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  placeholder="gunawang938@gmail.com"
                />
              </Col>
            </Row>
            {/* <div>
              <h4>Nama  : Gunawan Sitepu</h4>
            </div>

            <div>
              <h4>Email  : gunawang938@gmail.com</h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
