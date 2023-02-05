import React from "react";
import { Button } from "react-bootstrap";

export const OpenButtons = () => {
  return (
    <>
        <Button type="button" data-modal="modal-redirect">
          Modal 1
        </Button>
        <Button type="button" data-modal="modal-confirm">
          Modal 2
        </Button>
        <Button type="button" data-modal="modal-update">
          Modal 3
        </Button>
    </>
  );
};

