import { ListGroup } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import "./../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="" />
        <p>Best pizzas you will find in town, try it out!</p>
      </div>
      <dir>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </dir>
    </footer>
  )
}