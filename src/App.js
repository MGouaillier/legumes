import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-product"} className="nav-link">
                  Legumes
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-product"} className="nav-link">
                    Create Product
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/products-list"} className="nav-link">
                    Products List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/create-product"
                    component={(props) => <CreateProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-product/:id"
                    component={(props) => <EditProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/products-list"
                    component={(props) => <ProductsList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
