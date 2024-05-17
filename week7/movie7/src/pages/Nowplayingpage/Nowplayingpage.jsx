import React from 'react';
import Movie from '../../components/Movie';
import { AppContainer } from '../pageStyle';
import Loading from '../Loading';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

const API_KEY = '560edcab022391706f07d9e49f92af34';


export default function Nowplayingpage() {

  const getNowplayingData = async ({ pageParam = 1 }) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${pageParam}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(error);
    }
    return response.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery (
    'nowPlaying',
    getNowplayingData,{
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage <= lastPage.total_pages ? nextPage : false;
      },
    }
  );


  const nowPlaying = data?.pages.flatMap(page => page.results);

  return (
    <>
    {isLoading ? (
        <Loading/>
         ) : (
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
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
          ))}
        </AppContainer>
      </InfiniteScroll>
      )}
    </>

  );
}
