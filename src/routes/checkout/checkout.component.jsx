import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(
        (cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )

        // const { name, quantity, id } = cartItem;

        // return (
        //   <div key={id}>
        //     <h2>{name}</h2>
        //     <span>{quantity}</span>
        //     <span onClick={() => addItemToCart(cartItem)}>increment</span>
        //     <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
        //   </div>
        // );
      )}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
