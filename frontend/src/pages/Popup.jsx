// src/components/Popup.js
import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-md shadow-md">
      <div>{message}</div>
      <button className="mt-2 bg-blue-600 text-white px-2 py-1 rounded" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;
