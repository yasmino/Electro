import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCartIcon } = useContext(CartContext);

  return (
    <>
      {cartItems.length === 0 && <h1>No Founded Items</h1>}
      <div>
        {cartItems.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  removeFromCartIcon(item);
                }}
              >
                remove
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
