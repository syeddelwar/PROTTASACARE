import React, { useState } from "react";
import LeftIngo from "./LeftIngo";
import PatientForm from "./PatientForm";
import CaregiversForm from "./CaregiversForm";

const ContactInfo = () => {
  const [activeTab, setActiveTab] = useState<string>("patient"); // Specify the type as string

  const handleTabClick = (tab: string) => {
    // Specify the type as string
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row custom-container">
        <LeftIngo></LeftIngo>
        <div className="w-full lg:w-[70%] pt-24 px-5 lg:px-14">
          <div className="inline-block">
            <div className="border border-primary rounded-full">
              <button
                className={`${
                  activeTab === "patient"
                    ? "bg-primary text-white"
                    : "text-gray-600"
                } uppercase text-sm font-bold px-10 py-5 rounded-full`}
                onClick={() => handleTabClick("patient")}
              >
                Patients
              </button>
              <button
                className={`${
                  activeTab === "caregiver"
                    ? "bg-primary text-white"
                    : "text-gray-600"
                } uppercase text-sm font-bold px-10 py-5 rounded-full`}
                onClick={() => handleTabClick("caregiver")}
              >
                Caregivers
              </button>
            </div>
          </div>

          <h2 className="text-4xl font-bold my-7">Lets Talk</h2>
          <p>
            Questions about Amazing Home Care? Fill out the form, and one of our
            representatives will help you get started.
          </p>

          {activeTab === "patient" ? <PatientForm /> : <CaregiversForm />}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
