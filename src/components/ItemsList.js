import React from "react";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="container mt-5">
      <table className="list-of-items-added">
        <colgroup>
          <col style={{ width: "70%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <hr />
        <tbody>
          {itemsInCart.map((product) => (
            <tr className="item-data" key={product.id}>
              <td className="item">
                <img src={product.image} alt="" className="img-fluid w-25" />
                <div className="item-info">
                  <p>{product.title}</p>
                </div>
              </td>
              <td>$463.598</td>
              <td>
                <button className="btn btn-danger">Remove Items</button>
              </td>
              <td>$463.598</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
