import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum
        corporis sit, quibusdam non ex fugit laboriosam inventore quisquam,
        nisi, ut quis est repudiandae recusandae tenetur adipisci enim quasi
        corrupti?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat qui consectetur esse quos deserunt, eos, vero ab repudiandae veniam deleniti et necessitatibus est omnis tempora labore accusamus fugit earum? Fugiat?
      </p>
      <form action="">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Your Subject" />
        <textarea name="" placeholder="Your Description" id="" cols="10" rows="5"></textarea>
        <input type="submit" className="submit-btn" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
