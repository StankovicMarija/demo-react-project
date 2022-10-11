import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleKeyPress = (event) => (event.key === 'Escape' ? closeModal : null);
    document.body.addEventListener('keydown', handleKeyPress);
    return () => {
      document.body.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return {
    showModal,
    closeModal,
    openModal,
  };
};

export default useModal;
