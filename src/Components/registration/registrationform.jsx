import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PersonIcon from "@mui/icons-material/Person";
import { useState, useEffect } from "react";
import './register.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

useEffect(() =>{
localStorage.setItem("formData", JSON.stringify(formData))
}, [formData])
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const userName = e.target.name;
    const newUserName = e.target.value;
    setFormData((userNames) => {
      return {
        ...userNames,
        [userName]: newUserName
      };
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("DONE");
    if (formData.username === '' || formData.email === '' || formData.password === '') {
      "Please,complete the fields"
      } else {
        setSubmitted(true);
      }
  };

  const successMessage = () => {
    return (
    <div className={(submitted ? 'success' : 'hidden')}>
    <p>Thank you {formData.username}
    <br/><span>You are successfully registered</span></p>
    </div>
    );
    };

  return (
    <div>
      <PersonIcon onClick={handleOpen} sx={{ color: "black" }} />
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='register-popup'>
        <div className="success-message">
              {successMessage()}
        </div>
        <h2 className={"register-title " + (!submitted ? 'success' : 'hidden')}>Registeration Form</h2>
        <form onSubmit={handleSubmit} className={(!submitted ? 'success' : 'hidden')}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="username">Username 
          <span className="required">*</span></label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email Address
          <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Password
          <span className="required">*</span></label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <input type="submit" className="register-btn"/>
      </form>
        </Box>
      </Modal>
    </div>
  );
}
