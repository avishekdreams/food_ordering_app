import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from '../features/shopping-cart/cartUiSlice';
import { RiShoppingCartFill, RiLoginCircleLine, RiMenuFill, RiCloseFill } from "react-icons/ri";
import "../style/header.css";

const nav__links = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
]

export default function Header() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Eat Till You Explode</h5>
          </div>

          {/* === Menu === */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5" onClick={(event) => event.stopPropagation()}>
              <div className="header__closeButton">
                <span onClick={toggleMenu}><RiCloseFill /></span>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) => navClass.isActive ? "active__menu" : ""}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* === nav right icons === */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <RiShoppingCartFill className="ri-shopping-basket-line" />
              <span className="cart__badge"></span>
            </span>

            <span className="user">
              <Link to="/login"><RiLoginCircleLine className="ri-user-line" /></Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <RiMenuFill className="ri-user-line" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  )

}

