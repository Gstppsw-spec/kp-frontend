import React from 'react'
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import '../style/list.scss'
import HalamanDaftarKematian from './HalamanDaftarKematian';


const ListKematian = () => {
  return (
    <div className='list'>
        <Navbar/>
        <div className='listContainer'>
            <Topbar/>
            <HalamanDaftarKematian/>
        </div>
    </div>
  )
}

export default ListKematian;
