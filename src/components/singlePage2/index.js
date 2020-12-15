import Axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function SingleTvPage(props) {
    const [tv, setTv] = useState({});
    useEffect (()=>{
        Axios.get(
            `https://api.themoviedb.org/3/tv/${props.match.params.id}}?api_key=f151e379e176f1899c71263936acbab8&language=en-US`
        ).then(res => setTv(res.data))
        .catch(err=> console.log(err));
    },[]);
    
    
    return (
        <Container className="mt-5 mb-5">
            <Row>
            <Col md='6'>
            <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} /> 
            </Col>
            <Col md='6'>
            <h2>{tv.name}</h2>
                    <p>{tv.overview}</p>
                    <ul>
                        <li>Episodes:{tv.number_of_episodes}</li>
                        <li>Seasons:{tv.number_of_seasons}</li>
                        <li>Original Language:{tv.original_language}</li>
                        <li>Genres:
                          {Array.isArray(tv.genres) && tv.genres.map(el => 
                          <span className="ml-2">{el.name}</span>)}</li>
                        <li>Release Date:{tv.last_air_date}</li>

                    </ul>
            </Col>
            </Row>
        </Container>
   
    )
}

export default SingleTvPage;
