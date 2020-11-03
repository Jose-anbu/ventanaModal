import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const VentanaModal = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img
          src="https://lh3.googleusercontent.com/proxy/UvefFkDhKcIKpEALcaEpmXydNqzAJnI6YmY9CSVHNZ-1-gDmB-4NedzXjv5llxnPrOX0LNDsZVp5XXCBnig0bSWUPFcO7KTQODg5syfguEZCZFdqeGtgY9JZXy4RUhaEnCkEIrif_3ULqgbsuZTqUAnF"
          alt="Línea de contención"
          className="w-100"
        ></img>
      </Modal.Body>
    </Modal>
  );
};

export default VentanaModal;
