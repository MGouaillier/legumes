import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditProduct = ({ match, history }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/edit-product/" + match.params.id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setQuantity(res.data.quantity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/products/update-product/" + match.params.id, {
        name,
        quantity,
      })
      .then(() => console.log("Product updated"))
      .catch((error) => console.log(error))
      .finally(() => history.push("/products-list"));
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="Produit">
          <Form.Label>Nom du produit</Form.Label>
          <Form.Control type="text" value={name} onChange={onChangeName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Quantity">
          <Form.Label>Quantité</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={onChangeQuantity}
          />
        </Form.Group>

        <Button block="block" type="submit">
          Editer un produit
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
