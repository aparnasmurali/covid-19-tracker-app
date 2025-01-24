import React from "react";
import { CovidCardProps } from "../types/StateData";

const CovidCard: React.FC<CovidCardProps> = ({ title, value }) => {
  const displayValue = value !== undefined ? value.toLocaleString() : "Loading...";

  return (
    <div className={`card text-white mb-3`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{displayValue}</p>
      </div>
    </div>
  );
};

export default CovidCard;
