import React, { useState } from "react";
import "./PlanTheDay.css";

function PlanTheDay() {
  const [plan, setPlan] = useState("");
  const [planList, setPlanList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plan.trim()) {
      setPlanList([...planList, plan]);
      setPlan("");
    }
  };

  return (
    <div className="plan-container">
      <h2>Plan The Day</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          placeholder="Enter a plan"
        />
        <button type="submit">Add Plan</button>
      </form>
      <ul>
        {planList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanTheDay;
