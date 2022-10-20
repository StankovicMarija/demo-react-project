export default {
  hero: {
    caption: 'Start building with our APIs for absolutely free.',
    mobileImage: '/img/mobile.png',
    subText: 'Have any questions?',
    subTextLink: 'Contact Us',
    btnName: 'Schedule a Demo',
  },
  clients: {
    caption: 'Who we work with',
    text: 'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.',
    btnName: 'About Us',
  },
  story: {
    easyToImplement: {
      caption: 'Easy to implement',
      text: 'Our API comes with just a few lines of code. You will be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
      code: '/img/story/code.svg',
    },
    simpleUI: {
      caption: 'Simple UI & UX',
      text: 'Our pre-built form is easy to integrate in your app or website is checkout flow and designed to optimize conversion.',
      imgLeft: '/img/story/mobileLeft.png',
      imgRight: '/img/story/mobileRight.png',
      descr: 'mobile',
    },
    finance: {
      titleFinances: 'Personal Finances',
      titleBanking: 'Banking & Coverage',
      titlePayments: 'Consumer Payments',
      textFinances:
        'Consolidate financial data from multiple sources and categorizetransactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
      textBanking:
        'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
      textPayments:
        'Its easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
      imgFinances: '/img/story/first.svg',
      imgBanking: '/img/story/second.svg',
      imgPayments: '/img/story/third.svg',
    },
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
