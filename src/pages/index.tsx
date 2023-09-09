import AllienceHomeCare from "@/components/Home/AllienceHomeCare";
import Banner from "@/components/Home/Banner";
import BannerBottomCard from "@/components/Home/BannerBottomCard";
import CallingGrate from "@/components/Home/CallingGrate";
import CenterCare from "@/components/Home/CenterCare";
import FlexibleCare from "@/components/Home/FlexibleCare";

import PersonalCare from "@/components/Home/PersonalCare";
import SlideSection from "@/components/Home/SlideSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <BannerBottomCard></BannerBottomCard>
      <PersonalCare></PersonalCare>
      <FlexibleCare></FlexibleCare>
      <WhatWeDo></WhatWeDo>
      <SlideSection></SlideSection>
      <AllienceHomeCare></AllienceHomeCare>
      {/* <CallingGrate></CallingGrate> */}
      {/* <CenterCare></CenterCare> */}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
