import { useRecoilState } from 'recoil';
import { modalContentAtom, showModalAtom } from './modalAtoms/modalAtoms';

const useModalState = () => {
  const [modalContent, setModalContent] = useRecoilState(showModalAtom);
  const [showModal, setShowModal] = useRecoilState(modalContentAtom);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'visible';
  };

  function openModal(content) {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }
  return { modalContent, showModal, closeModal, openModal };
};

export default useModalState;
