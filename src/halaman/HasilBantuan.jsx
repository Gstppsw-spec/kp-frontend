import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ResultCardBantuan from "../component/ResultCardBantuan";
import { useLocation } from "react-router-dom";
import NoData from ".././component/NoData"

const HasilBantuan = (props) => {
  const [filterPengajuan, setFilterPengajuan] = useState([]);

  const location = useLocation();

  let words = location.state.kata.bantuan;

  console.log(words)

  async function prepareFilterPengajuan(arrayToBeFiltered, wordparam) {
    const filtered = await arrayToBeFiltered.filter((anObject) => {
      return anObject.nik.toLowerCase().indexOf(wordparam.toLowerCase()) > -1;
    });
    return filtered;
  }
 
  useEffect(() => {
    fetch("http://localhost:8000/api/dana_bantuans")
      .then((res) => res.json())
      .then((result) => {
        prepareFilterPengajuan(result, words).then((trip) => {
          setFilterPengajuan(trip);
        });
      });
  }, [words]);

  if (Array.isArray(filterPengajuan) && filterPengajuan.length) {
    return (
      <div>
        {console.log(filterPengajuan)}
        {filterPengajuan.map((trip) => {
            if(trip.nik === words){
                return <ResultCardBantuan nik={trip.nik} nama={trip.nama} stat={trip.status} kk={trip.kk}
                    jumlah_bantuan={trip.jumlah_bantuan} alamat={trip.alamat}    
                />;
            }
            else{
                return(
                    <NoData/>
                )
            }
          
        })}
      </div>
    );
  } else {
    return (
        <NoData/>
    );
  }
};

export default HasilBantuan;
