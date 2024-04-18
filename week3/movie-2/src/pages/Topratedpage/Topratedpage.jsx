import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Toprated from '../../components/Toprated';

const API_KEY = '560edcab022391706f07d9e49f92af34';

export default function Topratedpage() {

  const [topRated, settopRated ] = useState([]);

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    console.log(response);
    if (response.status == 200){
      const data = await response.json();
      console.log(data);

      settopRated(data.results);

    }
  }

  useEffect(() => {
    getData();
  },[])


  return (
    <div className='appContainer'>
    { 
      topRated.map((item) => {
        return (
          <Toprated
            title = {item.title}
            poster_path = {item.poster_path}
            vote_average = {item.vote_average}
           />
        )
      })
    }
  </div>
  );
}