import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { databases } from "../config/appwrite";
const Patient = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    bloodSugarLevel: "",
    bloodPressure: "",
    weight: "",
    height: "",
    diabetesType: "",
    medications: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const documentData = {
        ...formData,
      };

      if (
        isNaN(documentData.age) ||
        isNaN(documentData.bloodSugarLevel) ||
        isNaN(documentData.weight) ||
        isNaN(documentData.height)
      ) {
        throw new Error(
          "Age, Blood Sugar Level, Weight, and Height must be valid numbers"
        );
      }

      console.log("Submitting document data:", documentData); // Debugging line to verify document data

      // Make sure to replace 'databaseId' and 'collectionId' with your actual database and collection IDs
      await databases.createDocument(
        "66682e8d0021614bfa8d",
        "66684289001b397c39ab",
        "unique()",
        documentData
      );

      setSuccessMessage("Patient's profile created successfully.");
      setErrorMessage("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating patient's profile:", error);
      setErrorMessage("Failed to create patient's profile. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      <Link to={"/"}>
        <h1 className="py-3 text-3xl font-semibold text-white bg-backgroundColor">
          <p className="ml-5">DiabetesCare.</p>
        </h1>
      </Link>

      <div className="max-w-4xl mx-auto  p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Register Diabetic Patient
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Blood Sugar Level</label>
              <input
                type="number"
                step="0.1"
                name="bloodSugarLevel"
                value={formData.bloodSugarLevel}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Blood Pressure</label>
              <input
                type="text"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Weight</label>
              <input
                type="number"
                step="0.1"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Height</label>
              <input
                type="number"
                step="0.1"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Diabetes Type</label>
              <select
                name="diabetesType"
                value={formData.diabetesType}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Gestational">Gestational</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Medications</label>
              <textarea
                name="medications"
                rows="2"
                value={formData.medications}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-backgroundColor text-white px-5 py-2 rounded-md"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Loading..." : "Registering Patient"}
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </>
  );
};

export default Patient;
