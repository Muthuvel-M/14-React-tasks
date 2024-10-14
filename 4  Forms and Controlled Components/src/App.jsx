import React, { useState } from "react";

const ControlledForm = () => {
  // Defining the state for each input field
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    isAccepted: false
  });

  const [errors, setErrors] = useState({});

  // Handle input change for all form elements
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // If the input is a checkbox, set checked state, otherwise set value
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation function
  const validate = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.age || formData.age <= 0) formErrors.age = "Valid age is required";
    if (!formData.email.includes("@",".com",".org",".in")) formErrors.email = "Valid email is required";
    if (formData.password.length < 8) formErrors.password = "Password must be at least 6 characters";

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful form submission
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      // Clear the form by resetting the state
      setFormData({
        name: "",
        age: "",
        email: "",
        password: "",
        isAccepted: false
      });

      // Optionally, clear validation errors after submission
      setErrors({});
    }
  };

  return (
    <form  onSubmit={handleSubmit}>'
    <h1>Tell Us About You</h1>
        <div>
        <label className="lb">
          Name:
          <input
            type="text"
            name="name"
            placeholder="who are you❓"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>
      </div>

      <div>
        <label className="lb">
          Age:
          <input
            type="number"
            name="age"
            placeholder="How old are you 🤔?"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </label>
      </div>

      <div>
        <label className="lb">
          Email:
          <input
            type="email"
            name="email"
            placeholder="📨 address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>
      </div>

      <div>
        <label className="lb">
          Password:
          <input
            type="password"
            name="password"
            placeholder="🙈🙈🙈🙈"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </label>
      </div>

      <div>
        <label  className="lb">
          Accept Terms & Conditions:
          <input
            
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
    
  );
};

export default ControlledForm;
