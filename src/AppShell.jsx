import React, { useState } from "react";
import ModalManager from "./ModalManager";

import { Button } from "react-bootstrap";
import {OpenButtons} from "./components/common/Buttons/openButtons";

const AppShell = () => {
  const [modalOpen, setModal] = useState(false);

  const openModal = (event) => {
    const { modal } = event.target.dataset;
    if (modal) setModal(modal);
  };

  const closeModal = () => setModal("");

  return (
    <>
      <div onClick={openModal}>
        <h3>Кнопки</h3>
        <OpenButtons />
        <hr />
        <Button variant="outline-primary" type="button" data-modal="modal-update">
          Modal 3
        </Button>
      </div>
        <ModalManager closeFn={closeModal} modal={modalOpen} />
    </>
  );
};

export default AppShell;
