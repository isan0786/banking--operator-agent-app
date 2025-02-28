import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hub.css';
import rbcLogo from './assets/rbc-logo.png'; // Import the RBC logo

function Hub() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const handleSubOptionClick = (option) => {
    if (option === 'opening') {
      navigate('/open-account');
    }
  };

  return (
    <div className="hub-container">
      <header className="hub-header">
        <img src={rbcLogo} alt="RBC Logo" className="rbc-logo" />
        <h1>Welcome to the RBC Hub</h1>
      </header>
      <main className="hub-main">
        <div className="hub-content">
          <div className="section" onClick={() => toggleExpand('rrsp')}>
            <h2>RRSP Account</h2>
            {expanded === 'rrsp' && (
              <ul>
                <li onClick={() => handleSubOptionClick('opening')}>Opening an account</li>
                <li onClick={() => handleSubOptionClick('closing')}>Closing the account</li>
                <li onClick={() => handleSubOptionClick('beneficiary')}>Changing beneficiary on an account</li>
                <li onClick={() => handleSubOptionClick('sin')}>Changing SIN No on an account</li>
              </ul>
            )}
          </div>
          <div className="section" onClick={() => toggleExpand('tfsa')}>
            <h2>TFSA Account</h2>
            {expanded === 'tfsa' && (
              <ul>
                <li onClick={() => handleSubOptionClick('opening')}>Opening an account</li>
                <li onClick={() => handleSubOptionClick('closing')}>Closing the account</li>
                <li onClick={() => handleSubOptionClick('beneficiary')}>Changing beneficiary on an account</li>
                <li onClick={() => handleSubOptionClick('sin')}>Changing SIN No on an account</li>
              </ul>
            )}
          </div>
          <div className="section" onClick={() => toggleExpand('mortgage')}>
            <h2>Mortgage Refinancing</h2>
            {expanded === 'mortgage' && (
              <ul>
                <li onClick={() => handleSubOptionClick('applying')}>Applying for refinancing</li>
                <li onClick={() => handleSubOptionClick('calculating')}>Calculating new mortgage rates</li>
                <li onClick={() => handleSubOptionClick('terms')}>Changing mortgage terms</li>
                <li onClick={() => handleSubOptionClick('advisor')}>Contacting mortgage advisor</li>
              </ul>
            )}
          </div>
          <div className="section" onClick={() => toggleExpand('loans')}>
            <h2>Personal Loans</h2>
            {expanded === 'loans' && (
              <ul>
                <li onClick={() => handleSubOptionClick('applying')}>Applying for a loan</li>
                <li onClick={() => handleSubOptionClick('repayment')}>Repayment options</li>
                <li onClick={() => handleSubOptionClick('rates')}>Loan interest rates</li>
                <li onClick={() => handleSubOptionClick('officer')}>Contacting loan officer</li>
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hub;