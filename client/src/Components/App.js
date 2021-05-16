import React from 'react'
import { ContactsProvider } from '../Context/ContactsProvider';
import { ConvesationsProvider } from '../Context/ConvesationsProvider';
import { SocketProvider } from '../Context/SocketProvider';
import useLocalStorage from '../Hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from "./Login";

function App() {

  const [ id, setId ] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}> 
      <ContactsProvider>
        <ConvesationsProvider id={id}>
        <Dashboard id={id} /> 
        </ConvesationsProvider>
      </ContactsProvider>
    </SocketProvider>

  )


  return (

    id ? dashboard : <Login onIdSubmit={setId} />

  )
}

// ?

export default App;
