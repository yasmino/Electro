import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

const Cart = () => {
  const { removeFromCartIcon, addToCartHandler, items, total, clearCartItems } =
    useContext(CartContext);

  return (
    <>
      {items.length === 0 && <h1>No Founded Items</h1>}
      <div>
        {items.map((item, index) => {
          // get subTotal
          const subTotal = item.quantity * item.price;
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <p>{item.quantity}</p>
              <h3>subTotal Price : ${subTotal}</h3>
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
        <h3>{items.length === 0 ? "" : <p>Total Price : {total}</p>}</h3>

        {items.length === 0 ? (
          ""
        ) : (
          <button
            onClick={() => {
              clearCartItems();
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
