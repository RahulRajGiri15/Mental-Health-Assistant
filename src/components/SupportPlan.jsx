/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";

const SupportPlan = () => {
  const [needs, setNeeds] = useState({
    anxiety: false,
    depression: false,
    stress: false,
    sleep: false,
  });

  const [plan, setPlan] = useState("");

  const generatePlan = () => {
    let generatedPlan = "Your personalized support plan includes:\n\n";

    if (needs.anxiety) {
      generatedPlan += "- Practice deep breathing exercises daily\n";
      generatedPlan += "- Try progressive muscle relaxation\n";
    }

    if (needs.depression) {
      generatedPlan += "- Engage in regular physical activity\n";
      generatedPlan += "- Set small, achievable daily goals\n";
    }

    if (needs.stress) {
      generatedPlan += "- Practice mindfulness meditation\n";
      generatedPlan += "- Establish a regular sleep schedule\n";
    }

    if (needs.sleep) {
      generatedPlan += "- Avoid screens before bedtime\n";
      generatedPlan += "- Create a relaxing bedtime routine\n";
    }

    setPlan(generatedPlan);
  };

  const handleCheckboxChange = (e) => {
    setNeeds({ ...needs, [e.target.name]: e.target.checked });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Customizable Support Plan</h2>
      <div className="mb-4">
        <p className="mb-2">Select your areas of concern:</p>
        {Object.keys(needs).map((need) => (
          <label key={need} className="block mb-2">
            <input
              type="checkbox"
              name={need}
              checked={needs[need]}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {need.charAt(0).toUpperCase() + need.slice(1)}
          </label>
        ))}
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={generatePlan}
      >
        Generate Support Plan
      </button>
      {plan && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Your Support Plan:</h3>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
            {plan}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SupportPlan;
