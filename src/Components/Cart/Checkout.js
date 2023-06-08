import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameisValid = !isEmpty(enteredName);
    const enteredStreetisValid = !isEmpty(enteredStreet);
    const enteredPostalisValid = isFiveChars(enteredPostal);
    const enteredCityisValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameisValid,
      street: enteredStreetisValid,
      city: enteredCityisValid,
      postal: enteredPostalisValid,
    });

    const formIsValid =
      enteredNameisValid &&
      enteredCityisValid &&
      enteredStreetisValid &&
      enteredPostalisValid;

    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    };

    props.onConfirm(userData);
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef}></input>
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef}></input>
        {!formInputValidity.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalRef}></input>
        {!formInputValidity.postal && (
          <p>Please enter a valid postal code(5 characters long!)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef}></input>
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
