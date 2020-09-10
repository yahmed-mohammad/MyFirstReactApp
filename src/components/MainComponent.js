import React, { Component } from 'react';
//import Menu from './MenuComponent';
//import DishDetail from './DishDetailsComponent';
import Menu from './MenuFunctionComponent';
import DishDetail from './DishDetailsFunctionComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {this.renderDish(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}
        <Footer/>
      </div>
    );
  }
}

export default Main;