import React, { useState } from "react";
import Select from "react-select";

const ResponseView = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highest_lowercase_alphabet", label: "Highest Lowercase Alphabet" },
    { value: "is_prime_found", label: "Prime Found" },
  ];

  const renderFilteredResponse = () => {
    if (!response) return null;
    return selectedOptions.map((option) => (
      <div key={option.value}>
        <h3>{option.label}</h3>
        <p>{JSON.stringify(response[option.value], null, 2)}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Response</h2>
      <Select
        isMulti
        options={options}
        onChange={(selected) => setSelectedOptions(selected || [])}
      />
      <div>{renderFilteredResponse()}</div>
    </div>
  );
};

export default ResponseView;
