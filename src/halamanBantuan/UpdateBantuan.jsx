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

function UpdateBantuan() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [kk, setKk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [diterima, setDiterima] = useState("");

  const [newNik, setNewNik] = useState("");
  const [newNama, setNewNama] = useState("");
  const [newAlamat, setNewAlamat] = useState("");
  const [newKk, setNewKk] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newJumlah, setNewJumlah] = useState("");
  const [newDiterima, setNewDiterima] = useState("");

  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = async () => {
    await axios
      .get(`http://localhost:8000/api/dana_bantuans/${id}`)
      .then(({ data }) => {
        const { nik, nama, kk, alamat, jumlah_bantuan, status, diterima } = data.DanaBantuan;
        setNik(nik);
        setNama(nama);
        setAlamat(alamat);
        setKk(kk);
        setStatus(status);
        setJumlah(jumlah_bantuan);
        setDiterima(diterima);
        console.log(nik)
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
    formData.append("kk", newKk);
    formData.append("alamat", newAlamat);
    formData.append("jumlah_bantuan", newJumlah);
    formData.append("status", newStatus);
    formData.append("diterima", newDiterima);

    await axios
      .post(`http://localhost:8000/api/dana_bantuans/${id}`, formData)
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
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="KK">
                    <Form.Label>Nomor Kartu Keluarga</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={kk}
                      value={newKk}
                      onChange={(event) => {
                        setNewKk(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="Alamat">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={2}
                      placeholder={alamat}
                      value={newAlamat}
                      onChange={(event) => {
                        setNewAlamat(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="Jumlah">
                    <Form.Label>Jumlah Bantuan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={jumlah}
                      value={newJumlah}
                      onChange={(event) => {
                        setNewJumlah(event.target.value);
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

export default UpdateBantuan;