import React from 'react'
import {
    MovieContainer,
    MovieInfo,
    MovieImg,
    Title,
    Vote
  
  } from './movieStyle';


const baseUrl = 'https://image.tmdb.org/t/p/w200';

export default function Movie ( {title, vote_average, poster_path}) {

    return(

        <MovieContainer>
            <MovieImg>
                <img src= {baseUrl + poster_path} alt="영화포스터"/>
            </MovieImg>
            <MovieInfo>
                <Title>{title}</Title>
                <Vote>{vote_average}</Vote>
            </MovieInfo>
        </MovieContainer>

    )
}