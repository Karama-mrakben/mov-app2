import React from 'react';
import {Card }from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DescriptionCard(props) {
  let {films}=props.location.state
  console.log(props)
    return (
        <div className="cardstyle">
  <Card style={{ width:'1500px' ,height:'600px'}} >
  <Card.Body>
    <Card.Title><h3>{films.Title}</h3></Card.Title>
    <Card.Text>{films.Description}
    </Card.Text>
  <div>
  <iframe width="560" height="315" src={films.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div><Link to='/'>Go Back </Link></div>
  </Card.Body>
</Card>
        </div>
    )
}

export default DescriptionCard