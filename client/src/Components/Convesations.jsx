import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../Context/ConvesationsProvider'

export default function Convesations() {

  const { conversations, selectConversationIndex } = useConversations()

  useEffect(()=>{
    console.log('hello')
    console.log(conversations)
  },[])

  return (
    <ListGroup variant="flush">
      {conversations?.map((conversation, index) => 
        <ListGroup.Item 
          key={index}
          action
          onClick={()=> selectConversationIndex(index)}
          active={conversation.selected} >
          {conversation.recipients.map(r=>r.name).join(', ')}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}
