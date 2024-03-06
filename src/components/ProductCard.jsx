import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

import "../style/product-card.css";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({ id, title, price, image01, extraIngredients })
    );
  }

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image01} alt="Pizza" />
        <h5>
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">₹ {price}</span>
        <button className="addTOCART__btn" onClick={addToCart}>
          {cartProducts.find(item => item.id === id) ? "Update Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

export default ProductCard;