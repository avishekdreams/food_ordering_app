
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./../style/cart-page.css";
import { cartActions } from "../features/shopping-cart/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems && cartItems.length > 0 ? (
                <>
                  <h5 className="mb-5">Summary of your order</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <h5 className="text-center">Your cart is empty</h5>
              )}

              <div className="mt-4">
                <h6>Subtotal: ₹
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will be calculated at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/pizzas">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

function Tr(props) {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(cartActions.deleteItem(id));
  }

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <RiDeleteBin6Line className="ri-delete-bin-line" onClick={deleteItem} />
      </td>
    </tr>
  )
}