

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TimeSimulation.css";

const TimeSimulation = () => {
  const [year, setYear] = useState(2028); // Default year
  const [district, setDistrict] = useState(""); // State for selected district
  const navigate = useNavigate(); // Navigate function

  const districts = ["District A", "District B", "District C", "District D"]; // List of districts

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleSubmit = () => {
    if (!district) {
      alert("Please select a district before submitting.");
      return;
    }
    // Navigate to Analytics Page
    navigate("/Analytics", { state: { year, district } });
  };

  return (
    <div className="time-simulation-container">
      <h1>Time Simulation</h1>
      <div className="slider-container">
        <input
          type="range"
          min="2000"
          max="2050"
          value={year}
          onChange={handleYearChange}
          className="slider"
        />
      </div>
      <p className="year-display">Year: {year}</p>

      {/* District Dropdown */}
      <div className="district-dropdown-container">
        <label htmlFor="district-select" className="dropdown-label">Select District:</label>
        <select
          id="district-select"
          value={district}
          onChange={handleDistrictChange}
          className="dropdown"
        >
          <option value="" disabled>Select a district</option>
          {districts.map((districtName, index) => (
            <option key={index} value={districtName}>
              {districtName}
            </option>
          ))}
        </select>
        {district && <p className="district-display">Selected District: {district}</p>}
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default TimeSimulation;

