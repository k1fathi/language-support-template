import React from "react";

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="dropdown-container">
      <select
        className="dropdown w-full border border-gray-300 rounded-full px-4 py-2"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
