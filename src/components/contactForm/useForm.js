/* eslint-disable max-len */
import { useState } from 'react';

const useForm = (formConfig) => {
  const [formData, setFormData] = useState(formConfig);
  // console.log(formData);
  const [errors, setIsError] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
  });

  const [isValid, setIsValid] = useState(false);

  const onChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    const enteredValues = (prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...prevState[e.target.name],
        value: isCheckbox ? e.target.checked : e.target.value,
      },
    });
    setFormData(enteredValues);
  };

  const validate = (data) => {
    Object.values(data).map((input) => {
      const validationInput = input.validation[0];
      const validationEmail = input.validation[1];
      // console.log(validationInput);
      const inputName = input.id;
      if (validationInput === 'required' && !input.value.trim()) {
        setIsError((prevState) => ({
          ...prevState,
          [inputName]: 'This field cant be epty',
        }));
      }
      console.log(errors);
      if (
        validationEmail === 'email'
        && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.value)
      ) {
        setIsError((prevState) => ({
          ...prevState,
          email: 'Incorect email format',
        }));
      }
      return errors;
    });

    if (
      errors.name === ''
      && errors.email === ''
      && errors.companyName === ''
      && errors.title === ''
    ) {
      setIsValid(true);
    }
  };

  return {
    formData,
    errors,
    onChange,
    validate,
    isValid,
  };
};

export default useForm;
