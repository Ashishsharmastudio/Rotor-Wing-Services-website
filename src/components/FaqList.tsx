"use client";
import { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "How quickly can you deploy crew for urgent operations?",
    answer:
      "Our global network enables 24/7 crew deployment within 2-4 hours for emergency missions, with full compliance to EASA/FAA regulations. We maintain standby teams across major aviation hubs for rapid response.",
  },
  {
    question: "What certifications do your training programs include?",
    answer:
      "We offer EASA Part-66, FAA A&P, and GCAA CAR-66 certifications, with type ratings for Airbus H-series, Bell 400-series, and Sikorsky helicopters. Training includes SMS implementation and human factors modules.",
  },
  {
    question: "How do you ensure regulatory compliance?",
    answer:
      "Our Safety Management System (SMS) exceeds ICAO Annex 6 standards, with automated compliance tracking and monthly audits. We maintain CAR 21/JAR 145 certifications and MIL-STD-882 compliance for defense contracts.",
  },
  {
    question: "Can you support military aviation contracts?",
    answer:
      "Yes, we hold UAEMAR certification and maintain teams trained to TAMMS-A standards. Our secure clearance protocols and MIL-STD-882 compliance ensure readiness for defense operations worldwide.",
  },
];

const FaqList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (openIndex !== null && faqRefs.current[openIndex]) {
      faqRefs.current[openIndex]!.style.height = `${
        faqRefs.current[openIndex]!.scrollHeight
      }px`;
    }
    faqRefs.current.forEach((faq, idx) => {
      if (idx !== openIndex && faq) {
        faq.style.height = "0px";
      }
    });
  }, [openIndex]);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="lg:absolute mt-5 lg:mt-0 left-[40%] top-10">
      {faqData.map((faq, index) => (
        <div key={index} className="bg-gray-100 px-3 py-1 mb-3">
          <h3
            className="flex items-center justify-between font-bold text-darkBlue cursor-pointer mb-2"
            onClick={() => toggleFaq(index)}
          >
            {faq.question} <FaCaretDown />
          </h3>
          <div
            ref={(el) => {
              faqRefs.current[index] = el;
            }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ height: "0px" }}
          >
            <p className="text-gray-800">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
