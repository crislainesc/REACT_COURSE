import { useEffect, useRef } from 'react';

import classes from './NewCommentForm.module.css';

import LoadingSpinner from '../UI/LoadingSpinner';
import { addComment } from '../../lib/api';
import useHttp from '../../hooks/use-http';

const NewCommentForm = (props) => {

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  const commentTextRef = useRef();

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment])


  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef

    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText.current.value }, quoteId: props.quoteId })
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
