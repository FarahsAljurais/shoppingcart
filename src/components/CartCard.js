import "./CartCard.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(remove(product));
  }
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
