import Header from "./Header";
import Routes from "../routes/Router";
import { useSelector } from "react-redux";
import Carts from "./cart/Carts";
import Footer from "./Footer";

export default function Layout() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}