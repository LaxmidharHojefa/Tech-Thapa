import "./contact.css";
import { useState, useEffect } from "react";

const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    });
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Contact Form");
        console.log(contact);
    }

  useEffect(() => {
    const light = document.querySelector(".cursor-light");

    window.addEventListener("mousemove", (e) => {
      light.style.left = e.clientX + "px";
      light.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <section className="contact-section">
      
      {/* CURSOR LIGHT */}
      <div className="cursor-light"></div>

      {/* IMAGE AND FORM CONTAINER */}
      <div className="contact-container">

        {/* LEFT IMAGE */}
        <div className="contact-image">
          <img src="/images/marvel.jpg" alt="a girl filling contact form to connect with us..." />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h1>Contact Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
              />
            </div>

            <button className="contact-btn">Send Message</button>
          </form>
        </div>

      </div>

      {/* MAP - FULL WIDTH AT BOTTOM */}
      <div className="contact-map-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.3978576336353!2d70.78427567506819!3d22.262913979713453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb8432a944cb%3A0x5014e0b0dc12fbf!2sVictaSoft!5e0!3m2!1sen!2sin!4v1767964153066!5m2!1sen!2sin" 
          style={{ border: "0" }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </div>
    </section>
  );
};

export default Contact;
