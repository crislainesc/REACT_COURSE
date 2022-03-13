import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
  const firstNameIsValid = !enteredFirstNameIsValid && firstNameTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== '';
  const lastNameIsValid = !enteredLastNameIsValid && lastNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailIsValid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastName && enteredEmail) {
    formIsValid = true;
  }

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value)
  }

  const firstNameBlurHandler = () => {
    setFirstNameTouched(true);
  }

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value)
  }

  const lastNameBlurHandler = () => {
    setLastNameTouched(true);
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailBlurHandler = () => {
    setEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredFirstName('');
    setFirstNameTouched(false);

    setEnteredLastName('');
    setLastNameTouched(false);

    setEnteredEmail('');
    setEmailTouched(false);
  }

  const firstNameInputClass = firstNameIsValid ? 'form-control invalid' : 'form-control';
  const lastNameInputClass = lastNameIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
          />
          {firstNameIsValid && <p className='error-text'>First name is must not empty</p>}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={enteredLastName}
          />
          {lastNameIsValid && <p className='error-text'>Last name is must not empty</p>}
        </div>
      </div>
      <div className={emailInputClass}>
          <label htmlFor='name'>E-Mail Address</label>
          <input
            type='email'
            id='email'
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          {emailIsValid && <p className='error-text'>Please enter a valid e-mail</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
