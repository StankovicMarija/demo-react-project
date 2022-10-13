import React from 'react';
import Button from '../button/button';
import InputField from '../contactForm/inpuField/inputField';
import classes from './modalContent.module.css';
import useForm from '../contactForm/useForm';

const formConfig = {
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
  },
};

const ModalContent = () => {
  const {
    formData, errors, onChange, validate,
  } = useForm(formConfig);
  console.log(formData);
  const handlerSubmit = (event) => {
    event.preventDefault();
    const isValid = validate(formData);
    if (isValid) {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div className={classes.content}>
      <form className={classes.form} onSubmit={handlerSubmit}>
        <div className={classes.input}>
          <InputField
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName.value}
            onChange={onChange}
            errorMessage={errors.firstName}
          />
        </div>
        <div className={classes.input}>
          <InputField
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName.value}
            onChange={onChange}
            errorMessage={errors.lastName}
          />
        </div>
        <div>
          <InputField
            type="text"
            name="modalEmail"
            placeholder="Email Address"
            value={formData.modalEmail.value}
            onChange={onChange}
            errorMessage={errors.modalEmail}
          />
        </div>
        <div className={classes.input}>
          <InputField
            type="text"
            name="date"
            placeholder="DD-MM-YYYY"
          />
        </div>
        <div className={classes.btnWrapper}>
          <Button type="submit" variant="light" onClick={handlerSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ModalContent;
