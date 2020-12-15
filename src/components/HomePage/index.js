import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import NowPlaying from './nowPlaying';
import {HomeWrapper} from "./style";
import PopularMovies from './popularMovies';
import TopRatedMovies from './topRatedMovies';

export default function HomePage() {
    const [nowPlaying, setnowPlaying] = useState([])
    const [popularMovies, setpopularMovies] = useState([])
    const [topRated, settopRated] = useState([])
    useEffect(()=>{
        getAllMovies()
    },[])


    const getAllMovies =async () => {
        let apikey='f151e379e176f1899c71263936acbab8'
       const allMovies = await Axios.all([
            Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`)
        ]);
//console.log(allMovies);

setnowPlaying(allMovies[0].data.results)
setpopularMovies(allMovies[1].data.results)
settopRated(allMovies[2].data.results)
    };
   
   
   
    return (
           <HomeWrapper>
            <NowPlaying movie={nowPlaying}/>
            <PopularMovies movie={popularMovies}/>
            <TopRatedMovies movie={topRated}/>
            </HomeWrapper>
    )  
}


