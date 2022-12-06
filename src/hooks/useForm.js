import { useState } from "react";
import { validate } from "../pages/utils/validate";

export const useForm = (rules) => {
  const [values, setValues] = useState({});
  const [errors, setError] = useState({});

  const register = (name) => {
    return {
      error: errors[name],
      value: values[name] || "",
      onChange: (ev) => {
        setValues({ ...values, [name]: ev.target.value });
        setError({ ...errors, [name]: "" });
      },
    };
  };
  const _validate = () => {
    const errorObject = validate(rules, values);
    setError(errorObject);
    return Object.keys(errorObject).length === 0;
  };
  const reset = () => {
    setValues({})
  }
  return {
    reset,
    values,
    errors,
    register,
    validate: _validate,
  };
};
