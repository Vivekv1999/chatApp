import React, { useState } from 'react';

const Chat = () => {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',' || e.keyCode === 32) {
      e.preventDefault();
      addEmail(inputValue.trim());
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '') {
      removeLastEmail();
    }
  };

  const addEmail = (email) => {
    if (email && isValidEmail(email) && !emails.includes(email)) {
      setEmails([...emails, email]);
    }
  };

  const removeLastEmail = () => {
    setEmails(emails.slice(0,-1));
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  const isValidEmail = (email) => {
    // Basic email validation, you can enhance it as needed
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email);
    return email
  };

  return (
    <div className="multi-email-input">
      <div className="email-pills">
        {emails.map((email, index) => (
          <div key={index} className="email-pill">
            <span>{email}</span>
            <button onClick={() => removeEmail(email)}>&times;</button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Enter email addresses"
        />
      </div>
    </div>
  );
};

export default Chat;
