import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../style/HalamanDaftarKematian.scss";
import { useState } from "react";
import { Button } from "@mui/material";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

function GenerateKematian() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("http://localhost:8000/api/data_kematian")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  ////

  function printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  }

  /////

  if (error) {
    return <div>ErrorL {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="load-wrapp">
        <div className="load">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="datatable">
        <div className="datatableTitle">
          Generate Data kedalam PDF atau EXCEL
        </div>
        <div className="col-12">
        <div>
            <ReactHtmlTableToExcel
              className="btn btn-info"
              table="emp"
              filename="data-kematian"
              sheet="Sheet"
              buttonText="Export excel"
            />
          </div>
          <div>
            <Button
              onClick={printDocument}
              variant="contained"
              color="primary"
              style={{ marginBottom: 5 }}
            >
              Export PDF
            </Button>
          </div>
          <div className="card card-body" id="pdfdiv">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center" id="emp">
                <thead>
                  <tr>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>NIK Waris</th>
                    <th>Nama Waris</th>
                    <th>Kematian</th>
                    <th>Status</th>
                    <th>Diterima</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 &&
                    items.map((row, key) => (
                      <tr key={key}>
                        <td>{row.nik}</td>
                        <td>{row.nama}</td>
                        <td>{row.nikWaris}</td>
                        <td>{row.namaWaris}</td>
                        <td>{row.kematian}</td>
                        <td>{row.status}</td>
                        <td>{row.diterima}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateKematian;
