import React from 'react';

const Todo = (props) => {

   const deleteTodoHandler = () => {
      console.log('Delete');
      console.log(props.text)
   }

   return (
      <div className='card'>
         <h2>{props.text}</h2>
         <div className='actions'>
            <button className='btn' onClick={deleteTodoHandler}>Delete</button>
         </div>
      </div>
   );
};

export default Todo;