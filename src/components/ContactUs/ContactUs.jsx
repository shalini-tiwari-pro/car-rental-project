import React from 'react'
import "./ContactUs.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_gi4l6ra",
          "template_n0nncrn",
          form.current,
          "xrwvcqBWUxoFdhNxL"
        )
        .then(
          () => {
            alert("✅ Email sent successfully!");
          },
          (error) => {
            console.error(error);
            alert("❌ Failed to send email.");
          }
        );
    };
  return (
    <div className="contact-us-main-div">
      <h1>Contact Us</h1>
      <div>
        <form ref={form} onSubmit={sendEmail} className="contact-us-form">
          <table>
            <tr>
              <td>
                <label>Full Name</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  required
                  className="contact-us-field"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email Address</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  required
                  className="contact-us-field"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  name="number"
                  placeholder="enter your contact number"
                  className="contact-us-field"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Message</label>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name="message"
                  placeholder="enter message"
                  className="contact-us-message-box"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button className='contact-us-btn'>send message</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}






export default ContactUs