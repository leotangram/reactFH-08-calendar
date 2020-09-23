import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#root')

const CalendarModal = props => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-fondo"
      style={customStyles}
    >
      <h1>hola</h1>
      <hr />
      <span>Hola again</span>
    </Modal>
  )
}

export default CalendarModal
