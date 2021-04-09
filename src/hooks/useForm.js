// write your custom hook here to control your checkout form
import useLocalStorage from './useLocalStorage';

const useForm = (initialValues) => {
  const [formValues, setFormValues] = useLocalStorage('checkoutForm', initialValues);

  const handleChanges = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setFormValues(initialValues);
  };

  return [formValues, handleChanges, clearForm];
}

export default useForm;