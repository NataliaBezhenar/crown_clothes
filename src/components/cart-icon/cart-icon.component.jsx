import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemsCountSpan,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemsCountSpan>{cartCount}</ItemsCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
