/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classes from './contactForm.module.css';
import InputField from './inpuField/inputField';
import Button from '../button/button';

function Form() {
  const [enteredValues, setEnteredValues] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
    checkbox: false,
  });

  const [errors, setIsError] = useState({
    nameError: '',
    emailError: '',
    companyNameError: '',
    titleError: '',
  });

  const [isValid, setIsValid] = useState();

  const onChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    setEnteredValues((prevState) => ({
      ...prevState,
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    }));

    if (!enteredValues.name.trim()) {
      setIsError((prevState) => ({
        ...prevState,
        nameError: 'This field cant be empty',
      }));
      setIsValid(false);
    } else {
      setIsError((prevState) => ({
        ...prevState,
        nameError: '',
      }));
    }

    if (!enteredValues.email.trim()) {
      setIsError((prevState) => ({
        ...prevState,
        emailError: 'This field cant be empty',
      }));
      setIsValid(false);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(enteredValues.email)
    ) {
      setIsError((prevState) => ({
        ...prevState,
        emailError: 'Incorect email format',
      }));
      setIsValid(false);
    } else {
      setIsError((prevState) => ({
        ...prevState,
        emailError: '',
      }));
    }

    if (!enteredValues.companyName.trim()) {
      setIsError((prevState) => ({
        ...prevState,
        companyNameError: 'This field cant be empty',
      }));
      setIsValid(false);
    } else {
      setIsError((prevState) => ({
        ...prevState,
        companyNameError: '',
      }));
    }

    if (!enteredValues.title.trim()) {
      setIsError((prevState) => ({
        ...prevState,
        titleError: 'This field cant be empty',
      }));
      setIsValid(false);
    } else {
      setIsError((prevState) => ({
        ...prevState,
        titleError: '',
      }));
    }

    if (
      errors.nameError === ''
      && errors.emailError === ''
      && errors.companyNameError === ''
      && errors.titleError === ''
    ) {
      setIsValid(true);
    }
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      alert(JSON.stringify({ enteredValues }));
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
          value={enteredValues.name}
          onChange={onChange}
          errorMessage={errors.nameError}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
          value={enteredValues.email}
          onChange={onChange}
          errorMessage={errors.emailError}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="companyName"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={enteredValues.companyName}
          onChange={onChange}
          errorMessage={errors.companyNameError}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={enteredValues.title}
          onChange={onChange}
          errorMessage={errors.titleError}
        />
      </div>
      <div className={classes.input}>
        <InputField
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          value={enteredValues.message}
          onChange={onChange}
        />
      </div>
      <div className={classes.checkboxWrapper}>
        <InputField
          id="subscribe"
          type="checkbox"
          value={enteredValues.checkbox}
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
