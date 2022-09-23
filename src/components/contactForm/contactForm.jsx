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
    errorMessage: '',
    helpmessage: '',
  });

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValid, setIsValid] = useState();

  const handleCheckbox = () => setIsSubscribed(!isSubscribed);

  const [isError, setIsError] = useState({
    nameError: '',
    emailError: '',
    companyNameError: '',
    titleError: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setEnteredValues({ ...enteredValues, [name]: value });
  };

  function validate(values) {
    if (!values.name.trim()) {
      setIsError({ ...setIsError, nameError: 'This field cant be empty' });
    }

    if (!values.email.trim()) {
      setIsError({ ...setIsError, emailError: 'This field cant be empty' });
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      setIsError({ ...setIsError, emailError: 'Incorect email format' });
    }

    if (!values.companyName.trim()) {
      setIsError({
        ...setIsError,
        companyNameError: 'This field cant be empty',
      });
    }
    if (!values.title.trim()) {
      setIsError({ ...setIsError, titleError: 'This field cant be empty' });
    }
    if (setEnteredValues.errorMessage) {
      setIsValid(false);
    }
  }

  const handlerSubmit = (event) => {
    event.preventDefault();

    validate(enteredValues);
    console.log(enteredValues);
    // if (isValid) {
    if (!isValid) {
      alert(JSON.stringify({ enteredValues }));
    }
  };

  console.log(enteredValues.errorMessage);
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
          errorMessage={isError.nameError}
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
          errorMessage={isError.emailError}
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
          errorMessage={isError.companyNameError}
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
          errorMessage={isError.titleError}
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
          value={isSubscribed}
          onClick={handleCheckbox}
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
