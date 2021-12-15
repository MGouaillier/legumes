import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const CreateProduct = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [errors, setErrors] = useState({});

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      axios
        .post("http://localhost:4000/products/create-product", {
          name,
          quantity,
        })
        .then((res) => {
          console.log(res.data);
          setName("");
          setQuantity(0);
          setErrors({});
        });
    }
  };

  const findFormErrors = () => {
    const newErrors = {};
    if (!name || name === "") newErrors.name = "Le champ ne doit pas être vide";
    else if (name.length > 30) newErrors.name = "Le nom est trop long";

    if (!quantity || quantity === null || quantity === 0)
      newErrors.quantity = "Le champ ne doit pas être vide";

    return newErrors;
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="Produit">
          <Form.Label>Nom du produit</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={onChangeName}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Quantity">
          <Form.Label>Quantité</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={onChangeQuantity}
            isInvalid={!!errors.quantity}
          />
          <Form.Control.Feedback type="invalid">
            {errors.quantity}
          </Form.Control.Feedback>
        </Form.Group>

        <Button block="block" type="submit">
          Ajouter un produit
        </Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
