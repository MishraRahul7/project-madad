import React from "react";

const useFormValidation = (initialState) => {
  const [values, setValues] = React.useState(initialState);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.values,
    });
  }
  return { handleChange, values };
};

export default useFormValidation;
