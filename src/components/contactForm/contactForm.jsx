/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './contactForm.module.css';
import InputField from './inpuField/inputField';
import Button from '../button/button';
import useForm from './useForm';

const formConfig = {
  name: {
    id: 'name',
    type: 'input',
    value: '',
    placeholder: 'Name',
    validation: ['required'],
  },
  email: {
    id: 'email',
    type: 'input',
    value: '',
    placeholder: 'Email',
    validation: ['required', 'email'],
  },
  companyName: {
    id: 'companyName',
    type: 'input',
    value: '',
    placeholder: 'Company Name',
    validation: ['required'],
  },
  title: {
    id: 'title',
    type: 'input',
    value: '',
    placeholder: 'Title',
    validation: ['required'],
  },
  message: {
    id: 'message',
    type: 'input',
    value: '',
    placeholder: 'Message',
  },
  checkbox: {
    id: 'checkbox',
    type: 'checkbox',
    value: '',
  },
};

function Form() {
  const {
    formData, errors, onChange, validate, isValid,
  } = useForm(formConfig);

  const handlerSubmit = (event) => {
    event.preventDefault();
    validate(formData);
    console.log(formData);
    if (isValid) {
      alert(JSON.stringify(formData.value));
    }
  };

  return (
    <form className={classes.form} onSubmit={handlerSubmit}>
      <div className={classes.input}>
        <InputField
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name.value}
          onChange={onChange}
          errorMessage={errors.name}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
          value={formData.email.value}
          onChange={onChange}
          errorMessage={errors.email}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="companyName"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName.value}
          onChange={onChange}
          errorMessage={errors.companyName}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title.value}
          onChange={onChange}
          errorMessage={errors.title}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message.value}
          onChange={onChange}
        />
      </div>
      <div className={classes.checkboxWrapper}>
        <InputField
          id="subscribe"
          type="checkbox"
          value={formData.checkbox.value}
          onClick={onChange}
        />
        <label htmlFor="subscribe" className={classes.label}>
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <div className={classes.btnWrapper}>
        <Button type="submit" onClick={handlerSubmit} variant="light">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
