import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {cartList} = useSelector((state) => state.cartState);

  const { id, name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  function handleAdd() {
    dispatch(add(product));
  }
  function handleRemove() {
    dispatch(remove(product));
  }
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={handleRemove}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={handleAdd}>Add To Cart </button>
        )}
      </div>
    </div>
  );
};
