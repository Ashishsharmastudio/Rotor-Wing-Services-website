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
  {
    title: "Maintenance & Technical Support",
    description:
      "We offer comprehensive technical support for helicopter maintenance operations worldwide. Our services ensure that your fleet remains operational, compliant, and safe, whether in the field or in the hangar.",
    items: [
      "Deployment of qualified maintenance teams worldwide for Line and Base Maintenance",
      "Extensive experience with civil, HEMS, SAR, offshore, and government-operated rotary-wing aircraft",
      "Aircraft Acceptance from OEMs - including technical inspections, documentation review, and delivery coordination",
      "Lease Acceptance & Redelivery Support - records audits, physical inspections, and compliance verification",
      "Pre-Purchase, Delivery & Return Inspections",
      "Maintenance Oversight",
      "AOG and Remote Field Support",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "Maintenance Organization & Infrastructure Development",
    description:
      "We provide end-to-end support for establishing and upgrading maintenance organizations and infrastructure. From planning new facilities to achieving regulatory certification, we help you build a foundation for operational excellence.",
    items: [
      "Complete setup of AMO, CAMO, and MCC units",
      "Facility planning - hangars, workshops, MCC rooms, vertiports, and helipads",
      "Construction coordination - contractor sourcing, technical supervision, and regulatory compliance",
      "Support for NCAA certification from concept through final approval",
      "Support through our extensive network of Part 21 Design Organizations (DOA) for design changes, modifications, and STC development",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "Compliance & Regulatory Assurance",
    description:
      "Navigate the complex landscape of aviation regulations with confidence. Our experts provide auditing, compliance reviews, and support to ensure your operations meet and exceed international and national standards.",
    items: [
      "Audit services across multiple authorities including:\n  - FAA (14 CFR Parts 21, 43, 65, 91, 135, 145, 147)\n  - EASA (Parts 21, 66, 145, 147)\n  - GCAA, GACA, and other international NCAAs",
      "Compliance review of MOEs, Exposition Manuals, and Procedures",
      "Internal/External audits, inspection readiness, and CAP/RCA support",
      "Integration of Safety Management (SMS) and Quality Systems (QMS)",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "MRO Optimization & Project Management",
    description:
      "Enhance the efficiency and effectiveness of your Maintenance, Repair, and Overhaul (MRO) operations. We apply proven methodologies and project management expertise to streamline workflows, control costs, and drive performance.",
    items: [
      "Workflow streamlining using Lean Six Sigma",
      "Maintenance scheduling and planning systems",
      "Reliability analysis, cost control, and KPI reporting tools",
      "Project management for MRO upgrades and organizational transitions",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "Training & Professional Development (via Rotor Wing Academy)",
    description:
      "In partnership with Rotor Wing Academy, we offer a wide range of training solutions to empower your team. From technical courses to leadership development, our programs are designed to foster excellence and ensure compliance.",
    items: [
      "General Familiarization & Type Courses (Bell, AW, Airbus, Sikorsky, Mil)",
      "Mandatory training: Human Factors, SMS, QMS, and NCAA compliance",
      "Leadership programs from supervisory to executive levels",
      "Customized development programs for MROs and operators",
    ],
    link: "rotorwingacademy.com",
  },
  {
    title: "Manpower & Talent Solutions (via Rotor Wing Team)",
    description:
      "Through Rotor Wing Team, we provide flexible and reliable manpower solutions. We connect you with highly skilled aviation professionals for short-term projects, long-term assignments, and permanent roles across the globe.",
    items: [
      "Global sourcing of licensed engineers, A&P mechanics, IA inspectors for annuals, CAMO, QA, MCC, and field support staff",
      "Capability to deploy both licensed and unlicensed maintenance personnel based on project needs",
      "Specialized support for HEMS, SAR, Offshore, and Government missions",
      "Competency assessments and short/long-term staffing",
      "Interim leadership and technical contract solutions",
    ],
    link: "info@rotorwingservices.com",
  },
  {
    title: "Digital Solutions & Innovation",
    description:
      "Leverage the power of technology to transform your operations. We provide cutting-edge digital solutions, from predictive maintenance platforms to advanced analytics, to help you innovate and stay ahead.",
    items: [
      "Predictive Maintenance & Risk Platforms (AeroGuardian)",
      "MRO Analytics & Workflow Optimization (MROlytics)",
      "Consulting on digital transformation and system integration",
      "Custom dashboards and performance intelligence tools",
    ],
    link: "info@rotorwingservices.com",
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
