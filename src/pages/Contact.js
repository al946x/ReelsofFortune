import React from "react";
import { useState } from "react";

function Contact(props) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "ab4afb97-8dcb-421c-838b-e6e023a2cbf0",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
    
      const data = JSON.stringify(formData);
    
      fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: data,
            }).then((res) => res.json())
            .then((data) => {
                setSuccess(true);
                setFormData({
                    ...formData,
                    name: "",
                    email: "",
                    message: "",
                });
    
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            })
            .catch((err) => console.log(err));
    
            console.log("Form Submitted!")

    };


  return (
    <>
      <div className="contact-page">
        <h1>Contact</h1>

        <p style={{ textAlign: "center", margin: "20px" }}>We'd love to hear your feedback!</p>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="text"
              placeholder="Enter your email address"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn">Submit</button>
          </form>
        </div>

        {success && (
          <p style={{ textAlign: "center" }}>Form Submitted Sucessfully!</p>
        )}
      </div>
    </>
  );
}

export default Contact;
