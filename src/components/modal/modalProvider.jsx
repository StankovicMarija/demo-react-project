import React, { useState } from 'react';
import ModalContext from './useModal';
import Modal from './modal';

const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState();

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'visible';
  };

  function openModal(content) {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <Provider value={{
      modalContent, showModal, openModal, closeModal,
    }}
    >
      {children}
      <Modal />
    </Provider>
  );
};

export default ModalProvider;
