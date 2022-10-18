import { atom } from 'recoil';

export const showModalAtom = atom({
  key: 'showModal',
  default: false,
});

export const modalContentAtom = atom({
  key: 'modalContent',
  default: null,
});

