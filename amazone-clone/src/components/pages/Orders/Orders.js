import React, { useContext, useState, useEffect } from "react";
import {db} from '../../../Utility/firebase'
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import Lay0ut from '../../LayOut/Lay0ut'
import classes from './Orders.module.css'


function Orders() {

  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Lay0ut>
    <section className={classes.container}>
      <div className={classes.orders__container}>
        <h2>Your Orders</h2>
        {orders?.length == 0 && (
          <div style={{ padding: "20px" }}>you don't have orders yet.</div>
        )}
        {/* ordered items */}
        <div>
          {orders?.map((eachOrder, i) => {
            return (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} product={order} key={order.id} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Lay0ut>
  )
}

export default Orders