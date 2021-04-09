// write your custom hook here to control your checkout form
import useLocalStorage from './useLocalStorage';

// uselocalstorage custom hook uses localstorage to keep form state variable values stored until user clears form (or browser times out of maintaining local storage)
const useForm = (initialValues) => {
  const [formValues, setFormValues] = useLocalStorage('checkoutForm', initialValues);

  // form values are updated each time input fields are updated using state variable and spread operator
  const handleChanges = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // User can clear form through addition of Clear Form button and event handler below that resets formvalues state variable and local storage to initial values
  const clearForm = e => {
    e.preventDefault();
    setFormValues(initialValues);
  };

  return [formValues, handleChanges, clearForm];
}

export default useForm;