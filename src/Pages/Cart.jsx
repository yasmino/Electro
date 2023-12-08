const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      <div>{cartItems.length === 0 && <h2>No Founded Items</h2>}</div>
      <div>
        {cartItems.map((item, index) => {
          const { name, image, price, quantity } = item;
          return (
            <div key={index}>
              <h2>{name}</h2>
              <img src={image} alt="" />
              <h3>{price}</h3>
              <h3>{quantity}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
