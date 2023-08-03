import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isTyping, setisTyping] = useState("");
  const [showIcon, setshowIcon] = useState(false);
  const [suggestions, setsuggestions] = useState(null);
  const typingTimeoutRef = useRef(null);

  const Suggestions = styled.div`
    display: ${isTyping ? "block" : "none"};
  `;

  const fetchData = async (value) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      console.log(response.data);
      const data = response.data.filter(
        (item) => value && item?.title?.toLowerCase().includes(value)
      );
      setsuggestions(data);
    } catch (error) {
      alert(`Something went wrong: ${error}`);
    }
  };
  const handleSearch = (e) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      fetchData(e.target.value);
      setshowIcon(false);
    }, 1000);
    setisTyping(e.target.value);
  };
  return (
    <nav className="navbar justify-content-between p-3">
      <a href="/">
        <h1>Navbar</h1>
      </a>
      <div className="d-flex align-items-center">
        <div id="search-items">
          <input
            type="text"
            value={isTyping}
            placeholder="Search items..."
            onChange={handleSearch}
            onKeyDown={() => {
              setshowIcon(true);
            }}
          />
          <Suggestions id="items-suggestions" className="position-absolute">
            <ul>
              {showIcon ? (
                <i class="fa-solid fa-spinner "></i>
              ) : (
                <>
                  {suggestions &&
                    suggestions.map((product) => (
                      <li key={product.id}>{product.title}</li>
                    ))}
                </>
              )}
            </ul>
          </Suggestions>
        </div>
        <Link to="/" className="m-2">
          Home
        </Link>
        <Link to="/list" className="m-2">
          Items
        </Link>
        <span style={{ fontSize: "30px", color: "palevioletred" }}>
          Cart items : {cartItems}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
