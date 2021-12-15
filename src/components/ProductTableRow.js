import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductTableRow = ({ product, remove }) => {
  const deleteProduct = () => {
    axios
      .delete("http://localhost:4000/products/delete-product/" + product._id)
      .then(() => {
        remove(product._id);
        console.log("Product deleted");
      })
      .catch((error) => console.log(error));
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>
        <Link className="edit-link" to={"/edit-product/" + product._id}>
          <Button size="sm" variant="primary">
            Edit
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteProduct}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
