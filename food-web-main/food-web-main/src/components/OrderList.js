import React from 'react';
import Styles from "./OrderList.module.css";
import Delete from "./../assets/Delete.png";
function OrderList(props) {
    return (
        <>
            <div className={Styles.root}>
                {console.log(props)}
                {props.items.map((item, index) =>
                    item.orderCount > 0 ?
                        <div key={index} data-Name={item.itemName} data-Num={String("0" + (item.orderCount)).slice(-2)} className={Styles.OrderRoot}>
                            {/* <div> {item.orderCount}</div> */}
                            <div className={Styles.itemName}>{item.itemName}</div>
                            <div className={Styles.delete} onClick={() => props.handleDelete(item.itemName)}><img src={Delete} alt="delete" /></div>
                        </div>
                        : null)}
            </div>
            {props.total != 0 ?
                <div className={Styles.Total}>TOTAL  $ {props.total}</div> : null}
        </>
    );
}

export default OrderList;