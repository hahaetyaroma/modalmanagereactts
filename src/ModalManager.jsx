import React from 'react';

import ModalOne from './components/common/modal-one/ModalOne';
import ModalTwo from './components/common/modal-two/ModalTwo';
import ModalThree from './components/common/modal-three/ModalThree';

const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === 'modal-redirect'} />
      <ModalTwo closeFn={closeFn} open={modal === 'modal-confirm'} />
      <ModalThree closeFn={closeFn} open={modal === 'modal-update'} />
    </>
  );
};

export default ModalManager;
