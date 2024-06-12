import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { databases } from "../config/appwrite";
const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    speciality: "",
    qualifications: "",
    yearsOfExperience: "",
    hospitalname: "",
    services: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        "66682e8d0021614bfa8d",
        "666854d5000970f16968",
        "unique()",
        formData
        // ["any:member"], // Permissions: Only members can read and write
        // ["any:member"] // Permissions: Only members can read and write
      );
      setSuccessMessage("Doctor's profile created successfully.");
      navigate("/patient");
    } catch (error) {
      console.error("Error creating doctor's profile:", error);
      setErrorMessage("Failed to create doctor's profile. Please try again.");
    }
  };
  return (
    <>
      <div className="fixed w-full z-10 text-white">
        <div className="flex flex-row justify-between p-3 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to={"/"}>
              <h1 className="text-2xl font-semibold">DiabetesCare.</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className=" mx-auto   p-10  ">
        <h2 className="text-xl font-semibold mb-4">Create Doctor's Profile</h2>
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
              <label className="block mb-1">Hospital Name</label>
              <input
                type="text"
                name="hospitalname"
                value={formData.hospitalname}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Speciality</label>
              <input
                type="text"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Qualifications</label>
              <input
                type="text"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Years of Experience</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label className="block mb-1">Services</label>
              <input
                name="services"
                rows="4"
                value={formData.services}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="border-2 bg-backgroundColor text-white rounded-md px-5 py-1"
          >
            Submit
          </button>
        </form>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
};

export default Profile;
