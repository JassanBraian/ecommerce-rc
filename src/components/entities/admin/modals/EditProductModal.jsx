import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import AdminProductsContext from "../../../../context/admin/products/AdminProductsContext";

const EditProductModal = ({ show, onHide }) => {

  const { currentProduct, updateProduct } = useContext(AdminProductsContext);

  const initialFormValues = {
    name: '',
    brand: 'Adidas',
    price: '',
    stock: '',
    category: 'Indumentaria',
    isInOffer: false,
    offerPrice: 0
  };

  const [form, setForm] = useState(initialFormValues);

  const { name, brand, price, stock, category, isInOffer, offerPrice } = form;

  useEffect(()=>{
      setForm(currentProduct)
  }, [currentProduct])

  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = e =>{
    e.preventDefault();
    updateProduct(form);
    onHide();
  }

  return (
    <Modal show={show} centered className="edit-product-modal">
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Editar un producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Indique el nombre del producto"
              autoFocus
              className="edit-product-modal-input"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Marca</Form.Label>
            <Form.Select
              name="brand"
              className="edit-product-modal-input"
              value={brand}
              onChange={handleChange}
            >
              <option value="Adidas">Adidas</option>
              <option value="Kappa">Kappa</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
              <option value="Topper">Topper</option>
              <option value="Umbro">Umbro</option>
              <option value="Under Armour">Under Armour</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Indique el precio del producto"
              className="edit-product-modal-input"
              value={price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Indique cuántas unidades hay en stock"
              className="edit-product-modal-input"
              value={stock}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              className="edit-product-modal-input"
              value={category}
              onChange={handleChange}
            >
                <option value="Zapatillas">Zapatillas</option>
                <option value="Ojotas">Ojotas</option>
                <option value="Botines">Botines</option>
                <option value="Remeras">Remeras</option>
                <option value="Camisetas">Camisetas</option>
                <option value="Shorts">Shorts</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Buzos y Camperas">Buzos y Camperas</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>¿Está en oferta?</Form.Label>
            <Form.Select
              className="edit-product-modal-input"
              name="isInOffer"
              value={isInOffer}
              onChange={handleChange}
            >
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio de oferta</Form.Label>
              <Form.Control
                type="number"
                name="offerPrice"
                placeholder="Indique el precio de oferta"
                className="create-product-modal-input"
                value={offerPrice}
                onChange={handleChange}
                /* disabled={isDisabled} */ />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Editar producto
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditProductModal;
