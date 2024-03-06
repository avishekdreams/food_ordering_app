import { useEffect, useState } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ExtraIngredient from "../components/ExtraIngredient/ExtraIngredient";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/shopping-cart/cartSlice";

import "../style/product-details.css";
import "../style/product-card.css";

import ProductCard from "../components/ProductCard";

const ExtraIngredients = {
  MUSHROOMS: "Mushrooms",
  ONION: "Onion",
  PEPPER: "Pepper",
  PINEAPPLE: "Pineapple",
  TUNA: "Tune",
  CHICKEN: "Chicken",
  CORN: "Corn",
}

const PizzaDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [isUpdatedNotificationDisplayed, setIsUpdatedNotificationDisplayed] = useState(false);
  const product = products.find((product) => product.id === id);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);

  useEffect(() => {
    const existingPizza = cartProducts.find(item => item.id === id);
    if (existingPizza) {
      setExtraIngredients(existingPizza.extraIngredients);
    } else {
      setExtraIngredients([]);
    }
  }, [cartProducts, id]);

  const addItem = () => {
    setIsUpdatedNotificationDisplayed(true);
    setTimeout(function () {
      setIsUpdatedNotificationDisplayed(false);
    }, 3000);

    dispatch(cartActions.addItem({ id, title, price, image01, extraIngredients }));
  }

  useEffect(() => {
    setPreviewImg(product.image01);
    window.scrollTo(0, 0);
  }, [product]);

  const updateExtraIngredients = (ingredient) => {
    if (extraIngredients.includes(ingredient)) {
      setExtraIngredients(extraIngredients.filter(item => item !== ingredient));
    } else {
      setExtraIngredients(prevState => [...prevState, ingredient]);
    }
  }
  
  return (
    <Helmet title="Product-details">
      {isUpdatedNotificationDisplayed && (
        <div className="updateCartNotification">
          <span>You have successfully updated your cart!</span>
        </div>
      )}
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">{" "} Price: <span>₹ {price}</span></p>
                <p className="category mb-5">Category: <span>₹ {category}</span></p>
                <button onClick={addItem} className="addTOCART__btn">
                  {cartProducts.find(item => item.id === id) ? "Update Cart" : "Add to Cart"}
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="extraIngredientsGrid">
                {(Object.values(ExtraIngredients)).map((ingredient) => (
                  <ExtraIngredient
                    isChecked={extraIngredients.includes(ingredient)}
                    key={ingredient}
                    onSelect={ingredient => updateExtraIngredients(ingredient)}
                    ingredient={ingredient}
                  />
                ))}
              </div>
            </Col>

            <Col lg="12">
              <h6 className="description">Description</h6>
              <div className="description__content">
                <p>{desc}</p>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <div className="related__Product-title">You might also like</div>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" sx="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )

}

export default PizzaDetails;