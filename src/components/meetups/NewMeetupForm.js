import React from 'react';

import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = () => {
   return (
      <Card>
         <form className={classes.form}>
            <div className={classes.control}>
               <label htmlFor='title'>Meetup Title</label>
               <input type='text' required id='title' />
            </div>
            <div className={classes.control}>
               <label htmlFor='image'>Meetup Image</label>
               <input type='url' required id='image' />
            </div>
            <div className={classes.control}>
               <label htmlFor='adress'>Adress</label>
               <input type='text' required id='adress' />
            </div>
            <div className={classes.control}>
               <label htmlFor='description'>Description</label>
               <textarea rows='5' required id='description' />
            </div>
            <div className={classes.actions}>
               <button>Add Meetup</button>
            </div>
         </form>
      </Card >
   );
};

export default NewMeetupForm;