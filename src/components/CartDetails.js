import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { useDispatch } from "react-redux";
import { addItems } from "../features/cartSlice";

const CartDetails = () => {
  const { id } = useParams();
  const { data } = useFetch("https://fakestoreapi.com/products/" + id);
  const dispatch = useDispatch();

  return (
    <div className="container p-5">
      <div className="row">
        {data && (
          <div className="added-cart">
            <img className="img-fluid w-75" src={data.image} alt="" />
            <div className="cont">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <button
                className="btn btn-success"
                onClick={() => dispatch(addItems(data))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
