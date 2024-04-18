import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Nowplaying from '../../components/Nowplaying';

const API_KEY = '560edcab022391706f07d9e49f92af34';

export default function Nowplayingpage() {

  const [nowPlaying, setnowPlaying ] = useState([]);

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    console.log(response);
    if (response.status == 200){
      const data = await response.json();
      console.log(data);

      setnowPlaying(data.results);

    }
  }

  useEffect(() => {
    getData();
  },[])


  return (
    <div className='appContainer'>
    { 
      nowPlaying.map((item) => {
        return (
          <Nowplaying
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