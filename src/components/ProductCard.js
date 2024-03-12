import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const { id, name, price, image } = product;
  const [ isInCart, setIsInCart ] = useState(false);
  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  function handleAdd() {
    addToCart(product);
  }
  function handleRemove(){
    removeFromCart(product);
  }
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={handleRemove} >Remove From Cart</button>
        ) : (
          <button onClick={handleAdd}>Add To Cart </button>
        )}
      </div>
    </div>
  );
};
