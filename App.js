import React from "react";
import Header from "./Header";
import BMICalculator from "./BMICalculator";
import BMIChart from "./BMIChart";

function App() {
  return (
    <div className="App">
      <Header />
      <BMICalculator />
      <BMIChart />
    </div>
  );
}

export default App;
