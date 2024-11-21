import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponse }) => {
  const [jsonInput, setJsonInput] = useState(""); // Holds user input
  const [error, setError] = useState(""); // Holds error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Parse and validate the JSON input
      const parsedInput = JSON.parse(jsonInput);

      if (!parsedInput || !parsedInput.data || !Array.isArray(parsedInput.data)) {
        setError("Invalid input. JSON must have a 'data' key containing an array.");
        return;
      }

      setError(""); // Clear errors if input is valid

      // Send data to backend
      const response = await axios.post("http://localhost:3001/bfhl", parsedInput);
      setResponse(response.data); // Pass response to parent
    } catch (err) {
      setError("Invalid JSON format. Please check your input."); // Generic error
    }
  };

  return (
    <div>
      <h1>JSON Input</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder='{"data": ["M", "1", "a"]}' // Example format
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputForm;
