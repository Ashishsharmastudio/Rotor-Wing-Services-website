import React from "react";
import {
  OnDemandCharter,
  ProvenSafetyRecords,
  Reliability,
  Transparency,
  Testimonials,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

const AboutUs = () => {
  // Updated heading and description to reflect Rotor Wing Services
  let heading: string = "Why Partner with Rotor Wing Services?";
  let para: string =
    "Rotor Wing Services is your trusted global partner in specialized aviation solutions. With a network of 500+ skilled pilots, crew members, and technical experts, we deliver 24/7 operational support tailored to your unique challenges. Our commitment to safety, compliance, and precision ensures seamless operations for missions ranging from emergency response to long-term fleet management. We prioritize transparency and trust, offering customized solutions for crew resourcing, training, and regulatory compliance.";

  // Updated card titles/descriptions to match Rotor Wing Services' offerings
  const data: CardInfo[] = [
    {
      icon: <OnDemandCharter />,
      title: "Global Crew Resourcing",
      description:
        "Access a network of certified pilots and technical experts, available on-demand",
      link: "/",
    },
    {
      icon: <ProvenSafetyRecords />,
      title: "Safety & Compliance Excellence",
      description:
        "EASA/FAA/GCAA-certified operations with a 100% safety record",
      link: "/",
    },
    {
      icon: <Reliability />,
      title: "Operational Reliability",
      description:
        "24/7 support for missions, maintenance, and regulatory compliance",
      link: "",
    },
    {
      icon: <Transparency />,
      title: "Tailored Consultancy",
      description:
        "Customized solutions for fleet optimization and airworthiness",
      link: "",
    },
    {
      icon: <Testimonials />,
      title: "Industry Recognition",
      description:
        "Trusted by governments, MROs, and offshore operators worldwide",
      link: "",
    },
  ];

  return (
    <CustomComponent
      heading={heading}
      para={para}
      background="image"
      items={data}
    />
  );
};

export default AboutUs;
