import React from "react";

interface StateData {
  state: string;
  confirmed: number;
  active: number;
  recovered: number;
  deaths: number;
}

interface StateCardListProps {
  data: StateData[];
}

const StateCardList: React.FC<StateCardListProps> = ({ data }) => {
  return (
    <div className="row">
      {data.map((stateData, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div
            className={`card ${
              stateData.confirmed > 10000 ? "border-danger" : "border-primary"
            }`}
          >
            <div className="card-body text-center">
              <h5 className="card-title">{stateData.state}</h5>
              <p className="card-text">Confirmed: {stateData.confirmed}</p>
              <p className="card-text">Active: {stateData.active}</p>
              <p className="card-text">Recovered: {stateData.recovered}</p>
              <p className="card-text">Deaths: {stateData.deaths}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateCardList;
