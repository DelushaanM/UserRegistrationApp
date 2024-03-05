import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css'; // Make sure to import your CSS file

function RegistrationForm() {
    const [form, setForm] = useState({
        full_name: '',
        contact_number: '',
        email: '',
        date_of_birth: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleCancel = () => {
      setForm({
          full_name: '',
          contact_number: '',
          email: '',
          date_of_birth: '',
          password: '',
          confirm_password: ''
      });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
       // Validation
       for (let key in form) {
        if (form[key] === '') {
            alert(`Please fill in the ${key.replace('_', ' ')} field.`);
            return;
        }
    }
    };

    return (
      <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" name="full_name" value={form.full_name} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formContactNumber">
                <Form.Label>Contact Number*</Form.Label>
                <Form.Control type="tel" placeholder="Enter Contact Number" name="contact_number" value={form.contact_number} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBirthdate">
                <Form.Label>Birthdate*</Form.Label>
                <Form.Control type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" value={form.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" value={form.confirm_password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
        </Form>
        </div>
    );
}

export default RegistrationForm;
