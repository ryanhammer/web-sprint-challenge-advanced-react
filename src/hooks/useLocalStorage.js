import { useState } from 'react';

// useLocalStorage will employ use of localStorage to organize form stateful logic and maintain form values if page is refreshed or form is submitted
// A clear form button is added to allow users to clear out values if they want/need to start over
const useLocalStorage = (key, initialValue) => {
  // Check to see if value is in localStorage then if it is, insert that into our state value. If it isn't, put the initial value into state value and into localStorage


  const [value, setValue] = useState( () => {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
    
    // Any update of state is saved into localStorage
    const setLocalStorageValue = value => {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }

    return [value, setLocalStorageValue];
}

export default useLocalStorage;