import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  let cartData = useSelector((state) => state.counter.cart);
  console.log(cartData.length);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Link
                to="contact"
                className="ps-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
              <Link
                to="about"
                className="ps-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
              <Link
                to="/"
                className="ps-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                Mart
              </Link>
              <Link
                to="Cart"
                className="ps-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button type="button" class="btn btn-primary position-relative">
                  Cart
                  {cartData.length >= 1 && (
                    <>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartData.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </>
                  )}
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
