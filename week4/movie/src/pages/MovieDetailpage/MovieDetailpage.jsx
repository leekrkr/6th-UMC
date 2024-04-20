import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    DetailContainer,
    DetailImg,
    DetailInfo,
    DetailTitle,
    DetailVote,
    DetailOverview
} from './MovieDetailStyle';

const baseUrl = 'https://image.tmdb.org/t/p/w200';


export default function MovieDetail (){

    const{ state } = useLocation();
    const vote = Math.floor(state.vote_average);

    return(

        <DetailContainer>
            <DetailImg>
                <img src= {baseUrl + state.poster_path} width = "350px"/>
            </DetailImg>
            <DetailInfo>
                <DetailTitle>{state.title}</DetailTitle>
                <DetailVote>평점&nbsp;&nbsp;{vote}</DetailVote>
                <DetailOverview>{state.overview}</DetailOverview>
            </DetailInfo>
        </DetailContainer>
        
    );
}
