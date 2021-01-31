import React from "react";
import MenuItem from "./MenuItem";
import Styles from "./MenuList.module.css";

function MenuList(props) {
  return (
    <div className={Styles.MenuList}>
      {props.items.map((item, index) => (
        <MenuItem
          fooditem={item}
          key={index}
          index={index}
          handleAdd={props.handleAdd}
          handleRemove={props.handleRemove}
        />
      ))}
    </div>
  );
}

export default MenuList;
