import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Toprated from '../../components/Toprated';
import {
  AppContainer

} from '../pageStyle';
import Loading from '../Loading';

const API_KEY = '560edcab022391706f07d9e49f92af34';

export default function Topratedpage() {

  const [topRated, settopRated ] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        settopRated(data.results);
        setloading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경합니다.
      }
    } catch (error) {
    
    }
  }

  useEffect(() => {
    getData();
  },[])


  return (
    <AppContainer>
      {loading ? ( 
        <Loading /> 
      ) : (
       topRated.map((item) => (
          <Toprated
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        ))
      )}
    </AppContainer>
  );
}