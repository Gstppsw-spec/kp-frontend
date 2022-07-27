// import Navbar from "../component/Navbar";
// import Topbar from "../component/Topbar";
// import "../style/tambah.scss";
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// function Tambah() {
//   const navigate = useNavigate();
//   const [validationError, setValidationError] = useState({});

//   const [nik, setNik] = useState("");
//   const [nama, setNama] = useState("");
//   const [nikWaris, setNikWaris] = useState("");
//   const [namaWaris, setNamaWaris] = useState("");
//   const [status, setStatus] = useState("");
//   const [kematian, setKematian] = useState("");
//   const [diterima, setDiterima] = useState("");

//   const createProduct = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("nik", nik);
//     formData.append("nama", nama);
//     formData.append("nikWaris", nikWaris);
//     formData.append("namaWaris", namaWaris);
//     formData.append("status", status);
//     formData.append("kematian", kematian);
//     formData.append("diterima", diterima);

//     await axios
//       .post(`http://localhost:8000/api/data_kematian`, formData)
//       .then(({ data }) => {
//         Swal.fire({
//           icon: "success",
//           text: data.message,
//         });
//         console.log(formData)
//         console.log(data)
//         navigate("/");
//       })
//       .catch(({ response }) => {
//         if (response.status === 422) {
//           setValidationError(response.data.errors);
//         } else {
//           Swal.fire({
//             text: response.data.message,
//             icon: "error",
//           });
//         }
//       });
//   };

//   return (
//     <div className="new">
//       <Navbar />
//       <div className="newContainer">
//         <Topbar />
//         <div className="top">
//           <h1>Tambah Data Pengambilan</h1>
//         </div>
//         <div className="bottom">
//           <div className="form-wrapper">
//             {Object.keys(validationError).length > 0 && (
//               <div className="row">
//                 <div className="col-12">
//                   <div className="alert alert-danger">
//                     <ul className="mb-0">
//                       {Object.entries(validationError).map(([key, value]) => (
//                         <li key={key}>{value}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <Form onSubmit={createProduct}>
//               <Row>
//                 <Col>
//                   <Form.Group controlId="NIK">
//                     <Form.Label>NIK</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={nik}
//                       onChange={(event) => {
//                         setNik(event.target.value);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Group controlId="Nama">
//                     <Form.Label>Nama</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={nama}
//                       onChange={(event) => {
//                         setNama(event.target.value);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="NIKWaris">
//                     <Form.Label>NIK Ahli Waris</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={nikWaris}
//                       onChange={(event) => {
//                         setNikWaris(event.target.value);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="NamaWaris">
//                     <Form.Label>Nama Ahli Waris</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={namaWaris}
//                       onChange={(event) => {
//                         setNamaWaris(event.target.value);
//                         console.log(event);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="Kematian">
//                     <Form.Label>Waktu Kematian</Form.Label>
//                     <Form.Control
//                       type="date"
//                       value={kematian}
//                       onChange={(event) => {
//                         setKematian(event.target.value);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="Status">
//                     <Form.Label>Status Pengambilan</Form.Label>
//                     <Form.Select
//                       value={status}
//                       onChange={(event) =>{
//                         setStatus(event.target.value)
//                       }}
//                     >
//                       <option
//                         value="Selesai"
//                         onChange={(value) => {
//                           setStatus(value);
//                         }}
//                       >
//                         Selesai
//                       </option>
//                       <option
//                         value="Proses"
//                         onChange={(value) => {
//                           setStatus(value);
//                         }}
//                       >
//                         Proses
//                       </option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="Diterima">
//                     <Form.Label>Waktu Diterima</Form.Label>
//                     <Form.Control
//                       type="date"
//                       value={diterima}
//                       onChange={(event) => {
//                         setDiterima(event.target.value);
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Button
//                 variant="primary"
//                 className="mt-2"
//                 size="ig"
//                 block="block"
//                 type="submit"
//               >
//                 Tambah
//               </Button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tambah;

import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import "../style/tambah.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tambah() {
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState({});

  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [nikWaris, setNikWaris] = useState("");
  const [namaWaris, setNamaWaris] = useState("");
  const [status, setStatus] = useState("");
  const [kematian, setKematian] = useState("");
  const [diterima, setDiterima] = useState("");

  ////// Percobaan
  async function prepareFilterPengajuan(arrayToBeFilter, nik_masukan) {
    const filtered = await arrayToBeFilter.filter((anObject) => {
      return anObject.nik.toLowerCase().indexOf(nik_masukan.toLowerCase()) > -1;
    });
    return filtered;
  }

  const [filterPengajuan, setFilterPengajuan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/data_kematian")
      .then((res) => res.json())
      .then((result) => {
        prepareFilterPengajuan(result, nik).then((trip) => {
          setFilterPengajuan(trip);
          console.log(trip);
        });
      });
  }, [nik]);

  ////////

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (Array.isArray(filterPengajuan) && filterPengajuan.length) {
      return (
        <div>
          {Swal.fire({
            icon: "error",
            text: "NIK SUDAH TERDAFTAR DI DATABASE",
          })}
        </div>
      );
    } else if (nik.length !== 16 || nikWaris.length !== 16) {
      return (
        <div>
          {Swal.fire({
            icon: "error",
            text: "SILAHKAN CEK KEMBALI NIK ATAU NIK AHLI WARIS",
          })}
        </div>
      );
    } else {
      formData.append("nik", nik);
      formData.append("nama", nama);
      formData.append("nikWaris", nikWaris);
      formData.append("namaWaris", namaWaris);
      formData.append("status", status);
      formData.append("kematian", kematian);
      formData.append("diterima", diterima);
    }

    await axios
      .post(`http://localhost:8000/api/data_kematian`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/dashboard");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="new">
      <Navbar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>Tambah Data Pengambilan</h1>
        </div>
        <div className="bottom">
          <div className="form-wrapper">
            {Object.keys(validationError).length > 0 && (
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-danger">
                    <ul className="mb-0">
                      {Object.entries(validationError).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <Form onSubmit={createProduct}>
              <Row>
                <Col>
                  <Form.Group controlId="NIK">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                      type="text"
                      value={nik}
                      onChange={(event) => {
                        setNik(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="Nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(event) => {
                        setNama(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="NIKWaris">
                    <Form.Label>NIK Ahli Waris</Form.Label>
                    <Form.Control
                      type="text"
                      value={nikWaris}
                      onChange={(event) => {
                        setNikWaris(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="NamaWaris">
                    <Form.Label>Nama Ahli Waris</Form.Label>
                    <Form.Control
                      type="text"
                      value={namaWaris}
                      onChange={(event) => {
                        setNamaWaris(event.target.value);
                        console.log(event);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="Kematian">
                    <Form.Label>Waktu Kematian</Form.Label>
                    <Form.Control
                      type="date"
                      value={kematian}
                      onChange={(event) => {
                        setKematian(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="Status">
                    <Form.Label>Status Pengambilan</Form.Label>
                    <Form.Select
                      value={status}
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                    >
                      <option
                        value="Selesai"
                        onChange={(value) => {
                          setStatus(value);
                        }}
                      >
                        Selesai
                      </option>
                      <option
                        value="Proses"
                        onChange={(value) => {
                          setStatus(value);
                        }}
                      >
                        Proses
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="Diterima">
                    <Form.Label>Waktu Diterima</Form.Label>
                    <Form.Control
                      type="date"
                      value={diterima}
                      onChange={(event) => {
                        setDiterima(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary"
                className="mt-2"
                size="ig"
                block="block"
                type="submit"
              >
                Tambah
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
