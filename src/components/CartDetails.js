import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const CartDetails = () => {
  const { id } = useParams();
  const { data } = useFetch("https://fakestoreapi.com/products/" + id);
  console.log(data);

  return (
    <div className="container p-5">
      <div className="row">
        {data && (
          <div className="added-cart">
            <img className="img-fluid w-50" src={data.image} alt="" />
            <div className="cont">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <button className="btn btn-danger">Remove Item</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
