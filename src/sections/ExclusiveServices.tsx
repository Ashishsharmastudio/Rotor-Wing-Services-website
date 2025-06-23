
import React from "react";
import {
  OnDemandCharter,
  GroupCharter,
  AirAmbulance,
  Helicopter,
  EmptyLeg,
  IndustrySpecific,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

interface ExclusiveServicesProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const ExclusiveServices: React.FC<ExclusiveServicesProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  let heading: string = "Our Exclusive Aviation Services";
  let para: string =
    "Rotor Wing Services delivers specialized aviation solutions through a global network of experts, ensuring operational excellence and regulatory compliance.";

  const data: CardInfo[] = [
    {
      icon: <OnDemandCharter />, // Repurposed for crew availability
      title: "Crew Resourcing",
      description:
        "Access skilled pilots and technical experts for mission-critical operations",
      link: "/crew-resourcing",
    },
    {
      icon: <GroupCharter />, // Repurposed for team operations
      title: "Operational Support",
      description:
        "Comprehensive solutions for fleet management and daily operations",
      link: "/operational-support",
    },
    {
      icon: <AirAmbulance />, // Repurposed for urgent training needs
      title: "Training Programs",
      description: "EASA/FAA certified initial and recurrent aviation training",
      link: "/training-programs",
    },
    {
      icon: <Helicopter />, // Repurposed for aviation consultancy
      title: "Aviation Consultancy",
      description: "Expert solutions for fleet optimization and modifications",
      link: "/aviation-consultancy",
    },
    {
      icon: <EmptyLeg />, // Repurposed for maintenance efficiency
      title: "Maintenance & Compliance",
      description: "Full-spectrum airworthiness management and audits",
      link: "/maintenance-compliance",
    },
    {
      icon: <IndustrySpecific />, // Repurposed for global reach
      title: "Global Network",
      description: "24/7 worldwide support for aviation operations",
      link: "/global-network",
    },
  ];

  return (
    <CustomComponent
      heading={heading}
      para={para}
      background="white"
      items={data}
      hasPadding={hasSectionPadding}
      hasInlinePadding={hasInlinePadding}
    />
  );
};

export default ExclusiveServices;
