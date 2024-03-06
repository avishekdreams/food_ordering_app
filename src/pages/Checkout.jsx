import { AiFillCheckCircle } from "react-icons/ai";
import "./../style/checkout.css";

export default function Checkout() {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order !</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as possible
        </span>
      </div>
    </>
  )
}