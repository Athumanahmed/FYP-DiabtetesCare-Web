import React from "react";
import { Link } from "react-router-dom";

const PatientData = () => {
  return (
    <>
      <div className="p-3 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <Link to="/" className="text-white text-2xl font-semibold">
          DiabetesCare
        </Link>
      </div>

      <div>
        <p className="text-center p-2 mt-3 mb-3 text-2xl ">Patient's Data</p>
      </div>

      <div className="grid grid-col-1  md:grid-cols-2 p-4 m-2 container">
        <div>
          <div>Personal Information</div>
          <div>Patient's data</div>
        </div>
        <div>
          <div>Blood sugar analysis</div>
          <div>Glucose level graph</div>
        </div>
      </div>
    </>
  );
};

export default PatientData;
