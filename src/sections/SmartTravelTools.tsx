import React from "react";
import {
  Routes_DistanceCalculator,
  CostCalculator,
  FlightTracker,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

interface SmartTravelToolsProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const SmartTravelTools: React.FC<SmartTravelToolsProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  let heading: string = "Operational Management Tools";
  let para: string =
    "Optimize your aviation operations with our specialized tools for compliance tracking, fleet management, and real-time operational oversight. Maintain peak efficiency and safety across all your aviation activities.";

  const data: CardInfo[] = [
    {
      icon: <CostCalculator />,
      title: "Compliance Tracker",
      description:
        "Monitor regulatory adherence and audit schedules in real-time",
      link: "/compliance-management",
    },
    {
      icon: <FlightTracker />,
      title: "Fleet Operations Dashboard",
      description:
        "Track aircraft maintenance status and operational readiness",
      link: "/fleet-management",
    },
    {
      icon: <Routes_DistanceCalculator />,
      title: "Crew Deployment Planner",
      description: "Optimize crew rotations and resource allocation globally",
      link: "/crew-management",
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

export default SmartTravelTools;
