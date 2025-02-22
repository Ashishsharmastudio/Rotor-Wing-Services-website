"use client";

import BrandNames from "@/sections/BrandNames";
import Image from "next/image";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Collapsible from "@/components/Collapsible";

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What services does Rotor Wing Services offer?",
      answer:
        "Rotor Wing Services provides specialized training, expert consultancy, and top-tier manpower solutions for the rotorcraft industry. Our services include helicopter operations optimization, maintenance management, airworthiness compliance, Advanced Air Mobility (AAM) solutions, and aircraft brokerage services.",
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer:
        "We conduct comprehensive compliance audits, implement Safety Management Systems (SMS), and provide up-to-date regulatory training aligned with EASA, FAA, GCAA, and ICAO standards. Our team stays current with global aviation regulations to ensure full compliance.",
    },
    {
      question: "What training programs are available?",
      answer:
        "We offer initial/recurrent type training, safety management courses, airworthiness training, and leadership development programs. Our training covers Airbus, Bell, Leonardo, and Sikorsky helicopter models, among others.",
    },
    {
      question: "Can you assist with aircraft modifications?",
      answer:
        "Yes, we provide end-to-end modification services including STC certification, avionics upgrades, and mission-specific modifications. We work with approved Design Organizations to ensure compliance and operational efficiency.",
    },
    {
      question: "What regions do you operate in?",
      answer:
        "While headquartered in Abu Dhabi, we serve clients globally. Our team has experience working in Europe, North America, Middle East, Asia, and Africa, adapting to regional regulations and operational requirements.",
    },
    {
      question: "How do I request a consultation?",
      answer:
        "Contact us via email at info@rotorwingservices.com or through our website's contact form. We typically respond within 24 hours to discuss your specific needs and develop a tailored solution.",
    },
    {
      question: "What makes you different from other consultancies?",
      answer:
        "Our team combines decades of hands-on operational experience with current regulatory expertise. We focus on practical, implementable solutions rather than theoretical approaches, ensuring immediate impact on your operations.",
    },
    {
      question: "Do you support Advanced Air Mobility (AAM) solutions?",
      answer:
        "Yes, we specialize in HVTOL/eVTOL development support, including certification processes, operational integration, and infrastructure planning for next-generation air mobility solutions.",
    },
    {
      question: "How can I join your team?",
      answer:
        "We're always seeking experienced aviation professionals. Submit your CV to careers@rotorwingservices.com. We hire for roles in engineering, consultancy, training, and project management.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We support offshore energy, EMS, law enforcement, military, corporate aviation, and MRO providers. Our solutions are adaptable to any sector using rotorcraft operations.",
    },
  ];

  return (
    <>
      <div className="bg-[url('/hero_images/1.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white">
          About us
        </h1>
      </div>

      <BrandNames />

      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 pb-0 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <div className="flex gap-8 min-[900px]:items-center flex-col lg:flex-row">
            <div className="flex-1 text-center">
              <h2 className=" font-bold text-darkBlue mb-6">
                About Rotor Wing Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Rotor Wing Services, we are dedicated to elevating the
                rotorcraft industry by providing specialized training, expert
                consultancy, and top-tier manpower solutions. With a deep-rooted
                passion for aviation excellence, we help operators, MROs, and
                aviation organizations achieve the highest standards of safety,
                efficiency, and regulatory compliance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our expertise spans across helicopter operations, maintenance
                optimization, fleet planning, airworthiness management,
                modifications, and Advanced Air Mobility (AAM) solutions,
                ensuring that our clients receive tailored, industry-leading
                support. Backed by decades of hands-on experience, our team of
                aviation professionals delivers practical, results-driven
                strategies to enhance operations and drive continuous
                improvement.
              </p>
              <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <p className="text-darkBlue font-semibold">
                  Excellence in Aviation Starts Here.{" "}
                  <a
                    href="mailto:info@rotorwingservices.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@rotorwingservices.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-darkBlue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To elevate the global helicopter industry through exceptional
                training, consultancy, and manpower solutions. We empower
                aviation professionals with knowledge and skills to maintain
                highest safety standards and regulatory compliance while
                fostering innovation and continuous improvement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-darkBlue mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global benchmark for excellence in helicopter training
                and consultancy, leading the industry towards safer, more
                efficient operations through quality, expertise, and strategic
                guidance for sustainable growth.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <Collapsible
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  iconStyle="caret"
                  iconPosition="end"
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                  classNames="mb-4 bg-white rounded-lg shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
