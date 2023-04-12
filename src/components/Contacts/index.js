import {useEffect, useState} from 'react'

import Form from './Form'
import List from './List'
function Contacts() {

  const [contacts, setContacts]= useState([{todo:"Learing React"}])

  useEffect(()=>{
    console.log(contacts)
  },[contacts])
  
  return (
    <div id='container'>
      <Form addContacts={setContacts} contacts={contacts}/>
      <List contacts={contacts}/>
    </div>
  )
}

export default Contacts
