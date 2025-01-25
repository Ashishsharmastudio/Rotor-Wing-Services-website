import React from "react";
import {
  RequestQuote,
  ReceiveCharterProposal,
  ConfirmAircraft,
  ReceiveFlightBrief,
} from "@/svg";

const CharterProcessSteps = () => {
  const steps = [
    {
      icon: <RequestQuote />,
      title: "Initial Consultation",
      description:
        "Begin with a detailed needs assessment where we evaluate your operational requirements, safety standards, and regulatory compliance needs through direct communication with our experts.",
    },
    {
      icon: <ReceiveCharterProposal />,
      title: "Tailored Planning",
      description:
        "Receive a customized operational plan including crew resourcing strategies, training schedules, and maintenance solutions specifically designed for your aviation operations.",
    },
    {
      icon: <ConfirmAircraft />,
      title: "Expert Execution",
      description:
        "We deploy skilled pilots, technical teams, and operational resources while ensuring full compliance with aviation regulations and safety protocols.",
    },
    {
      icon: <ReceiveFlightBrief />,
      title: "Ongoing Support",
      description:
        "Continuous monitoring and support with regular audits, performance reviews, and 24/7 technical assistance to maintain operational excellence.",
    },
  ];

  return (
    <section className="px-5 md:px-10 lg:px-20 min-h-screen h-auto flex items-center">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-2">
        <h2 className="md:w-5/12 mb-4">
          Our 4-Step{" "}
          <span className="inline-block border-b-2 text-darkBlue border-darkBlue">
            Operational Process
          </span>
        </h2>
        <div className="md:w-7/12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-2">
                <div className="flex pt-2 flex-shrink-0">{step.icon}</div>
                <div className="">
                  <h3 className="mb-1 font-bold text-darkBlue">{step.title}</h3>
                  <p className="">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="h-14 mb-2 ml-[30px] border-l-2 border-l-darkBlue"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharterProcessSteps;
