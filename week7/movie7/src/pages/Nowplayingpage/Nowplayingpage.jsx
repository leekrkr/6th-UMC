import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from '../../components/Movie';
import {
  AppContainer

} from '../pageStyle';
import Loading from '../Loading';
import InfiniteScroll from 'react-infinite-scroller';

const API_KEY = '560edcab022391706f07d9e49f92af34';



export default function Nowplayingpage() {

  const [nowPlaying, setnowPlaying ] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setnowPlaying((prevNowPlaying) => [...prevNowPlaying, ...data.results]); // 이전 영화목록과 합침
        setloading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경
        setPage((prevPage) => prevPage + 1); // 페이지 번호 업데이트
      }
    } catch (error) {
    
    }
  }


  useEffect(() => {
    getData();
  },[page])


  return (
    
    <InfiniteScroll
    pageStart={1}
    loadMore={getData}
    hasMore={!loading}
    loader={<Loading key={0} />}
    >
      <AppContainer>
        {nowPlaying.map((item) => (
          <Movie
            key={item.id}
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            release_date={item.release_date}
          />
          ))
        }
      </AppContainer>
    </InfiniteScroll>
  
  );
}