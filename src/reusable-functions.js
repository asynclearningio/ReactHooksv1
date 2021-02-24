import React from 'react';

export const useLocalStorageState = (key, defaultValue = '', {
    serialize = JSON.stringify,
    deserialize = JSON.parse
 } = {}) => {

    const [state, setState] = React.useState(
      () => {
          const valueInLocalStorage = window.localStorage.getItem(key);
          if(valueInLocalStorage){
              return deserialize(valueInLocalStorage);
          }
          return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }
    )
  
    React.useEffect(() => {
      window.localStorage.setItem(key, serialize(state))
    }, [state, serialize, key]);
  
    return [state, setState]
  }