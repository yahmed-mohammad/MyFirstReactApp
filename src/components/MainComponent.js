import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailsComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
      console.log(dishId);
    this.setState({ selectedDish: dishId});
  }
  
  renderDish(dish) {
    if(dish != null) {
        return(
            <DishDetail selectedDish={dish}></DishDetail>
        );
    } else {
        return(
            <div></div>
        );
    }
}

  render() {
      
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {this.renderDish(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}
        {console.log(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}
      </div>
    );
  }
}

export default Main;