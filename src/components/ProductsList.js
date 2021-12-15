import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProductTableRow from "./ProductTableRow";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        setProducts(res.data);
        console.log("All products loaded");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const remove = (id) => {
    let clone = [...products];
    console.log("clone", clone);
    clone.splice(id, 1);
    setProducts(clone);
  };

  const dataTable = () =>
    products.map((product, i) => (
      <ProductTableRow product={product} key={i} remove={remove} />
    ));

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{dataTable()}</tbody>
      </Table>
    </div>
  );
};

export default ProductsList;
