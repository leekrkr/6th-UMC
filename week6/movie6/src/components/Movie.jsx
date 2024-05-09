import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    MovieContainer,
    MovieInfo,
    MovieImg,
    Title,
    Vote
  
  } from './movieStyle';


const baseUrl = 'https://image.tmdb.org/t/p/w200';

export default function Movie ( {title, vote_average, poster_path, overview, release_date, id, backdrop_path}) {

    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${id}`,{
        state : { title, vote_average, poster_path, overview, release_date, id, backdrop_path }
    })
    }

    return(

        <MovieContainer>
            <MovieImg>
                <img src= {baseUrl + poster_path} onClick={onClickMovieItem}/>
            </MovieImg>
            <MovieInfo>
                <Title>{title}</Title>
                <Vote>⭐️&nbsp;{vote_average}</Vote>
            </MovieInfo>
        </MovieContainer>

    )
}