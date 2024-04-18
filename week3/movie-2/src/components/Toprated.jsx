import React from 'react'


const baseUrl = 'https://image.tmdb.org/t/p/w500';

export default function Toprated ( {title, vote_average, poster_path}) {

    return(

        <div className='movieContainer'>
            <div className='movieImg'>
                <img src= {baseUrl + poster_path} alt="영화포스터"/>
            </div>
            <div className='movieInfo'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>

    )
}