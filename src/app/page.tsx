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
import AvailableAircrafts from "@/sections/AvailableAircrafts";
import WhatOurClientsSay from "@/sections/WhatOurClientsSay";
import Faqs from "@/sections/Faqs";

export const metadata = {
  title: "Specialized Aviation Services | Rotor Wing Services",
  description:
    "Rotor Wing Services offers expert aviation solutions, including crew resourcing, operational support, training, and consultancy. Partner with us for seamless global aviation operations.",
};

export default function Home() {
  const IconsItems = [
    {
      icon: "Routes_DistanceCalculator", // Keep icon, update text
      title: "Expert Crew Resourcing",
      description:
        "Access skilled pilots, crew, and technical experts worldwide.",
      bgcolor: "white",
    },
    {
      icon: "UsCanadaCities", // Keep icon, update text
      title: "Operational Support",
      description: "Optimize efficiency with tailored operational strategies.",
      bgcolor: "white",
    },
    {
      icon: "InternationalCities", // Keep icon, update text
      title: "Training Programs",
      description:
        "EASA, FAA, and GCAA-certified initial and continued training.",
      bgcolor: "white",
    },
    {
      icon: "Aircraft", // Keep icon, update text
      title: "Compliance & Auditing",
      description:
        "Full safety management and regulatory compliance solutions.",
      bgcolor: "white",
    },
    {
      icon: "Airports", // Keep icon, update text
      title: "Global Network",
      description: "24/7 support across international aviation operations.",
      bgcolor: "white",
    },
  ];
  return (
    <>
      <Hero
        video={"/images/Private jet interior bg .mp4"}
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
          "Rotor Wing Services is your premier global partner in specialized aviation services. We provide expert crew resourcing, operational support, comprehensive training, and strategic consultancy to ensure your aviation operations run seamlessly. With a network of skilled pilots, technical experts, and crew members, we deliver tailored solutions for temporary missions, long-term operations, and unique challenges. Our commitment to quality and safety ensures peak efficiency and preparedness for all your aviation needs."
        }
        IconsItems={IconsItems}
      />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      <FourMetrics />
      <AvailableAircrafts
        heading="Our Helicopter Fleet & Solutions"
        subHeading="Explore Rotor Wing Services' specialized aviation solutions and helicopter capabilities for diverse operational requirements."
      />
      <WhatOurClientsSay />
      <Faqs />
      {/* <BookYourPrivateJet /> */}
    </>
  );
}
