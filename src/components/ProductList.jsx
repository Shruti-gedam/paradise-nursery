import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Rose",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 5,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb",
  },
  {
    id: 6,
    name: "Jasmine",
    price: 22,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19cbbd0d2f4",
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
];

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}

      <button className="cart-button" onClick={onCartClick}>
        Go to Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
      </button>
    </div>
  );
}

export default ProductList;