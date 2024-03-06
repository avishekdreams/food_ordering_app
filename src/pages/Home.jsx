import Helmet from "../components/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import guyImg from "../assets/images/hero.png";

import "../style/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favourite Pizza
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/pizzas">
                    Menu <RiArrowRightSLine />
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;