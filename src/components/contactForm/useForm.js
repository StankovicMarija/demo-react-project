/* eslint-disable max-len */
import { useState } from 'react';

const isValid = (validationErrors) => Object.keys(validationErrors).length === 0;

const useForm = (formConfig) => {
  const [formData, setFormData] = useState(formConfig);

  const [errors, setIsError] = useState({});

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
    const validationErrors = {};
    Object.values(data).forEach((input, index) => {
      const inputName = Object.keys(data)[index];
      if (input.validation) {
        if (input.validation.includes('required') && !input.value.trim()) {
          validationErrors[inputName] = 'This field cant be empty';
        }
        if (
          input.validation.includes('email')
          && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.value)
        ) {
          validationErrors.email = 'Incorect email format';
        }
      }
    });

    setIsError(validationErrors);

    return isValid(validationErrors);
  };

  return {
    formData,
    errors,
    onChange,
    validate,
  };
};

export default useForm;
