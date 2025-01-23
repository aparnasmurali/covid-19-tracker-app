import React, { useEffect, useState } from "react";
import axios from "axios";
import CovidPieChart from "./CovidPieChart";
import CovidLineChart from "./CovidLineChat";
import StateCardList from "./CovidStateCardList";
import { StateData } from "../types/StateData";
import { fetchCovidData } from "../services/api";
import StateSelector from "./StateSelector";

const CovidStats: React.FC = () => {
  const [covidData, setCovidData] = useState<StateData[]>([]);
  const [selectedState, setSelectedState] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCovidData();
        setCovidData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">{error}</div>;
  }

  const filteredData =
    selectedState === "All"
      ? covidData
      : covidData.filter((state) => state.state === selectedState);

  const totalConfirmed = filteredData.reduce(
    (sum, item) => sum + item.confirmed,
    0
  );
  const totalActive = filteredData.reduce((sum, item) => sum + item.active, 0);
  const totalRecovered = filteredData.reduce(
    (sum, item) => sum + item.recovered,
    0
  );
  const totalDeaths = filteredData.reduce((sum, item) => sum + item.deaths, 0);

  return (
    <div className="container">
      <StateSelector
        states={covidData.map((state) => state.state)}
        selectedState={selectedState}
        onStateChange={handleStateChange}
      />

      {filteredData && filteredData.length > 0 ? (
        <div>
          <StateCardList data={filteredData} />

          <CovidPieChart
            totalActive={totalActive}
            totalRecovered={totalRecovered}
            totalDeaths={totalDeaths}
            selectedState={selectedState}
          />
          
          <CovidLineChart data={filteredData} selectedState={selectedState} />
        </div>
      ) : (
        <div className="text-center">No data available for the selected state.</div>
      )}
    </div>
  );
};

export default CovidStats;
