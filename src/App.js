import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Topbar from "./component/Topbar";
import Home from "./component/Home";
import "./style/dark.scss";
import ListKematian from "./halaman/ListKematian";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Tambah from "./halaman/Tambah";
import Edit from "./halaman/Edit";
// import "bootstrap/dist/css/bootstrap.min.css";
import User from "./halaman/User";
import Beranda from "./halaman/Beranda";
import HasilPengajuan from "./halaman/HasilPengajuan";
import AlurPengajuan from "./halaman/AlurPengajuan";
import DaftarBantuanHasil from "./halamanBantuan/DaftarBantuanHasil";
import TambahBantuan from "./halamanBantuan/TambahBantuan"
import UpdateBantuan from "./halamanBantuan/UpdateBantuan"
import HasilBantuan from "./halaman/HasilBantuan"
import GenerateBantuanHasil from './halamanBantuan/GenerateBantuanHasil'
import GenerateKematianHasil from './halaman/GenerateKematianHasil'

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route exact path="/alur-pengajuan" element={<AlurPengajuan/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/hasil/:word" element={<HasilPengajuan/>}/>
          <Route exact path="/hasilBantuan/:kata" element={<HasilBantuan/>}/>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/user" element={<User/>}/>
          <Route exact path="/generate" element={<GenerateBantuanHasil/>}/>
          <Route exact path="/generate-kematian" element={<GenerateKematianHasil/>}/>
          <Route exact path="/bantuan">
            <Route index element={<DaftarBantuanHasil/>}/>
            <Route path="bantuan/baru" element={<TambahBantuan/>}/>
            <Route path="bantuan/edit/:id" element={<UpdateBantuan/>}/>
          </Route>
          <Route exact path="/kematian">
            <Route index element={<ListKematian/>}/>
            <Route path="kematian/baru" element={<Tambah/>} title="Tambah Data Baru"/>
            <Route path="kematian/edit/:id" element={<Edit/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//// ASET

// import edit from './img/edit.png'
// import Swal from "sweetalert2";
// import remove from './img/remove.png'
// import React, { useEffect } from "react";
// import { useState } from "react";
// import userEvent from "@testing-library/user-event";
// import axios from "axios";
// import { Link } from "react-router-dom";
// export default function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   const [q, setQ] = useState("");
//   const [searchParam] = useState(["nik", "nama"]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/data_kematian")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           console.log(items);
//           setIsLoaded(true);
//           setItems(result);
//         },

//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   const fetchProducts = async () => {
//     await axios
//     .get(`http://localhost:8000/api/data_kematian`)
//     .then(({data}) => {
//       console.log(products)
//       setProducts(data);

//       const task_names =[];
//       for (var i=0, max = products.length; i<max; i+=1) {
//         if(created_at > )
//         task_names.push(products[i].created_at);
//         console.log(task_names)
//       }

//     });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   function search(items) {
//     return items.filter((item) => {
//       return searchParam.some((newItem) => {
//         return (
//           item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
//         );
//       });
//     });
//   }

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

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading ...</div>;
//   } else {
//     return (
//       <div className="wrapper">
//         <div className="search-wrapper">
//           <label htmlFor="search-form">
//             <input
//               type="search"
//               name="search-form"
//               id="search-form"
//               className="search-input"
//               placeholder="Search for..."
//               value={q}
//               /*
//                                 // set the value of our useState q
//                                 //  anytime the user types in the search box
//                                 */
//               onChange={(event) => setQ(event.target.value)}
//             />
//             <span className="sr-only">Search countries here</span>
//           </label>
//         </div>
//         {/* <ul className="card-grid">
//           {search(items).map((item) => (
//             <li>
//               <article className="card" key={item.id}>
//                 <div className="card-image">
//                   <li>{item.nik}</li>
//                 </div>
//                 <div className="card-content">
//                   <h2 className="card-name">{item.nama}</h2>
//                   <ol className="card-list">
//                     <li>
//                       population: <span>{item.kematian}</span>
//                     </li>
//                     <li>
//                       Region: <span>{item.diterima}</span>
//                     </li>
//                     <li>
//                       Capital: <span>{item.status}</span>
//                     </li>
//                   </ol>
//                 </div>
//               </article>
//             </li>
//           ))}
//         </ul> */}
//         <div className="col-12">
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
//                 {items.length > 0 &&
//                   search(items).map((row, key) => (
//                     <tr key={key}>
//                       <td>{row.nik}</td>
//                       <td>{row.nama}</td>
//                       <td>{row.namaWaris}</td>
//                       <td>{row.kematian}</td>
//                       <td>{row.status}</td>
//                       <td>{row.diterima}</td>
//                       <td>
//                         <div className="action">
//                           {/* <Link
//                             to={`/kematian/kematian/edit/${row.id}`}
//                             style={{ textDecoration: "none" }}
//                           >
//                             <img src={edit} width="30px" />
//                           </Link> */}
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
//       {/* <div className="tambah">
//         <Link to="kematian/baru" className="link">
//           Tambah Data
//         </Link>
//       </div> */}
//       </div>
//     );
//   }
// }

//////////////////////// ASET

// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useParams } from "react-router-dom";
// function App() {

//   const {id} = useParams();

//   const [user, setUser] = useState({});
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [newName, setNewName] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [conPassword, setConPassword] = useState("");

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   // const fetchUser = async () => {
//   //   await axios
//   //   .get(`http://localhost:8000/api/user`)
//   //   .then(({data}) => {
//   //     setUser(data);
//   //     console.log(data);
//   //   })
//   // }

//   const token = localStorage.getItem("token");

//   const fetchUser = async () => {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     await axios.get("http://localhost:8000/api/user").then(({data}) => {
//       console.log(data);
//       setUser(data);
//     });
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [])

//   const updateUser = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", newName);
//     console.log(newName);

//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     await axios.get("http://localhost:8000/1pi/user/${id}")

//   }

//   return (
//     <div>
//       <div>{user.email}</div>
//       <div>{user.name}</div>
//       <div>{user.id}</div>

//       <div>
//         <Form onSubmit={updateUser}>
//           <Row>
//             <Col>
//               <Form.Group controlId="email">
//                 <Form.Label>email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder={email}
//                   value={newEmail}
//                   onChange={(event) => {
//                     setNewEmail(event.target.value);
//                   }}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col>
//               <Form.Group controlId="name">
//                 <Form.Label>Nama</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder={name}
//                   value={newName}
//                   onChange={(event) => {
//                     setNewName(event.target.value);
//                   }}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col>
//               <Form.Group controlId="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   value={password}
//                   onChange={(event) => {
//                     setPassword(event.target.value);
//                   }}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col>
//               <Form.Group controlId="confirmationpassword">
//                 <Form.Label>Konfirmasi Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   value={conPassword}
//                   onChange={(event) => {
//                     setConPassword(event.target.value);
//                   }}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Button
//             variant="primary"
//             className="mt-2"
//             size="lg"
//             block="block"
//             type="submit"
//           >
//             Save
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default App;\

//// BERANDA PENGUNJUNG ////
// import profile from "./img/profile.png";
// import React from "react";
// import './style/beranda-pengajuan.scss'
// import "bootstrap/dist/css/bootstrap.css";

// function App() {

//   return (
//     <div>
//       <div className="header">
//         <div className="pertama container">
//           <table width="100%">
//             <tbody>
//               <tr>
//                 <td>
//                   <div className="min-logo">
//                     Sistem Penyaluran Dana Santunan Kematian
//                   </div>
//                 </td>
//                 <td align="right">
//                   <img src={profile} style={{ height: "50px" }}></img>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="menu-container" id="menu-container">
//         <div className="navigasi container">
//           <ul id="menu">
//             <li className="active"><a href="#">BERANDA</a></li>
//             <li className="active"><a href="#">ALUR PERMOHONAN</a></li>
//           </ul>
//         </div>
//       </div>

//       <div>
//         <div className="satu">
//           <div align="center">
//           </div>
//           <div id="headline_wrapper">
//             <div id="headline_background">
//               <div className="container">
//                 <div className="row-fluid">
//                   <div className="span7">
//                     <h3>Selamat Datang di Sistem Penyaluran Dana Santunan Kematian</h3>
//                     <span>"Melalui sistem ini Anda dapat melihat status perkembangan pencairan dana santunan kematian dan dan bantuan yang diberikan oleh Badan Pengelolaan Keuanagan dan Aset Daerah Kota Bandar Lampung."</span>
//                   </div>
//                   <div className="span5 form-box">
//                     <h4>Cek Status Perkembangan Pencairan</h4>
//                     <div className="form">
//                       <form id="mahasiswa-login">
//                         <br></br>
//                         <label>NOMOR INDUK KEPENDUDUKAN (NIK) </label>
//                         <input className="span12" placeholder="Nomor Induk Kependudukan" type="text"/>
//                         <br></br>
//                         {/* <label>NOMOR INDUK KEPENDUDUKAN (NIK) AHLI WARIS</label>
//                         <input className="span12" placeholder="Nomor Induk Kependudukan Ahli Waris" type="text"/>
//                         <br></br> */}
//                         <input className="btn btn-info btn-large btn-block" type="submit" value="Lihat Perkembangan Pencairan"></input>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//       <div className="footer">
//         <div className="container">
//           <div align="center">
//             <small>Sistem Penyaluran Dana Santunan Kematian &copy; 2022</small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
