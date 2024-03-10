import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const products = [
    {
      id: 1,
      name: "Organic Hand Soap",
      price: 20,
      image: require("../assets/products/Product1.jpg"),
    },
    {
      id: 2,
      name: "Organic Lash Serum",
      price: 49,
      image: require("../assets/products/Product2.jpg"),
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
