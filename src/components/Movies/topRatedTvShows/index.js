import React from 'react';
import { Card, Col, Container,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopRated({tvshow}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return(
        <Container>
            <div className='clearfix mt-5 mt-5'>
                <h4 className='float-left'>Top TV SHOWS</h4>

            </div>
            <Slider {...settings}>
            {tvshow.map(function(tvshow){
                return(
                    <React.Fragment>
                        <Link to={`/tv/${tvshow.id}`}>
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}/>
                          <Card.Body>
                            <span>{tvshow.name}</span>
                          </Card.Body>
                    </Card>
                    </Col>
                    </Link>
                    </React.Fragment>
                )
            })}
            </Slider>
        </Container>

     
    )  
}

export default TopRated;
