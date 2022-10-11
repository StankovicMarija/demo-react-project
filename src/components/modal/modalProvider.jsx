import React from 'react';
import useModal from './useModal';
import Modal from './modal';
import ModalContext from './modalContext';

const ModalProvider = ({ children }) => {
  const { Provider } = ModalContext;

  const {
    showModal,
    closeModal,
    openModal,
  } = useModal();

  return (
    <Provider value={{
      showModal,
      closeModal,
      openModal,
    }}
    >
      {children}
      <Modal />
    </Provider>
  );
};

export default ModalProvider;
