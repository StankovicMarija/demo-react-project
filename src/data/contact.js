export default {
  caption: {
    caption: 'Submit a help request and we will get in touch shortly.',
  },
  formConfig: {
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
  },
  innovators: {
    text: 'Join the thousands of innovators already building with us',
  },
  schedule: {
    caption: 'Ready to start?',
    btnName: 'Schedule a Demo',
  },
  subscriptionForm: {
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
  },
};
