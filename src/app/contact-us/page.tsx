import React from "react";
import ContactUsForm from "../../components/ContactUsForm";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BrandNames from "@/sections/BrandNames";
import SmartTravelTools from "@/sections/SmartTravelTools";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";

const ContactUsPage = () => {
  const contactPoints = [
    "Looking for specialized aviation training?",
    "Need expert consultancy in airworthiness, compliance, or fleet management?",
    "Searching for qualified aviation professionals?",
    "Interested in our project management or aircraft brokerage services?",
  ];

  return (
    <>
      <div className="relative bg-[url('/hero_images/2.png')] overlay bg-cover bg-center bg-no-repeat min-h-[130px] sm:min-h-[190px] lg:min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative px-4 sm:px-6 lg:px-8 max-w-[1800px] w-full mx-auto text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Contact Us – Let's Elevate Your Aviation Operations
        </h1>
      </div>

      <BrandNames />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 sm:py-12">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg">
                At Rotor Wing Services, we are here to support your training,
                consultancy, manpower, and operational needs. Whether you
                require expert guidance, tailored solutions, or have inquiries
                about our services, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">HEADQUARTERS</h3>
              <div className="space-y-1">
                <p className="text-gray-600">Masdar City, Abu Dhabi U.A.E.</p>
                <p className="text-gray-600">
                  <a
                    href="tel:+97150123476"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Phone: +971 50 123 4760
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@rotorwingservices.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Email: info@rotorwingservices.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                {contactPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">✔</span>
                    <p className="text-gray-800">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <a
                href="mailto:info@rotorwingservices.com"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 text-lg"
              >
                Send us a message today, and let's take your aviation operations
                to the next level!
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <ContactUsForm />
          </div>
        </div>
      </div>

      <SmartTravelTools />
      <PopularPrivateJetCharters />
    </>
  );
};

export default ContactUsPage;
