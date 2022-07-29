import React from 'react'
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import '../style/list.scss'
import GenerateBantuan from './GenerateBantuan';


const DaftarBantuanHasil = () => {
  return (
    <div className='list'>
        <Navbar/>
        <div className='listContainer'>
            <Topbar/>
            <GenerateBantuan/>
        </div>
    </div>
  )
}

export default DaftarBantuanHasil;