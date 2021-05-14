import React, { Component } from "react";
import { Card, Badge, Button, Col } from "react-bootstrap";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.user = {
    }
    console.log("1. constructor");
  }




  render() {
    console.log("3. render");

    return (
      <>
        {this.props.foods.map((item, index) => (
          <Col xs="3" key={index}>
            <Card>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: {item.price} $
                </Card.Text>
                <Badge variant="warning mx-2">{item.qty}</Badge>
                <Button onClick={() => this.props.onAdd(index)} variant="primary">Add</Button>{' '}
                <Button disabled={item.qty === 0} onClick={() => this.props.onDelete(index)} variant="danger">Delete</Button>{' '}
                <h5>Total: {item.total} $</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  }


  componentDidMount() {

  }



}

export default MyCard;
