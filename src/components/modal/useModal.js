import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  if (showModal) document.body.style.overflow = 'hidden';

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'visible';
  };

  function openModal() {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  return {
    showModal,
    closeModal,
    openModal,
  };
};

export default useModal;
