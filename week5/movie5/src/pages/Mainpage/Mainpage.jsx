import React, {useState, useEffect} from 'react';
import {
  Banner,
  MainMiddle,
  MainBottom,
  SearchBox,
  Boxcontainer,
  Icon,
  MovieResult,
  MovieTitle,
  MovieImg,
  Vote,
  MovieInfo,
  ResultContainer

} from './MainStyle';
import { BiSearch } from "react-icons/bi";

const API_KEY = '560edcab022391706f07d9e49f92af34';
const SEARCHURL = 'https://api.themoviedb.org/3/search/movie';

export default function Mainpage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${SEARCHURL}?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=ko-KR&page=1`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  useEffect(() => {
    if (searchQuery) { 
      handleSearch();
    }
  }, [searchQuery]);



  return (

    <Banner>
      <MainMiddle>
        환영합니다
      </MainMiddle>
      <MainBottom>
          Find your Movies!
          <Boxcontainer>
          <SearchBox
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
           <Icon onClick={handleSearch}>
            <BiSearch size="25"/>
          </Icon>
          </Boxcontainer> 
      </MainBottom>
      {searchResults.length > 0 && (
        <ResultContainer>
          {searchResults.map((movie) => (
            <MovieResult key={movie.id}>
              <MovieImg>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
              </MovieImg>
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <Vote>⭐️&nbsp;{movie.vote_average}</Vote>
              </MovieInfo>
            </MovieResult>
          ))}
        </ResultContainer>
      )}
    </Banner>
  );
}