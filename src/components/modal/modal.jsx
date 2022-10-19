import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import classes from './modal.module.css';
import ModalContent from './modalContent';
import useModalState from './modalState';

const Modal = () => {
  const { closeModal, showModal, modalContent } = useModalState();

  const cls = classNames(classes.wrapper, {
    [classes.showModal]: showModal,
  });

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={cls}
      onClick={handleCloseModal}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex="0"
    >
      <div className={classes.modal}>
        <button className={classes.btnClose} onClick={closeModal} type="button">
          &times;
        </button>  
        <ModalContent className={classes.content}>{modalContent}</ModalContent>
      </div>
    </div>,
    document.querySelector('#root-modal')
  );
};

export default Modal;
