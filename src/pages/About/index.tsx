import AboutBanner from "@/components/AboutComponents/AboutBanner";
import RootLayout from "@/components/Layout/RootLayout";
import styles from "../../styles/home.module.css";
import Cateogory from "@/components/AboutComponents/Cateogory";
import PerfectMatch from "@/components/AboutComponents/PerfectMatch";
import RightCare from "@/components/AboutComponents/RightCare";
import AboutLanguage from "@/components/AboutComponents/AboutLanguage";
import ManagingWorks from "@/components/AboutComponents/ManagingWorks";

const AboutHome = () => {
  return (
    <>
      <div className={`${styles.about_bg}`}>
        <div className="flex custom-container pt-[40%] lg:pt-[10%]">
          <div className="">
            <h2 className="uppercase  font-black text-cyan-300 text-3xl lg:text-6xl">
              IT’S AN
            </h2>
            <h2 className="uppercase font-black text-white text-3xl lg:text-6xl">
              AMAZING STORY
            </h2>
            <p className="text-white max-w-xl my-10">
              When the care is compassionate and the service is top notch, you
              know you’re getting Amazing Home Care.
            </p>
          </div>
        </div>
      </div>

      <Cateogory></Cateogory>
      <PerfectMatch></PerfectMatch>
      <RightCare></RightCare>
      <AboutLanguage></AboutLanguage>
      <ManagingWorks></ManagingWorks>
    </>
  );
};

export default AboutHome;

AboutHome.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
