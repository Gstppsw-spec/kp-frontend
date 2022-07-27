import React from 'react'
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import '../style/list.scss'
import DaftarBantuan from './DaftarBantuan';


const DaftarBantuanHasil = () => {
  return (
    <div className='list'>
        <Navbar/>
        <div className='listContainer'>
            <Topbar/>
            <DaftarBantuan/>
        </div>
    </div>
  )
}

export default DaftarBantuanHasil;