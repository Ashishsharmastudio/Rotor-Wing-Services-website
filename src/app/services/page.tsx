"use client";

import React, { useState } from "react";
import Collapsible from "@/components/Collapsible";
import Hero from "@/sections/Hero";
import BrandNames from "@/sections/BrandNames";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    
const servicesData = [
  {
    title: "Our Services",
    description:
      "Elevate Your Rotorcraft Operations with Rotor Wing Services\n\nAt Rotor Wing Services, we provide specialized training, expert consultancy, and top-tier manpower solutions to help the helicopter industry achieve the highest standards of safety, efficiency, and compliance. Whether you need customized training programs, regulatory guidance, or skilled aviation professionals, we deliver tailored solutions designed to enhance your operations.\n\nPartner with us to drive excellence in the rotorcraft industry.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Expert Consultancy Services for the Rotorcraft Industry",
    description:
      "At Rotor Wing Services, we provide specialized consultancy solutions to help helicopter operators, MROs, and aviation authorities achieve regulatory compliance, operational efficiency, and the highest safety standards.\n\nOur team of industry experts offers guidance on airworthiness, maintenance management, safety audits, and regulatory oversight, ensuring your operations meet and exceed global aviation standards.\n\nOptimize your processes, enhance safety, and stay compliant with our expert consultancy services.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Helicopter Operation & Maintenance Optimization",
    description:
      "At Rotor Wing Services, we specialize in enhancing the efficiency, safety, and reliability of helicopter operations and maintenance. Our expert-driven solutions focus on streamlining maintenance workflows, improving fleet availability, reducing downtime, and ensuring regulatory compliance.\n\nThrough best-practice methodologies, data-driven strategies, and hands-on industry expertise, we help operators and MROs maximize operational performance, optimize maintenance schedules, and enhance cost efficiency—all while maintaining the highest safety and quality standards.\n\nAchieve peak performance in your helicopter operations with our tailored optimization solutions.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Strategic Fleet Planning for Helicopter Operations",
    description:
      "At Rotor Wing Services, we provide expert fleet planning solutions designed to optimize your helicopter operations for efficiency, cost-effectiveness, and long-term sustainability. Our services help operators, MROs, and aviation organizations select, manage, and scale their fleets to meet operational demands while ensuring compliance, safety, and performance excellence.\n\nFrom aircraft selection and lifecycle management to capacity planning and cost optimization, our industry experts deliver data-driven insights and tailored strategies to help you make informed decisions that maximize fleet availability and operational readiness.\n\nPlan smarter, operate efficiently, and future-proof your helicopter fleet with our expert guidance.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Helicopter Modifications & Operational Solutions",
    description:
      "At Rotor Wing Services, we provide expert guidance on aircraft modifications and operational solutions to enhance performance, safety, and mission capability. Whether you need STC upgrades, avionics enhancements, role-specific modifications, or performance optimizations, our team ensures seamless integration, regulatory compliance, and operational efficiency.\n\nWith our extensive network of approved Design Organizations (Part 21), we help you customize solutions to meet your specific operational needs, ensuring modifications are fully compliant with industry regulations and tailored to your mission requirements.\n\nWe work closely with operators, MROs, and aviation authorities to develop and implement tailored solutions that align with mission requirements, industry standards, and cost-effectiveness, ensuring your fleet is optimized for peak performance in any operational environment.\n\nUpgrade, enhance, and optimize your helicopter operations with our expert modification and operational solutions.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Airworthiness Management & Compliance Solutions",
    description:
      "At Rotor Wing Services, we provide comprehensive airworthiness solutions to ensure your helicopter fleet remains safe, compliant, and operationally efficient. Our team of experts supports operators with continuous airworthiness management, regulatory compliance, maintenance planning, and certification support.\n\nWith our extensive experience in CAMO (Continuing Airworthiness Management Organization) operations, we help you navigate airworthiness directives, service bulletins, modifications, and inspections—ensuring your aircraft meet the highest safety and regulatory standards.\n\nFrom initial certification to ongoing compliance monitoring, we tailor our solutions to keep your fleet airworthy, cost-effective, and mission-ready at all times.\n\nEnsure the highest level of safety and compliance with our expert airworthiness management solutions.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Support for Maintenance Organizations",
    description:
      "At Rotor Wing Services, we provide specialized support for Maintenance Organizations (MROs) to enhance efficiency, compliance, and operational excellence. Our expertise covers regulatory compliance, quality assurance, process optimization, workforce development, and safety management, ensuring that your maintenance operations meet the highest industry standards.\n\nWe assist MROs with certification support, auditing, training, and implementation of best practices to streamline maintenance workflows, improve turnaround times, and optimize resource utilization. With our deep understanding of CAMO integration and regulatory frameworks, we help maintenance organizations stay compliant with global aviation regulations while maximizing operational performance.\n\nPartner with us to strengthen your MRO capabilities and achieve excellence in helicopter maintenance operations.",
    link: "info@rotorwingservices.com",
  },
  {
    title: "Aviation Auditing Services",
    description:
      "At Rotor Wing Services, we provide comprehensive auditing solutions to help helicopter operators, MROs, and aviation organizations maintain the highest standards of safety, compliance, and operational efficiency. Our expert auditors conduct independent, objective evaluations aligned with ICAO, EASA, FAA, GCAA, and other regulatory requirements, ensuring full regulatory compliance and best industry practices.\n\nEnsure regulatory compliance, mitigate risks, and drive continuous improvement with our expert auditing services.",
    items: [
      "Regulatory Compliance Audits – Ensuring adherence to local and international aviation regulations.",
      "Quality Assurance Audits – Assessing maintenance, operational, and airworthiness processes for efficiency and safety.",
      "Safety & SMS Audits – Evaluating Safety Management System effectiveness and risk mitigation strategies.",
      "Supplier & Vendor Audits – Verifying compliance and reliability of external service providers.",
      "Gap Analysis & Corrective Action Planning – Identifying areas for improvement and supporting corrective action implementation.",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "Specialized Training Solutions for the Rotorcraft Industry",
    description:
      "At Rotor Wing Services, we provide comprehensive and industry-leading training programs designed to enhance the skills, knowledge, and regulatory compliance of aviation professionals. Our training covers initial and recurrent technical courses, regulatory training, and leadership development, ensuring your team is equipped to meet the highest industry standards.\n\nInvest in expertise—train with Rotor Wing Services and partners and elevate your aviation standards.",
    items: [
      "Initial & Recurrent Type Training – Covering several helicopter models from various OEMs (Airbus, Bell, Boeing, Leonardo, MD, and Sikorsky).",
      "Regulatory & Compliance Training – EASA, FAA, GCAA, ICAO, and other regulatory frameworks.",
      "Safety & SMS Training – Risk management, hazard identification, and safety culture enhancement.",
      "Airworthiness & CAMO Training – Continuing airworthiness management and regulatory requirements.",
      "Maintenance & Technical Training – Best practices in helicopter maintenance and operational efficiency.",
      "Specialized Aviation Training – Human Factors, SMS, EWIS, Fuel Tank Safety, and other mandatory aviation training.",
      "Leadership & Management Courses – Designed to enhance supervisory, decision-making, and organizational leadership skills.",
    ],
    link: "rotorwingacademy.com",
  },
];


  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Rotor Wing Services – Expert Helicopter Solutions"
        image="/images/Helicopter Hero.jpg"
        hasOverlay={true}
        hasCalculator={false}
      />

      {/* Brand Section */}
      <BrandNames />

      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 pb-0 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      {/* Services Section */}

      <div className="flex flex-col justify-center gap-y-[20px] pt-8">
        <div className="flex-1 text-center max-w-[1800px] mx-auto w-full">
          <h2 className=" font-bold text-darkBlue mb-6">Rotor Wing Services</h2>
          {servicesData.map((service, index) => (
            <Collapsible
              key={index}
              question={service.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              <div className="mb-8">
                <p className="leading-7 text-[16px] text-[#727982] mb-4">
                  {service.description}
                </p>

                {/* Render list items if available */}
                {service.items && (
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">✔</span>
                        <p className="text-[#727982] leading-7">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact Link */}
                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                  <p className="text-darkBlue font-semibold">
                    Get in touch:{" "}
                    <a
                      href={`mailto:${service.link}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {service.link}
                    </a>
                  </p>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
