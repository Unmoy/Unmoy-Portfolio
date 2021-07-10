import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";

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
  };

  return (
    <div class="contact-container">
      <Navbar></Navbar>
      <div class="row">
        <h1>Contact Me</h1>
      </div>
      <div class="row">
        <h4 style={{ textAlign: "center", color: "#eee" }}>
          Its a pleasure to hear from you!
        </h4>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input {...register("name")} required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input {...register("email")} required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input {...register("subject")} required />
              <label>Subject</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea {...register("message")} required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <input
              type="submit"
              className="btn-lrg submit-btn"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
