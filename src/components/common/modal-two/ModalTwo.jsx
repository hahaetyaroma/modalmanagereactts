import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalTwo = ({ closeFn = () => null, open = false }) => {
  return (
<Modal show={open} onHide={closeFn}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading222222222222222222222222</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFn}>
            Close
          </Button>
          <Button variant="primary" onClick={closeFn}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default ModalTwo;
