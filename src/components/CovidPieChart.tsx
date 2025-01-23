import React from "react";
import Plot from "react-plotly.js";

interface PieChartProps {
  totalActive: number;
  totalRecovered: number;
  totalDeaths: number;
  selectedState: string;
}

const CovidPieChart: React.FC<PieChartProps> = ({
  totalActive,
  totalRecovered,
  totalDeaths,
  selectedState,
}) => {
  return (
    <div className="mt-5">
      <h3 className="text-center">COVID-19 Data Breakdown</h3>
      <Plot
        data={[
          {
            values: [totalActive, totalRecovered, totalDeaths],
            labels: ["Active Cases", "Recovered", "Deaths"],
            type: "pie",
            hole: 0.4,
            textinfo: "label+percent",
            marker: {
              colors: ["#FFC107", "#28A745", "#DC3545"], 
            },
          },
        ]}
        layout={{
          height: 400,
          width: 400,
          title: `COVID-19 Data for ${selectedState}`,
          showlegend: true,
        }}
      />
    </div>
  );
};

export default CovidPieChart;
