import React from "react";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  console.log(itemsInCart, "ssssssssssss");
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
        {itemsInCart ? (
          <tbody>
            {itemsInCart.map((product) => (
              <tr className="item-data" key={product[0].id}>
                <td className="item">
                  <img
                    src={product[0].image}
                    alt=""
                    className="img-fluid w-25"
                  />
                  <div className="item-info">
                    <p>{product[0].title}</p>
                  </div>
                </td>
                <td>{product[0].price}</td>
                <td>
                  <p>{product[1]}</p>
                </td>
                <td>{product[1] * product[0].price}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        )}
      </table>
    </div>
  );
};

export default ItemsList;
