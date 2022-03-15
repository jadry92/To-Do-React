import React from 'react'
import ReactDOM from 'react-dom';
import './styles/AddToDoModal.css'

const AddToDoModal = ({children}) => {
  return ReactDOM.createPortal(
    <div className='ModalBackground'
    >{children}</div>,
  document.getElementById('modal')
  );
}



export default AddToDoModal