import React, { useRef } from 'react';

import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {

   const titleInputRef = useRef()
   const imageInputRef = useRef()
   const adressInputRef = useRef()
   const descriptionInputRef = useRef()


   const submitHandler = (event) => {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAdress = adressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;


      const meetupData = {
         title: enteredTitle,
         image: enteredImage,
         address: enteredAdress,
         description: enteredDescription
      }

      props.onAddMeetup(meetupData)

   }

   return (
      <Card>
         <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
               <label htmlFor='title'>Meetup Title</label>
               <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor='image'>Meetup Image</label>
               <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor='adress'>Adress</label>
               <input type='text' required id='adress' ref={adressInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor='description'>Description</label>
               <textarea rows='5' required id='description' ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
               <button>Add Meetup</button>
            </div>
         </form>
      </Card >
   );
};

export default NewMeetupForm;