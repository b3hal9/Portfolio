import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="item">
        <h1 className="section-title">Contact Me:</h1>
        <div className="contact-info">
          <div className="contacts">
            <i className="fas fa-envelope"></i>
            b3hal9@gmail.com
          </div>
          <div className="contacts">
            <i className="fas fa-mobile-alt"></i>
            +9779819002073
          </div>
          <div className="contacts">
            <i className="fas fa-map-marker-alt"></i>
            Itahari,Sunsari, Nepal
          </div>
        </div>
        <form action="#" className="contact-form">
          <input
            type="text"
            className="nameZone"
            placeholder="Your Full Name"
          />
          <input
            type="email"
            className="emailZone"
            placeholder="Your Email Address"
          />
          <input type="text" placeholder="Subject" className="subjectZone" />
          <textarea className="messageZone" placeholder="Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
