import React, { useEffect, useState } from "react";
import { account } from "../config/appwrite";
import { Link, useNavigate } from "react-router-dom";
import { databases } from "../config/appwrite";
import PatientData from "./PatientData";
const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [type1Patients, setType1Patients] = useState([]);
  const [type2Patients, setType2Patients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await account.deleteSession("current"); // Delete current session
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    // Fetch patients data from the database
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make sure to replace 'databaseId' and 'collectionId' with your actual database and collection IDs
      const response = await databases.listDocuments(
        "66682e8d0021614bfa8d",
        "66684289001b397c39ab"
      );
      const patientsData = response.documents;

      setPatients(patientsData);

      // Filter patients by diabetes type
      const type1 = patientsData.filter(
        (patient) => patient.diabetesType === "Type 1"
      );
      const type2 = patientsData.filter(
        (patient) => patient.diabetesType === "Type 2"
      );

      setType1Patients(type1);
      setType2Patients(type2);
    } catch (error) {
      console.error("Error fetching patients data:", error);
    }
  };

  const handlePatientClick = (patient) => {
    navigate('/patient-data')
    setSelectedPatient(patient);
  };

  return (
    <>
      <Link to={"/"}>
        <h1 className="py-3 text-3xl font-semibold text-white bg-backgroundColor">
          <p className="ml-5">DiabetesCare.</p>
        </h1>
      </Link>
      <h1 className="text-center font-bold text-3xl mt-2 py-3">
        Doctor's Dashboard
      </h1>
      <div className="flex gap-3 flex-row-reverse mr-10 mt-3 mb-3 ">
        <button
          className="text-red-500  font-semibold"
          type="submit"
          onClick={logout}
        >
          Logout
        </button>
        <p className="font-semibold">Doctor's Name</p>
      </div>

      <div className="container mx-auto">
        {/* Cards */}
        <div className="flex flex-wrap mb-6 items-center">
          <div className="w-full md:w-1/4 px-4 mb-4">
            <div className="bg-backgroundColor text-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-2">Total Patients</h2>
              <p className="text-xl font-bold">{patients.length}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-4">
            <div className="bg-backgroundColor text-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-2">Type 1 Diabetes</h2>
              <p className="text-xl font-bold">{type1Patients.length}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-4">
            <div className="bg-backgroundColor text-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-2">Type 2 Diabetes</h2>
              <p className="text-xl font-bold">{type2Patients.length}</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Registered Patients</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b-2 p-2">Name</th>
                <th className="border-b-2 p-2">Email</th>
                <th className="border-b-2 p-2">Diabetes Type</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={index}
                  onClick={() => handlePatientClick(patient)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="border-b p-2">{patient.name}</td>
                  <td className="border-b p-2">{patient.email}</td>
                  <td className="border-b p-2">{patient.diabetesType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Patient Details */}
        {selectedPatient && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Patient Details</h2>
            {/* Add component for displaying patient details, line graph, and input field for recommendations */}
            {<PatientData patient={selectedPatient} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
