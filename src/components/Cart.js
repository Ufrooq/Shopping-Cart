import React from "react";

const Cart = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="added-cart">
          <img
            className="img-fluid w-50"
            src="https://images.pexels.com/photos/15020536/pexels-photo-15020536/free-photo-of-small-wooden-cabin-in-the-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="cont">
            <h1>Title of the product</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vel harum odio illum qui? Qui possimus assumenda deserunt
              aspernatur expedita, facere aliquid similique officia? Asperiores.
            </p>
            <button className="btn btn-danger">Remove Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
