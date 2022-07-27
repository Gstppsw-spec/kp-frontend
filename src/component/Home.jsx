import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import '../style/home.scss'
import Widget from './Widget';


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='homeContainer'>
            <Topbar />
            <div className='widgets'>
              <Widget type="jumlah_kematian"/>
              <Widget type="anggaran_kematian" />
              <Widget type="jumlah_bantuan" />
              <Widget type="anggaran_bantuan" />
            </div>
        </div>
    </div>
  )
}

export default Home;
