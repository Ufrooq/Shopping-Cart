import React from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";

const Products = () => {
  const { data } = useFetch("https://fakestoreapi.com/products/");
  return (
    <>
      <div className="products">
        {data &&
          data.map((product) => (
            <Link to={`/cart/${product.id}`} className="crd" key={product.id}>
              <span className="price">{`${product.price}$`}</span>
              <img src={product.image} alt="" />
              <div className="content">
                <h2>{product.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
