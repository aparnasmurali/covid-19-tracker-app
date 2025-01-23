import React from "react";

interface StateSelectorProps {
  states: string[];
  selectedState: string;
  onStateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

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
