import { useState } from "react";
import Helmet from "../components/Helmet";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";
import "../style/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <Helmet title="All Pizzas">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4 mt-4">
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-between mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBtns"              
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Pizzas;