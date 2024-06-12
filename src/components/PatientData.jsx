import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

const PatientData = ({ patient }) => {
  const [recommendation, setRecommendation] = useState("");
  const [bloodSugarData, setBloodSugarData] = useState([]);

  useEffect(() => {
    if (patient) {
      // Simulated data for blood sugar levels (replace with actual data fetching)
      const bloodSugarLevels = generateBloodSugarLevels();

      // Format data for Recharts
      const chartData = bloodSugarLevels.map((level, index) => ({
        day: `Day ${index + 1}`,
        bloodSugarLevel: level,
      }));

      setBloodSugarData(chartData);
    }
  }, [patient]);

  // Function to generate simulated blood sugar level data
  const generateBloodSugarLevels = () => {
    return Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * (200 - 80 + 1)) + 80
    );
  };

  const handleChange = (e) => {
    setRecommendation(e.target.value);
  };

  const handleSendRecommendation = () => {
    // Logic to send recommendation to the patient (replace with actual implementation)
    console.log("Sending recommendation to patient:", recommendation);
    // Clear recommendation input field after sending
    setRecommendation("");
  };

//   if (!patient) {
//     return <div>Loading...</div>;
//   }
  return (
    <>
      <Link to={"/"}>
        <h1 className="py-3 text-3xl font-semibold text-white bg-backgroundColor">
          <p className="ml-5">DiabetesCare.</p>
        </h1>
      </Link>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Patient Information</h2>
        {/* <p>
          <strong>Name:</strong> {patient.name}
        </p>
        <p>
          <strong>Email:</strong> {patient.email}
        </p>
        <p>
          <strong>Diabetes Type:</strong> {patient.diabetesType}
        </p> */}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Blood Sugar Level Chart</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={bloodSugarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="bloodSugarLevel"
                stroke="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">
          Send Recommendation/Notification
        </h2>
        <div className="flex">
          <textarea
            value={recommendation}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full mr-4"
            placeholder="Type your recommendation or notification here..."
          ></textarea>
          <button
            onClick={handleSendRecommendation}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientData;
