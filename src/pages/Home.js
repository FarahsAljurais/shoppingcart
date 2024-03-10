import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

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
    {
      id: 3,
      name: "Organic Vitamin-C Drop",
      price: 179,
      image: require("../assets/products/Product3.jpg"),
    },
    {
      id: 4,
      name: "Organic Hand Cream",
      price: 39,
      image: require("../assets/products/Product4.jpg"),
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
