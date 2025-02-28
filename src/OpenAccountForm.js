import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OpenAccountForm.css';
import rbcLogo from './assets/rbc-logo.png'; // Import the RBC logo

function OpenAccountForm() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you, your application has been submitted', {
      position: "top-center",
      autoClose: 3000,
      onClose: () => navigate('/hub')
    });
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <img src={rbcLogo} alt="RBC Logo" className="rbc-logo" />
        <h3>RRSP Tasks:</h3>
      </header>
      <ul className="task-list">
        <li><button className="task-button">Validate Client Information <span className="plus-icon">+</span></button></li>
        <li><button className="task-button">Verify AML Standards are met <span className="plus-icon">+</span></button></li>
        <li>
          <button className="task-button" onClick={() => setShowForm(!showForm)}>
            Proceed with Application <span className="plus-icon">{showForm ? '-' : '+'}</span>
          </button>
          {showForm && (
            <div className="form-box">
              <form onSubmit={handleSubmit} className="account-form">
                <div className="form-group">
                  <label>Account Number:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>SIN Number:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Occupation:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Annual Income:</label>
                  <input type="number" required />
                </div>
                <div className="form-group">
                  <label>Marital Status:</label>
                  <select required>
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          )}
        </li>
      </ul>
      <ToastContainer />
    </div>
  );
}

export default OpenAccountForm;