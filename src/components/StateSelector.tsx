import React from "react";
import { StateSelectorProps } from "../types/StateData";

const StateSelector: React.FC<StateSelectorProps> = ({ states, selectedState, onStateChange }) => {
  return (
    <div className="text-center mb-4">
      <label htmlFor="stateSelect" className="form-label">
        Select State:
      </label>
      <select
        id="stateSelect"
        className="form-select"
        onChange={onStateChange}
        value={selectedState}
      >
        <option value="All">All States</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelector;
