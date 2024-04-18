import React from 'react'
import {
    MovieContainer,
    MovieInfo,
    MovieImg
  
  } from './movieStyle';



const baseUrl = 'https://image.tmdb.org/t/p/w200';

export default function Popular ( {title, vote_average, poster_path}) {

    return(


        <MovieContainer>
            <MovieImg>
                <img src= {baseUrl + poster_path} alt="영화포스터"/>
            </MovieImg>
            <MovieInfo>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </MovieInfo>
        </MovieContainer>

    )
}