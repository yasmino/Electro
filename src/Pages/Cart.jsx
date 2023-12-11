import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

const Cart = () => {
  const { removeFromCartIcon, addToCartHandler } = useContext(CartContext);
  // get items from local storage
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <>
      {items.length === 0 && <h1>No Founded Items</h1>}

      <div>
        {items.map((item, index) => {
          const subTotal = item.quantity * item.price.toFixed(2);

          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <p>{item.quantity}</p>
              <h3>Totao Price : ${subTotal}</h3>
              <button
                onClick={() => {
                  removeFromCartIcon(item);
                }}
              >
                remove
              </button>
              <button
                onClick={() => {
                  addToCartHandler(item);
                }}
              >
                Add
              </button>

              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
