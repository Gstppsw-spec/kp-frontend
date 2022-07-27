import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";

function Edit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [nikWaris, setNikWaris] = useState("");
  const [namaWaris, setNamaWaris] = useState("");
  const [status, setStatus] = useState("");
  const [kematian, setKematian] = useState("");
  const [diterima, setDiterima] = useState("");

  const [newNik, setNewNik] = useState("");
  const [newNama, setNewNama] = useState("");
  const [newNikWaris, setNewNikWaris] = useState("");
  const [newNamaWaris, setNewNamaWaris] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newKematian, setNewKematian] = useState("");
  const [newDiterima, setNewDiterima] = useState("");

  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = async () => {
    await axios
      .get(`http://localhost:8000/api/data_kematian/${id}`)
      .then(({ data }) => {
        const { nik, nama, nikWaris, namaWaris, kematian, status, diterima } = data.DataKematian;
        setNik(nik);
        setNama(nama);
        setNikWaris(nikWaris);
        setNamaWaris(namaWaris);
        setStatus(status);
        setKematian(kematian);
        setDiterima(diterima);
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");

    formData.append("nik", newNik);
    formData.append("nama", newNama);
    formData.append("nikWaris", newNikWaris);
    formData.append("namaWaris", newNamaWaris);
    formData.append("kematian", newKematian);
    formData.append("status", newStatus);
    formData.append("diterima", newDiterima);

    console.log(newNik);
    console.log(newNama);
    console.log(newNikWaris);
    console.log(newNamaWaris);
    console.log(newKematian);
    console.log(newStatus);
    console.log(newDiterima);


    await axios
      .post(`http://localhost:8000/api/data_kematian/${id}`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        console.log(formData)
        console.log(data)
        navigate("/");
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
          <h1>Update Product</h1>
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
            <Form onSubmit={updateProduct}>
              <Row>
                <Col>
                  <Form.Group controlId="nik">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={nik}
                      value={newNik}
                      onChange={(event) => {
                        setNewNik(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={nama}
                      value={newNama}
                      onChange={(event) => {
                        setNewNama(event.target.value);
                        console.log(newNama)
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="nikWaris">
                    <Form.Label>NIK Ahli Waris</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={nikWaris}
                      value={newNikWaris}
                      onChange={(event) => {
                        setNewNikWaris(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="namaWaris">
                    <Form.Label>Nama Ahli Waris</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={namaWaris}
                      value={newNamaWaris}
                      onChange={(event) => {
                        setNewNamaWaris(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="kematian">
                    <Form.Label>Tanggal Kematian</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder={kematian}
                      value={newKematian}
                      onChange={(event) => {
                        setNewKematian(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="status">
                    <Form.Label>Status Pengambilan Dana</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder={status}
                      value={newStatus}
                      onChange={(event) => {
                        setNewStatus(event.target.value);
                      }}
                    >
                    <option value="Proses">Proses</option>
                    <option value="Selesai">Selesai</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="diterima">
                    <Form.Label>Tanggal Pengiriman Dana</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder={diterima}
                      value={newDiterima}
                      onChange={(event) => {
                        setNewDiterima(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Button
                variant="primary"
                className="mt-2"
                size="lg"
                block="block"
                type="submit"
              >
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
