import React, { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import Loading from '../Loading';
import { 
  AppContainer,
  Pagination,
  PageButton1,
  PageButton2,
  CurrentPage,
  PgContainer

 } from '../pageStyle';

const API_KEY = '560edcab022391706f07d9e49f92af34';

export default function Popularpage() {
  
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  
  // 버튼 색
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    getData();
    if(page > 1){
      setIsValid(false);
    }
    else{
      setIsValid(true);
    }
  }, [page]); // page가 변경될 때마다 getData() 실행

  const getData = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPopular(data.results);
        setLoading(false);
      }
    } catch (error) {
      
    }
  };

  const goNextPage = () => {
    setPage(page + 1);
  };

  const goPrevPage = () => {
    if(page > 1){
      setPage(page - 1);s
    }

  };

  return (
    <>
    <AppContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          {popular.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              release_date={item.release_date}
            />
          ))}
        </>
      )}
    </AppContainer>
    <PgContainer>
      <Pagination>
            <PageButton1 onClick={goPrevPage} $isValid={isValid}>&lt;</PageButton1>
            <CurrentPage>{page}</CurrentPage>
            <PageButton2 onClick={goNextPage}>&gt;</PageButton2>
      </Pagination>
    </PgContainer>
  
        </>
  );
}
