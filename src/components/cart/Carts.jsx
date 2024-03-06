import { ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from '../../features/shopping-cart/cartUiSlice';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { RiCloseFill } from "react-icons/ri";
import "../../style/cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  function toggleCart() {
    dispatch(cartUiActions.toggle());
  }

  return (
    <div className="cart__container" onClick={toggleCart}>
      <ListGroup onClick={(event) => event.stopPropagation()} className="cart">
        <div className="cart__closeButton">
          <span onClick={toggleCart}>
            <RiCloseFill className="icon" />
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Subtotal: <span>₹{totalAmount}</span></h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts;