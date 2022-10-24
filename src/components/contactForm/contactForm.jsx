/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './contactForm.module.css';
import InputField from './inpuField/inputField';
import Button from '../button/button';
import useForm from './useForm';

const formConfig = {
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

const Form = () => {
  const { formData, errors, onChange, validate } = useForm(formConfig);

  const handlerSubmit = event => {
    event.preventDefault();
    const isValid = validate(formData);
    if (isValid) {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <form className={classes.form} onSubmit={handlerSubmit}>
      <div className={classes.input}>
        <InputField
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
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message.value}
          onChange={onChange}
        />
      </div>
      <div className={classes.checkboxWrapper}>
        <InputField
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
};

export default Form;
