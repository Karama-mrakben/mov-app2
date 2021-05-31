import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'

function MovieCard({films}) {
    return (
        <div>
           <Card style={{ width:'350px' , heigth:'700px' }}>
  <Card.Img variant="top" src={films.Poster}/>
  <Card.Body>
    <Card.Title style={{color:'black'}}>{films.Title}</Card.Title>
    <Card.Text style={{color:'black'}}>{films.Year} </Card.Text>
    <ReactStars
    count={5}
    value={films.Rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
  <Link to={{ pathname: `/DescriptionCard/${films.Title}`, state: {films} }}>  <Button variant="primary">View Trailer</Button></Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
