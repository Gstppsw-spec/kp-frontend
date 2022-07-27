// import { DataGrid, GridRowProp, GridColDef } from "@mui/x-data-grid";
// import React, { useEffect } from "react";
// // import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import "../style/HalamanDaftarKematian.scss";
// import { useState } from "react";
// import axios from "axios";
// import edit from "../img/edit.png";
// import remove from "../img/remove.png";
// import { Button } from "@mui/material";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// function HalamanDaftarKematian() {

//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     await axios
//       .get(`http://localhost:8000/api/data_kematian`)
//       .then(({ data }) => {
//         setProducts(data);
//       });
//   };

//   const deleteProduct = async (id) => {
//     const isConfirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       return result.isConfirmed;
//     });

//     if (!isConfirm) {
//       return;
//     }

//     await axios
//       .delete(`http://localhost:8000/api/data_kematian/${id}`)
//       .then(({ data }) => {
//         Swal.fire({
//           icon: "success",
//           text: data.message,
//         });
//         fetchProducts();
//       })
//       .catch(({ response: { data } }) => {
//         Swal.fire({
//           text: data.message,
//           icon: "error",
//         });
//       });
//   };
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Data Pengambilan Dana Santunan Kematian
//       </div>
//       <div className="cari">
//         <input type="search" className="tambah"
//           name="search-form"
//           id="search-form"
//           placeholder="search"
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//         />
//         <SearchOutlinedIcon className="iconsearch"/>
//       </div>

//       <div className="col-12">
//         <div className="card card-body">
//           <div className="table-responsive">
//             <table className="table table-bordered mb-0 text-center">
//               <thead>
//                 <tr>
//                   <th>NIK</th>
//                   <th>Nama</th>
//                   <th>Nama Waris</th>
//                   <th>Kematian</th>
//                   <th>Status</th>
//                   <th>Diterima</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.length > 0 &&
//                   products.map((row, key) => (
//                     <tr key={key}>
//                       <td>{row.nik}</td>
//                       <td>{row.nama}</td>
//                       <td>{row.namaWaris}</td>
//                       <td>{row.kematian}</td>
//                       <td>{row.status}</td>
//                       <td>{row.diterima}</td>
//                       <td>
//                         <div className="action">
//                           <Link
//                             to={`/kematian/kematian/edit/${row.id}`}
//                             style={{ textDecoration: "none" }}
//                           >
//                             <img src={edit} width="30px" />
//                           </Link>
//                           <div
//                             onClick={() => deleteProduct(row.id)}
//                             className="hapus"
//                           >
//                             <img src={remove} width="25px" />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="tambah">
//         <Link to="kematian/baru" className="link">
//           Tambah Data
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HalamanDaftarKematian;

import { DataGrid, GridRowProp, GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../style/HalamanDaftarKematian.scss";
import { useState } from "react";
import axios from "axios";
import edit from "../img/edit.png";
import remove from "../img/remove.png";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function HalamanDaftarKematian() {
  //menyimpan data yang diambil dari database (endpoint)
  const [products, setProducts] = useState([]);

  //navigasi
  const navigate = useNavigate();

  // fitur untuk menampilkan data dari database
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  
  const [searchParam] = useState([
    "nik",
    "nama",
    "namaWaris",
    "nikWaris",
    "kematian",
    "diterima",
    "status",
  ]);
  const [q, setQ] = useState("");
  

  useEffect(() => {
    fetchProducts();
  }, []);

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

  //////////////////////////////////

  /// fitur pencarian data

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  //fitur untuk mengahupus data/////
  const fetchProducts = async () => {
    await axios
      .get(`http://localhost:8000/api/data_kematian`)
      .then(({ data }) => {
        setProducts(data);
      });
  };

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .delete(`http://localhost:8000/api/data_kematian/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        fetchProducts();
        navigate("/kematian");
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  let dataLimit = 4;
  let pageLimit = 5;

  const [pages] = useState(Math.round(items.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviosPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return items.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px'});
  }, [currentPage])

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
          Data Pengambilan Dana Santunan Kematian
        </div>
        <div className="cari">
          <input
            type="search"
            className="tambah"
            name="search-form"
            id="search-form"
            placeholder="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <SearchOutlinedIcon className="iconsearch" />
        </div>

        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>NIK Waris</th>
                    <th>Nama Waris</th>
                    <th>Kematian</th>
                    <th>Status</th>
                    <th>Diterima</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 &&
                    search(getPaginatedData(items)).map((row, key) => (
                      <tr key={key}>
                        <td>{row.nik}</td>
                        <td>{row.nama}</td>
                        <td>{row.nikWaris}</td>
                        <td>{row.namaWaris}</td>
                        <td>{row.kematian}</td>
                        <td>{row.status}</td>
                        <td>{row.diterima}</td>
                        <td>
                          <div className="action">
                            <Link
                              to={`/kematian/kematian/edit/${row.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <img src={edit} width="30px" />
                            </Link>
                            <div
                              onClick={() => deleteProduct(row.id)}
                              className="hapus"
                            >
                              <img src={remove} width="25px" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <button
                onClick={goToPreviosPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              >
                prev
              </button>
              {getPaginationGroup().map((item, index) => (
                <button
                  key={index}
                  onClick={changePage}
                  className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                  <span>{item}</span>
                </button>
              ))}
              <button
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
              >
                next
              </button>
            </div>
          </div>
        </div>
        <div className="tambah">
          <Link to="kematian/baru" className="link">
            Tambah Data
          </Link>
        </div>
      </div>
    );
  }
}

export default HalamanDaftarKematian;
