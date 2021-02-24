
import React from 'react';
import { useLocalStorageState } from './reusable-functions'

const Greeting = ({initialValue = ''}) => {

  const [name, setName] = useLocalStorageState('name', initialValue);

  function handleChange(event){
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong>: 'Please type your name'}
    </div>
  )
}

export default function App(){
  return <Greeting />
}
