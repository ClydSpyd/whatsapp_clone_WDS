import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Contacts from './Contacts'
import Convesations from './Convesations'
import NewContactModal from './NewContactModal'
import NewConvesationModal from './NewConvesationModal'

export default function Sidebar({id}) {

  const [ activeKey, setActiveKey ] = useState('conversations')
  const [ modalOpen, setModalOpen ] = useState(false)
  const convOpen=activeKey==="conversations"

  const closeModal = () => setModalOpen(false)

  return (
    <div style={{width:"250px"}} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>

          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="conversations">Convesrations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contacts">Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey="conversations">
              <Convesations />
            </Tab.Pane>
            <Tab.Pane eventKey="contacts">
              <Contacts />
            </Tab.Pane>
          </Tab.Content>

          <div className="p-2 border-top border-right small">
            Your ID: <span className="text-muted">{id}</span>
          </div>

          <Button onClick={()=>setModalOpen(!modalOpen)} className="rounded-0">
            New {convOpen?"convesation":"contact"}
          </Button>

      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {
          convOpen ?
            <NewConvesationModal closeModal={closeModal} />
          :
            <NewContactModal closeModal={closeModal}/>
          }
      </Modal>
    </div>
  )
}
