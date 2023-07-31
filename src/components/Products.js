import React from "react";
import { useFetch } from "./useFetch";
import { useDispatch } from "react-redux";
import { addItems } from "../features/cartSlice";

const Products = () => {
  const { data } = useFetch("https://fakestoreapi.com/products/");
  const dispatch = useDispatch();

  return (
    <>
      <div className="products">
        {data &&
          data.map((product) => (
            <div className="card" key={product.id}>
              <span className="price">{`${product.price}$`}</span>
              <img src={product.image} alt="" />
              <div className="content">
                <h2>{product.title}</h2>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => dispatch(addItems(product))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
