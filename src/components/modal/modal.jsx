import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import classes from './modal.module.css';
import ModalContent from './modalContent';
import ModalContext from './modalContext';

const Modal = () => {
  const { showModal, closeModal } = useContext(ModalContext);
  const cls = classNames(classes.wrapper, {
    [classes.showModal]: showModal,
  });

  return ReactDOM.createPortal(
    <div
      className={cls}
      onClick={closeModal}
      onKeyPress={(ev) => (ev.key === 'Escape' ? closeModal : null)}
      role="button"
      tabIndex="0"
    >
      <div className={classes.modal}>
        <button
          className={classes.btnClose}
          onClick={closeModal}
          type="button"
        >
          &times;
        </button>
        <ModalContent
          className={classes.content}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>
    </div>,
    document.querySelector('#root-modal'),
  );
};

export default Modal;
