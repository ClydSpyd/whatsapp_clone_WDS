import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useContacts } from '../Context/ContactsProvider'
import { useConversations} from '../Context/ConvesationsProvider'

export default function NewConvesationModal({closeModal}) {

  const { contacts } = useContacts()
  const { createConversation } = useConversations()
  const [ selectedContactIds, setSelectedContactIds ] = useState([])

  const handleCheckboxChange = (id) => {
    setSelectedContactIds(prevSelectedIds => {
      if(selectedContactIds.includes(id)){
        return prevSelectedIds.filter(prevId => {
          return id !== prevId
        })
      } else {
        return [...prevSelectedIds, id]
      }

    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    createConversation(selectedContactIds)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {
            contacts.map( contact => (
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  onChange={()=>handleCheckboxChange(contact.id)} />

                  </Form.Group>


            ))
          }
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
