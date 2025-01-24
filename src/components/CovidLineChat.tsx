import React from "react";
import Plot from "react-plotly.js";
import { LineChartProps } from "../types/StateData";

const CovidLineChart: React.FC<LineChartProps> = ({ data, selectedState }) => {
  const states = data.map((item) => item.state);
  // const confirmed = data.map((item) => item.confirmed);
  const active = data.map((item) => item.active);
  // const recovered = data.map((item) => item.recovered);
  // const deaths = data.map((item) => item.deaths);

  return (
    <div className="mt-5">
      <h3 className="text-center">COVID-19 Trends</h3>
      <Plot
        data={[
          {
            x: states,
            y: active,
            type: "scatter",
            mode: "lines+markers",
            name: "Active Cases",
            line: { color: "#ffc107" },
          },
        ]}
        layout={{
          title: `COVID-19 Trends for ${selectedState}`,
          xaxis: { title: "States" },
          yaxis: { title: "Number of Active Cases" },
          height: 500,
          width: 800,
        }}
      />
    </div>
  );
};

export default CovidLineChart;
