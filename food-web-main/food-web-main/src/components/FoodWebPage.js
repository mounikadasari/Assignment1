import React from "react";
import MenuList from "./MenuList";
import Styles from "./FoodWebPage.module.css";
import PizzaImage from "./../assets/pizza.png";
import BurgerImage from "./../assets/Burger.png";
import Sandwich from "./../assets/sandwich.png";
import FrenchFriesImage from "./../assets/frenchfries.png";
import Tacos from "./../assets/tacos.png";
import OrderList from "./OrderList";

class FoodWebPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menulist: [
        {
          itemName: "Pizza",
          image:
            PizzaImage,
          price: 100,
          orderCount: 0,
        },
        {
          itemName: "Burger",
          image:
            BurgerImage,
          price: 80,
          orderCount: 0,
        },
        {
          itemName: "French Fries",
          image: FrenchFriesImage,
          price: 70,
          orderCount: 0,
        },
        {
          itemName: "Sandwich",
          image: Sandwich,
          price: 60,
          orderCount: 0,
        },
        {
          itemName: "Tacos",
          image: Tacos,
          price: 90,
          orderCount: 0,
        },
      ],
      total: 0
    };
  }

  handleAdd = (name) => {
    const index = this.state.menulist.findIndex(
      (item) => item.itemName === name
    );
    var itemUpdated = [...this.state.menulist];
    console.log(itemUpdated);
    itemUpdated[index] = {
      ...itemUpdated[index],
      orderCount: itemUpdated[index].orderCount + 1,
    };
    this.setState({ menulist: itemUpdated }, () => { //Callback function
      this.totalPrice();
    });
  };

  handleRemove = (name) => {
    const index = this.state.menulist.findIndex(
      (item) => item.itemName === name
    );
    var itemUpdated = [...this.state.menulist];
    console.log(itemUpdated);
    itemUpdated[index] = {
      ...itemUpdated[index],
      orderCount: itemUpdated[index].orderCount === 0 ? 0 : itemUpdated[index].orderCount - 1,
    };
    this.setState({ menulist: itemUpdated }, () => { //Callback function
      this.totalPrice();
    });
  };

  handleDelete = (name) => {
    const index = this.state.menulist.findIndex(
      (item) => item.itemName === name
    );
    var itemUpdated = [...this.state.menulist];
    console.log(itemUpdated);
    itemUpdated[index] = {
      ...itemUpdated[index],
      orderCount: 0,
    };
    this.setState({ menulist: itemUpdated }, () => { //Callback function
      this.totalPrice();
    });
  };

  totalPrice = () => {
    var total = 0;
    this.state.menulist.map((item) => {
      total = total + (item.orderCount * item.price)
      return total
    })
    this.setState({ total: total });
  };



  render() {
    return (
      <>
        <div className={Styles.FoodList}>
          <div className={Styles.Title1}>Check Our Special Menu</div>
          <MenuList
            items={this.state.menulist}
            handleAdd={this.handleAdd}
            handleRemove={this.handleRemove}
          />
        </div>
        <div className={Styles.OrderList}>
          <div className={Styles.Title2}>Order List</div>
          <OrderList
            items={this.state.menulist}
            handleDelete={this.handleDelete}
            total={this.state.total}
          />
        </div>
      </>
    );
  }
}

export default FoodWebPage;
