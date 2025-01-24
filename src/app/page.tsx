import Hero from "@/sections/Hero";
import BrandNames from "@/sections/BrandNames";
import CompanyOverview from "@/sections/CompanyOverview";
import AboutUs from "@/sections/AboutUs";
import ExclusiveServices from "@/sections/ExclusiveServices";
import OurOffices from "@/sections/OurOffices";
import CharterProcessSteps from "@/sections/CharterProcessSteps";
import FourMetrics from "@/sections/FourMetrics";
import SmartTravelTools from "@/sections/SmartTravelTools";
import OurComitment from "@/sections/OurComitment";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";
import MeetOwner from "@/sections/MeetOwner";
import AvailableAircrafts from "@/sections/AvailableAircrafts";
import WhatOurClientsSay from "@/sections/WhatOurClientsSay";
import Faqs from "@/sections/Faqs";

export const metadata = {
  title: "Private Jet Charter & Jet Rental Service | JetLevel Aviation",
  description:
    "JetLevel Aviation offers premier 24/7 private jet charter services. Experience unparalleled luxury and flawless travel with us. Elevate your journey today.",
};

export default function Home() {
  const IconsItems = [
    {
      icon: "Routes_DistanceCalculator",
      title: "Routes",
      description: "Explore diverse routes for your travel needs.",
      bgcolor: "white",
    },
    {
      icon: "UsCanadaCities",
      title: "US & Canada Cities",
      description: "Connect to major cities across US and Canada.",
      bgcolor: "white",
    },
    {
      icon: "InternationalCities",
      title: "International Cities",
      description: "Fly globally to various international destinations.",
      bgcolor: "white",
    },
    {
      icon: "Aircraft",
      title: "Aircraft",
      description: "Choose from a wide range of luxury jets.",
      bgcolor: "white",
    },
    {
      icon: "Airports",
      title: "Airports",
      description: "Access convenient airports for your journey.",
      bgcolor: "white",
    },
  ];
  return (
    <>
      <Hero
        image={"/images/Private jet interior bg .webp"}
        title={"Empower Your Aviation Operations Globally"}
        subtitle={"Your Strategic Aviation Partner"}
        tagline={"Expert Solutions, Unmatched Precision."}
        hasCalculator={true}
        hasOverlay={false}
      />
      <BrandNames />
      <CompanyOverview
        heading="Empowering Aviation Operators Globally"
        collapseText={true}
        description={
          "Rotor Wing Services stands as your premier global partner in specialized aviation services. Founded on the principles of expertise and precision, we deliver comprehensive solutions that transform operational challenges into strategic opportunities. Our network of skilled pilots, technical experts, and crew members provides tailored support ranging from temporary mission assistance to long-term operational strategies. We pride ourselves on offering end-to-end services including crew resourcing, operational optimization, specialized training, and strategic consultancy. With an unwavering commitment to quality and safety, we ensure your aviation operations maintain peak efficiency and preparedness."
        }
        IconsItems={IconsItems}
      />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      {/*       <MeetOwner /> */}
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      <FourMetrics />
      <AvailableAircrafts
        heading="Available Private Jets"
        subHeading="We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below."
      />
      <WhatOurClientsSay />
      <Faqs />
      {/* <BookYourPrivateJet /> */}
    </>
  );
}
