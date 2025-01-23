import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CovidStats from "./components/Covidstats";

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <Header />
      <CovidStats />
    </div>
  );
};

export default App;
