import Axios from 'axios'
import React,{useEffect, useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';


function SingleMoviePage(props) {
    const [movie,setMovie] = useState({});
useEffect(()=>{
    Axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=f151e379e176f1899c71263936acbab8&language=en-US`
    ).then(res => setMovie(res.data))
    .catch(err=> console.error(err));
},[]);
   


    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col md='6'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> 
                </Col>
                <Col md='6'>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <ul>
                        <li>Revenue:{movie.revenue}</li>
                        <li>Popularity:{movie.popularity}</li>
                        <li>Original Language:{movie.original_language}</li>
                        <li>Genres:
    {Array.isArray(movie.genres) && movie.genres.map(el => <span className="ml-2">{el.name}</span>)}</li>
    <li>Release Date:{movie.release_date}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleMoviePage;

