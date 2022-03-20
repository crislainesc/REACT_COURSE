import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

   const [showModal, setShowModal] = useState(false);

   const deleteTodoHandler = () => {
      setShowModal(true)
   }

   const closeModalHandler = () => {
      setShowModal(false);
   }

   return (
      <div className='card'>
         <h2>{props.text}</h2>
         <div className='actions'>
            <button className='btn' onClick={deleteTodoHandler}>Delete</button>
         </div>
         {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
         {showModal && <Backdrop onClick={closeModalHandler} />}
      </div>
   );
};

export default Todo;