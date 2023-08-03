import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../features/cartSlice";

const ItemsList = () => {
  const { itemsInCart, totalPrice } = useSelector((state) => state.cart);
  // useEffect(() => {
  //   console.log("total items changed");
  // }, [itemsInCart]);
  const dispatch = useDispatch();
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
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
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
                  <button
                    className="btn btn-success me-3"
                    onClick={() => dispatch(addItems(product[0]))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeItems(product[0]))}
                  >
                    -
                  </button>
                </td>
                <td>{product[1] * product[0].price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Grand Total : {totalPrice.toFixed(2)} </td>
            </tr>
          </tbody>
        ) : (
          <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        )}
      </table>
    </div>
  );
};

export default ItemsList;
