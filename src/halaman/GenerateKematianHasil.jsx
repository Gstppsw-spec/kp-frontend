import React from 'react'
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import '../style/list.scss'
import GenerateKematian from './GenerateKematian'


const ListKematian = () => {
  return (
    <div className='list'>
        <Navbar/>
        <div className='listContainer'>
            <Topbar/>
            <GenerateKematian/>
        </div>
    </div>
  )
}

export default ListKematian;