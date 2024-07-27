/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";

const EmergencyAlert = () => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const checkForEmergency = () => {
    const emergencyKeywords = [
      "emergency",
      "call 911",
      "911",
      "fire",
      "explosion",
      "panic attack",
      "fever",
      "high temperature",
      "shock",
      "severe pain",
      "suicide",
      "kill myself",
      "end my life",
      "harm myself",
    ];
    const lowercaseMessage = message.toLowerCase();

    if (
      emergencyKeywords.some((keyword) => lowercaseMessage.includes(keyword))
    ) {
      setShowAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForEmergency();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Emergency Alert System</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="How are you feeling? (We're here to help if you're in crisis)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Submit
        </button>
      </form>
      {showAlert && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <strong>Emergency Alert:</strong> We've detected that you may be in
          crisis. Please call the National Suicide Prevention Lifeline at
          1-800-273-8255 or text HOME to 741741 to reach a Crisis Counselor.
        </div>
      )}
    </div>
  );
};

export default EmergencyAlert;
