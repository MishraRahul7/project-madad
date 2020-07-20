import React from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      // console.log("authenticated", values.email, values.password);
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  }

  function habndleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }
  return {
    handleSubmit,
    handleChange,
    habndleBlur,
    values,
    errors,
    isSubmitting,
  };
};

export default useFormValidation;
