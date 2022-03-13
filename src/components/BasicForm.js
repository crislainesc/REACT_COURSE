import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const sumitHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    console.log('Sumitted!');
    console.log(firstNameValue, lastNameValue, emailValue)

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInputClass = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClass = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailInputClass = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={sumitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className="error-text">First name is must not empty.</p>}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={lastNameValue}
          />
          {lastNameHasError && <p className="error-text">Last name is must not empty.</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
