import React , {useRef} from "react";
import emailjs from 'emailjs-com';
import classes from "../../styles/form.module.css";

const Form = () => {
  // const submitHandler = () => {
  //   e.preventDefault();
  // };

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        

        emailjs.sendForm('mail', 'temp', form.current, '6-key')
            .then((result) => {
                //   console.log(result.text);
                alert('Thank You, I am shortly contact with you');
            }, (error) => {
                //   console.log(error.text);
                alert('Oops!. Try again later');
            });
    };

  return (
    <form className={`${classes.form}`} ref = {form} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input type="text" name='name' id='name' placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name='email' id='email' placeholder="name@example.com" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" name='message' id='message' rows={5} placeholder="Your Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
