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

function TambahBantuan() {
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState({});

  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [kk, setKk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
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
    fetch("http://localhost:8000/api/dana_bantuans")
      .then((res) => res.json())
      .then((result) => {
        prepareFilterPengajuan(result, nik).then((trip) => {
          setFilterPengajuan(trip);
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
    } else if (nik.length !== 16 || kk.length !== 16) {
      return (
        <div>
          {Swal.fire({
            icon: "error",
            text: "SILAHKAN CEK KEMBALI NIK ATAU KK ANDA",
          })}
        </div>
      );
    } else {
      formData.append("nik", nik);
      formData.append("nama", nama);
      formData.append("kk", kk);
      formData.append("alamat", alamat);
      formData.append("status", status);
      formData.append("jumlah_bantuan", jumlah);
      formData.append("diterima", diterima);
    }

    await axios
      .post(`http://localhost:8000/api/dana_bantuans`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/bantuan");
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
                  <Form.Group controlId="KK">
                    <Form.Label>Nomor Kartu Keluarga</Form.Label>
                    <Form.Control
                      type="text"
                      value={kk}
                      onChange={(event) => {
                        setKk(event.target.value);
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
                      as="textarea"
                      value={alamat}
                      rows={2}
                      onChange={(event) => {
                        setAlamat(event.target.value);
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
                      value={jumlah}
                      onChange={(event) => {
                        setJumlah(event.target.value);
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

export default TambahBantuan;
