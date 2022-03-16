import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { register } = useForm();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vkgtfsv",
        "template_056f1fb",
        e.target,
        "user_TnM7FTapoaBnigwQ5SgLZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    Swal.fire({
      title: "Thank you for your message. I will get back to you ASAP.",
      imageUrl:
        "https://i.ibb.co/3mqFZCB/d-simple-icon-message-received-open-envelope-with-blank-letter-checkmark-vector-illustration-92753-4.webp",
      confirmButtonText: "Done",
    });
  };

  return (
    <div className="contact_container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 my-3">
            <form onSubmit={sendEmail}>
              <div className="contact_box">
                <div className="contact_header">
                  <h4>Contact Me</h4>
                </div>
                <div className="contact_form">
                  <div class="contact_input">
                    <input
                      className="effect-7"
                      type="text"
                      placeholder="Name"
                      {...register("name")}
                      required
                    />
                    <span class="focus-border">
                      <i></i>
                    </span>
                  </div>
                  <div class="contact_input">
                    <input
                      className="effect-7"
                      type="text"
                      placeholder="Email"
                      {...register("email")}
                      required
                    />
                    <span class="focus-border">
                      <i></i>
                    </span>
                  </div>
                  <div class="contact_input_message">
                    <textarea
                      className="effect-7"
                      type="text"
                      placeholder="Message"
                      {...register("message")}
                      required
                    />
                    <span class="focus-border">
                      <i></i>
                    </span>
                  </div>
                  <div>
                    <input
                      type="submit"
                      class="button-6"
                      value="Send Message"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ms-auto my-4">
            <div className="contact_info">
              <div className="contact_info_header">
                <h4>Get In Touch</h4>
                <p>
                  I am happy to answer any questions you have. Just send me a
                  message in the form beside with any enquiries you may have.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="contact_media_icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <p>
                222/223, K.B.Abdus Sattar Road, <br />
                Chittagong, Bangladesh.
              </p>
            </div>
            <div className="media">
              <div className="contact_media_icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>
                unmoyb@gmail.com <br />
                unmoyb@aol.com
              </p>
            </div>
            <div className="media">
              <div className="contact_media_icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <p>
                +880 1676 468 090
                <br />
                +880 1819 307 347
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
