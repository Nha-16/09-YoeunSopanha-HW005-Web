import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./components/MyCard";
import NavMenu from "./components/NavMenu";
import Content from "./components/Content";
import { Container, Row } from "react-bootstrap";
import MyTable from "./components/MyTable";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [
        {
          id: 1,
          name: "Pizza",
          thumbnail: "/images/pizza.jpg",
          qty: 0,
          price: 15,
          total: 0,
        },
        {
          id: 2,
          name: "Chicken",
          thumbnail: "/images/chicken.jpg",
          qty: 0,
          price: 5,
          total: 0,
        },
        {
          id: 3,
          name: "Burger",
          thumbnail: "/images/burger.jpeg",
          qty: 0,
          price: 6,
          total: 0,
        },
        {
          id: 4,
          name: "Coca",
          thumbnail: "/images/coca.jpg",
          qty: 0,
          price: 2,
          total: 0,
        },
      ],
    };
  }

  onAdd = (index) => {
    console.log("index:", index);
    let temp = [...this.state.foods];
    temp[index].qty++;
    temp[index].total = temp[index].qty * temp[index].price;
    this.setState({
      foods: temp,
    });
  };

  onDelete = (index) => {
    console.log("index:", index);
    let temp = [...this.state.foods];
    temp[index].qty--;
    temp[index].total = temp[index].qty * temp[index].price;
    this.setState({
      foods: temp,
    });
  };

  onClear = () => {
    console.log("Clearing...");
    let foods = [...this.state.foods]
    foods.map(item => {
      item.qty = 0
      item.total = 0
    })

    this.setState({
      foods
    })

  }


  render() {
    return (
      <Container>
        <NavMenu />
        <Content />
        <Row>
          <MyCard
            foods={this.state.foods}
            onAdd={this.onAdd}
            onDelete={this.onDelete}
          />
        </Row>
        <Row>
          <MyTable foods={this.state.foods} onClear={this.onClear} />
        </Row>
      </Container>
    );
  }
}
