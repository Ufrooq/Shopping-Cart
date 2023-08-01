import React from "react";
import { useFetch } from "./useFetch";
import { useDispatch } from "react-redux";
import { addItems } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { data } = useFetch("https://fakestoreapi.com/products/");
  const dispatch = useDispatch();

  return (
    <>
      <div className="products">
        {data &&
          data.map((product) => (
            <Link to={`/cart/${product.id}`} className="card" key={product.id}>
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
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
