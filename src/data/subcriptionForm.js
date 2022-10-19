export default {
  firstName: {
    type: 'input',
    value: '',
    validation: ['required'],
  },
  lastName: {
    type: 'input',
    value: '',
    validation: ['required'],
  },
  modalEmail: {
    type: 'input',
    value: '',
    validation: ['required', 'email'],
  },
  date: {
    type: 'input',
    value: '',
    validation: ['required', 'date'],
  },
};
