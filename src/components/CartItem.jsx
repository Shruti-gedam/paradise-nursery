import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price}</p>
                <p>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => decreaseQuantity(item)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => increaseQuantity(item)}>
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon")}>
            Checkout
          </button>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;