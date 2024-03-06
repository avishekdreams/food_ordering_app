import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListGroupItem } from "reactstrap";
import { RiAddLine, RiSubtractLine, RiCloseLine } from "react-icons/ri";
import { cartActions } from "../../features/shopping-cart/cartSlice";

import "./../../style/cart-item.css";

export default function CartItem({ item, onClose }) {
  const { id, title, price, image01, quantity, extraIngredients } = item;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function incrementItem(e) {
    dispatch(cartActions.addItem({ id, title, price, image01, extraIngredients }));
    e.stopPropagation();
  }

  function decreaseItem(e) {
    dispatch(cartActions.removeItem(id));
    e.stopPropagation();
  }

  function deleteItem(e) {
    dispatch(cartActions.deleteItem(id));
    e.stopPropagation();
  }

  function handlePizzaSelection() {
    navigate(`/pizzas/${id}`);
    onClose();
  }

  return (
    <ListGroupItem className="border-0 cart__item" onClick={handlePizzaSelection}>
      <div className="cart__item-info d-flex gap-4">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity} x <span>₹{price}</span>
            </p>
            <div className="d-flex flex-column">
              {extraIngredients !== undefined && (Array.from(extraIngredients).map(value => {
                return (
                  <span key={value} className="m-0">{value}</span>
                )
              }))}
            </div>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={(e) => incrementItem(e)}><RiAddLine /></span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={(e) => decreaseItem(e)}><RiSubtractLine /></span>
            </div>
          </div>
          <span className="delete__btn" onClick={e => deleteItem(e)}>
            <RiCloseLine />
          </span>
        </div>
      </div>
    </ListGroupItem>
  )
}