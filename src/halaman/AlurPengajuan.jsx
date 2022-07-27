import profile from ".././img/balam.png";
import React, { useState } from "react";
import ".././style/beranda-pengajuan.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Beranda = (props) => {
  const [keyword, setKeyWord] = useState("");
  const navigate = useNavigate();

  const [bantuan, setBantuan] = useState("");

  const searchButtonHandlerDua = (e) => {
    e.preventDefault();
    navigate(`/hasilBantuan/${bantuan}`, { state: { kata: { bantuan } } });
  };

  const searchButtonHandler = (e) => {
    e.preventDefault();
    navigate(`/hasil/${keyword}`, { state: { word: { keyword } } });
  };

  return (
    <div>
      <div className="header">
        <div className="pertama container">
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <div className="min-logo">
                    SISTEM PENYALURAN DANA SANTUNAN KEMATIAN DAN BANTUAN
                  </div>
                </td>
                <td align="right">
                  <img src={profile} style={{ height: "50px" }}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-container" id="menu-container">
        <div className="navigasi container">
          <ul id="menu">
            <Link to="/">
              <li className="active">
                <a>Beranda</a>
              </li>
            </Link>

            <Link to="/alur-pengajuan">
              <li className="active">
                <a>ALUR PERMOHONAN</a>
              </li>
            </Link>

            <Link to="/login">
              <li className="active">
                <a>Login</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div>
        <div className="satu">
          <div align="center"></div>
          <div id="headline_wrapper">
            <div id="headline_background">
              <div className="container">
                <div className="row-fluid">
                  <div className="span7">
                    <h5>
                      ALUR PENGAJUAN PENGAMBILAN DANA SANTUNAN KEMATIAN
                    </h5>

                    <span>1.  MENDATANGI RT UNTUK MENGISI SURAT PERMOHONAN BANTUAN UANG DUKA, SURAT KETERANGAN KEMATIAN DAN SURAT PERNYATAAN TANGGUNGJAWAB (FAKTA INTEGRITAS)</span>
                    <br></br>
                    <br></br>
                    <span>2.  MENYERAHKAN KEMBALI SURAT PERMOHONAN BANTUAN UANG DUKA, SURAT KETERANGAN KEMATIAN DAN FAKTA INTEGRITAS YANG SUDAH DI ISI DAN DI TANDA TANGANI KEPADA KETUA RT</span>
                    <br></br>
                    <br></br>
                    <span>3.  MENYERAHKAN SYARAT-SYARAT PERMOHONAN DANA SANTUNAN KEMATIAN KEPADA KETUA RT</span>
                    <br></br>
                    <br></br>
                    <span>4.  PERMOHONAN AKAN DISERAHKAN KE KELURAHAN DAN DARI KELURAHAN AKAN DISERAHKAN KE KANTOR BPKAD BAGIAN ANGGARAN UNTUK DIPROSES</span>
                    <br></br>
                    <br></br>
                    <span>5.  STATUS PENCAIRAN DANA PERMOHONAN DANA KEMATAIAN DAN DI CEK DENGAN MEMASUKKAN NIK PADA KOLOM PENCAIRAN</span>
                    <br></br>
                    <br></br>
                    <h5>
                        SYARAT PENGAJUAN PERMOHONAN DANA SANTUNAN KEMATIAN
                    </h5>
                    <span>1.  PERMOHONAN TERTULIS DARI PENERIMA BANTUAN (ASLI) YANG DI KETAHUI OLEH PEJABAT YANG BERWENANG (LURAH/LK/RT)</span>
                    <br></br>
                    <span>2.  FOTOCOPY KTP AHLI WARIS DAN YANG MENINGGAL DUNIA</span>
                    <br></br>
                    <span>3.  FOTOCOPY KARTU KELUARGA (KK) AHLI WARIS DAN YANG MENINGGAL DUNIA</span>
                    <br></br>
                    <span>4.  SURAT KETERANGAN KEMATIAN DARI LURAH/LK/RT/RUMAH SAKIT</span>
                    <br></br>
                    <span>5.  AKTE KEMATIAN DARI DISDUK CAPIL KOTA BANDAR LAMPUNG</span>
                    <br></br>
                    <span>6.  SURAT KETERANGAN DOMISILI AHLI WARIS</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span style={{color: 'red'}}>NOTE : PENGAJUAN PERMOHONAN DANA SANTUNAN KEMATIAN HANYA AKAN DITERIMA PALING LAMBAT 30 HARI SETELAH KEMATIAN</span>
                    <br></br>
                    <br></br>
                  </div>
                  <div className="span5 form-box">
                    <h4 style={{marginBottom: '10px'}}>CEK STATUS PERKEMBANGAN PENCAIRAN</h4>
                    <div className="form">
                      <form id="mahasiswa-login">
                        <label style={{ fontSize: '15px', marginTop: '15px'}}>NOMOR INDUK KEPENDUDUKAN (NIK)</label>
                        <input
                          className="span12"
                          placeholder="NOMOR INDUK KEPENDUDUKAN"
                          type="text"
                          value={keyword}
                          id="PerkembanganPencairan_NIM"
                          name="PerkembanganPencarian[NIM]"
                          onChange={(event) => {
                            setKeyWord(event.target.value);
                          }}
                        />

                        <br></br>

                        <input
                          onClick={searchButtonHandler}
                          className="btn btn-info btn-large btn-block"
                          value="Lihat Perkembangan Pencarian"
                          type="submit"
                          name="yt0"
                        />
                      </form>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div>
                      <h4>CEK STATUS PENCAIRAN DANA BANTUAN</h4>
                      <div className="form">
                        <form id="mahasiswa-login">
                          <label>NOMOR INDUK KEPENDUDUKAN (NIK)</label>
                          <input
                            className="span12"
                            placeholder="NOMOR INDUK KEPENDUDUKAN"
                            type="text"
                            value={bantuan}
                            id="PerkembanganPencairan_NIM"
                            name="PerkembanganPencarian[NIM]"
                            onChange={(event) => {
                              setBantuan(event.target.value);
                            }}
                          />

                          <br></br>

                          <input
                            onClick={searchButtonHandlerDua}
                            className="btn btn-info btn-large btn-block"
                            value="Lihat Perkembangan Pencarian"
                            type="submit"
                            name="yt0"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div align="center">
            <small>Sistem Penyaluran Dana Santunan Kematian &copy; 2022</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bottomMargin: {
    marginBottom: "1em",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default Beranda;
