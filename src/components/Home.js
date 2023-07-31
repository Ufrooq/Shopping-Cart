import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home text-white">
      <h1 className="text-center mt-3">Welcome to redux toolkit store</h1>
      <section className="p-5">
        <h2 className="text-center">Products Section</h2>
        <Products />
      </section>
    </div>
  );
};

export default Home;
