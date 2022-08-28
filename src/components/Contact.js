import React, { Fragment, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { BsWhatsapp ,BsFillCheckCircleFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import './modal.css'

const Contact = () => {
  const [pop, setPop] = useState(false);
  const form = useRef();
  const inputName = useRef();
  const inputEmal = useRef();
  const inputMessage = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4p2fra7",
        "template_enx31g6",
        form.current,
        "hrjVkqBPyyOKZZJnP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    inputName.current.value = null;
    inputEmal.current.value = null;
    inputMessage.current.value = null;
    setPop(true);
  };
  return (
    <Fragment>
      
        <div className={pop ? 'modal show-modal' : 'modal hide-modal'}>
          <div className="modal-body">
            <div className="blue-all"><h2>Done</h2> <BsFillCheckCircleFill className="blue" /></div>
            <p>I recieved your message</p>
            <button className="btn btn-primary" onClick={() => setPop(false)}>
              Close
            </button>
          </div>
        </div>
  
      <section id="contact">
        <h5>Get in toutch</h5>
        <h2>contact me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>solimanabdelrahman589@gmail.com</h5>
              <a href="mailto:solimanabdelrahman589@gmail.com" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <ImLinkedin className="contact__option-icon" />
              <h4>Linked in</h4>
              <h5>Abdelrahman soliman</h5>
              <a href="https://www.linkedin.com/in/abdelrahman-soliman-aa02931b6" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>whats up</h4>
              <h5>01097054537</h5>
              <a href="https://iwtsp.com/201097054537" target="_blank">
                send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              ref={inputName}
              type="text"
              name="name"
              placeholder="your full name"
              required
            />
            <input
              ref={inputEmal}
              type="email"
              name="email"
              placeholder="your Email"
              required
            />
            <textarea
              ref={inputMessage}
              name="message"
              rows="7"
              placeholder="your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              send message
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
