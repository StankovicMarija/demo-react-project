export default {
  name: {
    type: 'input',
    value: '',
    validation: ['required'],
  },
  email: {
    type: 'input',
    value: '',
    validation: ['required', 'email'],
  },
  companyName: {
    type: 'input',
    value: '',
    validation: ['required'],
  },
  title: {
    type: 'input',
    value: '',
    validation: ['required'],
  },
  message: {
    type: 'input',
    value: '',
  },
  checkbox: {
    type: 'checkbox',
    value: '',
  },
};
