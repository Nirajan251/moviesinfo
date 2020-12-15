import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import TopRated from './topRatedTvShows';
import {MovieWrapper} from './style';
function Movies() {
    const[topRated, settopRated] = useState([])

    useEffect(() => {
        getAllTv()  
        
    },[])

    const getAllTv = async() =>{
        let apikey='f151e379e176f1899c71263936acbab8'
        const allTv =await Axios.all([
            Axios.get(`
            https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`)
        ])
        //console.log(allTv[0].data.results);
        settopRated(allTv[0].data.results)

        };
    return (
        <MovieWrapper>
            <TopRated tvshow={topRated}/>
            </MovieWrapper>
    )
}

export default Movies;
