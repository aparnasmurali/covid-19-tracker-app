import React, { useEffect, useState } from "react";
import axios from "axios";
import CovidPieChart from "./CovidPieChart";
import CovidLineChart from "./CovidLineChat";
import StateCardList from "./CovidStateCardList";

interface StateData {
  state: string;
  confirmed: number;
  active: number;
  recovered: number;
  deaths: number;
}

const CovidStats: React.FC = () => {
  const [covidData, setCovidData] = useState<StateData[]>([]);
  const [selectedState, setSelectedState] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCovidData = async () => {
      try {
        const response = await axios.get(
          "https://api.rootnet.in/covid19-in/stats/latest"
        );
        const regionalData = response.data.data.regional;

        const formattedData = regionalData.map((item: any) => ({
          state: item.loc,
          confirmed: item.totalConfirmed,
          active: item.totalConfirmed - item.discharged - item.deaths,
          recovered: item.discharged,
          deaths: item.deaths,
        }));

        setCovidData(formattedData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchCovidData();
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
      <div className="text-center mb-4">
        <label htmlFor="stateSelect" className="form-label">
          Select State:
        </label>
        <select
          id="stateSelect"
          className="form-select"
          onChange={handleStateChange}
          value={selectedState}
        >
          <option value="All">All States</option>
          {covidData.map((state, index) => (
            <option key={index} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>

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
