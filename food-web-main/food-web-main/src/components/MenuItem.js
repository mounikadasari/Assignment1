import React from "react";
import Styles from "./MenuItem.module.css";

function MenuItem(props) {
  return (
    <div className={Styles.root}>
      <div className={Styles.ItemRoot} data-Num={String("0" + (props.index + 1)).slice(-2)}>
        <div>{props.index}</div>
        <img
          className={Styles.ItemImage}
          src={props.fooditem.image}
          alt={props.fooditem.itemName}
        />
        <div className={Styles.ItemName}>{props.fooditem.itemName}</div>
        <div className={Styles.ItemPrice}>$ {props.fooditem.price}</div>
      </div>

      <div className={Styles.row}>
        <div
          className={Styles.Button}
          onClick={() => props.handleAdd(props.fooditem.itemName)}
        >
          +
            </div>
        <div className={Styles.ItemCount}>
          {props.fooditem.orderCount}
        </div>
        <div
          className={Styles.Button}
          onClick={() => props.handleRemove(props.fooditem.itemName)}
        >
          -
            </div>
      </div>
    </div>
  );
}

export default MenuItem;
