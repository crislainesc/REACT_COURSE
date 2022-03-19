import React, { useRef } from 'react';

const NewTodo = () => {
	const todoTextInput = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

      const enteredText = todoTextInput.current!.value;

      if(enteredText.trim().length === 0) {
         /// throw an error
         return;
      }

      

	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInput} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
