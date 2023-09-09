import React from "react";
import styles from "../../styles/home.module.css";
import RootLayout from "@/components/Layout/RootLayout";
import ServicesCategory from "@/components/Services/ServicesCategory";
import HealthAides from "@/components/Services/HealthAides";
import AmazingCare from "@/components/Services/AmazingCare";

const Service = () => {
  return (
    <>
      <div className={`${styles.service_bg}`}>
        <div className="flex custom-container pt-[40%] lg:pt-[10%]">
          <div className="l">
            <h2 className="uppercase leading-10 font-black text-cyan-300 text-2xl lg:text-4xl">
              Helping People
            </h2>
            <h2 className="uppercase font-black text-white text-3xl lg:text-6xl">
              is Our Calling
            </h2>
            <p className="text-white max-w-xl my-10">
              When the care is compassionate and the service is top notch, you
              know you’re getting Amazing Home Care.
            </p>
          </div>
        </div>
      </div>
      <ServicesCategory></ServicesCategory>
      <HealthAides></HealthAides>
      <AmazingCare></AmazingCare>
    </>
  );
};

export default Service;

Service.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
