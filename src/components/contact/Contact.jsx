import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputText = useRef();

  const onSend = () => {
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputText.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      inputName.current.value === "" ||
      inputEmail.current.value === "" ||
      inputText.current.value === ""
    ) {
      alert("Please fill in all the fields before sending");
    } else {
      emailjs
        .sendForm(
          "service_t9ibtap",
          "template_asbrub7",
          form.current,
          "OeQvuWjJmE21Mn45M"
        )
        .then(
          (result) => {
            alert(result.text + "- Email Sent!");
            onSend();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="contactContainer">
        <h1 className="contactTitle">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>
            Name
            <input
              ref={inputName}
              className="formInput"
              type="text"
              name="user_name"
            />
          </label>
          <label>
            Email
            <input
              ref={inputEmail}
              className="formInput"
              type="email"
              name="user_email"
            />
          </label>
          <label>
            Message
            <textarea ref={inputText} className="formInput" name="message" />
          </label>
          <div className="sendButton">
            <input type="submit" value="Send" className="submitButton" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
