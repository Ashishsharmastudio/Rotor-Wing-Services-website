import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import BrandNames from "@/sections/BrandNames";
import { Linkedin } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurTeamPage = () => {
const teamData = [
  {
    sectionTitle: "Our Team – Experts Driving Excellence in Aviation",
    description:
      "At Rotor Wing Services, our strength lies in our team of seasoned aviation professionals with extensive experience in helicopter operations, maintenance, compliance, training, and project management. With backgrounds in MROs, regulatory agencies, CAMO, fleet management, and aviation training, our experts bring decades of hands-on industry knowledge to support our clients in achieving the highest standards of safety, efficiency, and compliance.",
  },
  {
    sectionTitle: "Meet Our Leadership Team",
    members: [
      {
        name: "James Carter",
        position: "Founder & CEO",
        image: "/images/James-Carter.png",
        bio: "With over three decades of experience in aircraft maintenance, quality management, and regulatory compliance, James has worked with leading MROs, operators, and government aviation agencies. He is a licensed aircraft maintenance engineer, a certified aviation instructor, and an experienced project manager, dedicated to elevating industry standards through training, consultancy, and manpower solutions.",
        linkedin: "#",
      },
      {
        name: "Emma Collins",
        position: "Head of Training & Compliance",
        image: "/images/Emma-Collins.png",
        bio: "An aviation training expert with a strong background in regulatory compliance, SMS, and safety training, Emma leads our training division, ensuring that our courses meet international aviation standards and are tailored to our clients' operational needs.",
        linkedin: "#",
      },
      {
        name: "Daniel Hayes",
        position: "Director of Operations",
        image: "/images/Daniel-Hayes.png",
        bio: "With extensive experience in fleet management, maintenance planning, and aircraft leasing, Daniel ensures that our clients receive optimized, cost-effective, and compliant operational solutions.",
        linkedin: "#",
      },
      {
        name: "Michael Turner",
        position: "Lead Consultant, Airworthiness & CAMO",
        image: "/images/Michael-Turner.png",
        bio: "A certified airworthiness specialist, Michael has worked with major aviation authorities and MROs, providing expertise in compliance monitoring, continuous airworthiness management, and technical records auditing.",
        linkedin: "#",
      },
      {
        name: "Sophia Bennett",
        position: "Head of Manpower & Recruitment",
        image: "/images/Sophia-Bennett.png",
        bio: "With a deep network of aviation professionals, Sophia ensures that our clients have access to qualified engineers, technicians, pilots, and safety experts, meeting workforce demands across government contracts, commercial operators, and MROs.",
        linkedin: "#",
      },
      {
        name: "Jonathan Reed",
        position: "Senior Project Manager",
        image: "/images/Jonathan-Reed.png",
        bio: "A specialist in aviation project management, Jonathan oversees modification programs, STC integrations, fleet expansions, and lease transitions, ensuring on-time, compliant, and cost-effective solutions.",
        linkedin: "#",
      },
    ],
  },
  {
    sectionTitle: "Working with Us – Join the Rotor Wing Services Team",
    description:
      "At Rotor Wing Services, we are committed to excellence, innovation, and continuous improvement in the rotorcraft industry. Whether you're an experienced aviation professional or looking to grow your career in maintenance, training, airworthiness, compliance, or project management, we offer exciting opportunities to work on cutting-edge projects worldwide.",
    reasonsToJoin: [
      "Global Opportunities – Work with leading operators, MROs, and aviation organizations worldwide.",
      "Career Growth & Development – Access training, certifications, and career advancement opportunities.",
      "Innovative & Dynamic Environment – Be part of a team that is shaping the future of helicopter operations, safety, and training.",
      "Flexible Work Arrangements – Contract, project-based, and full-time opportunities tailored to your expertise.",
      "Collaborate with Industry Experts – Work alongside some of the best professionals in the field.",
    ],
    opportunitiesAvailable: [
      "Licensed Aircraft Engineers & Technicians",
      "CAMO & Airworthiness Specialists",
      "Quality & Compliance Professionals",
      "Training Instructors & Aviation Consultants",
      "Project Managers & Technical Experts",
    ],
    contactLink: "info@rotorwingservices.com",
  },
  {
    sectionTitle: "Media & Insights",
    description:
      "Stay up to date with the latest industry trends, company news, and expert insights from Rotor Wing Services.",
    insights: [
      "🚁 Industry Updates – News on regulatory changes, technology advancements, and market trends.",
      "📢 Company Announcements – Our latest projects, partnerships, and achievements.",
      "🎥 Videos & Webinars – Expert discussions, training highlights, and behind-the-scenes footage.",
      "📝 Articles & Case Studies – In-depth analysis and success stories from our aviation projects.",
    ],
    followUs:
      "Follow us for the latest in rotorcraft operations, airworthiness, training, and aviation consultancy!",
  },
  {
    sectionTitle: "Customer Reviews – What Our Clients Say",
    reviews: [
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "Rotor Wing Services has been instrumental in optimizing our helicopter maintenance operations. Their expertise in compliance, CAMO support, and manpower solutions has significantly improved our fleet availability while ensuring full regulatory compliance.",
        client: "Ahmed R., Maintenance Director, UAE-based Helicopter Operator",
      },
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "The team at Rotor Wing Services provided outstanding support during our aircraft acquisition process. Their pre-purchase inspection was thorough, and their expertise helped us make an informed decision. Highly recommended for anyone in the helicopter industry!",
        client: "James L., Fleet Manager, European Leasing Company",
      },
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "We needed urgent staffing support for our offshore operations, and Rotor Wing Services delivered. Their ability to provide experienced, highly qualified engineers on short notice was impressive. A reliable partner for aviation workforce solutions.",
        client: "Maria T., HR Manager, Oil & Gas Aviation Services",
      },
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "Rotor Wing Services played a key role in the successful STC modifications of our AW139 fleet. Their project management skills, industry connections, and technical expertise ensured the modifications were completed on time and met all regulatory requirements.",
        client: "David S., Technical Director, North American MRO",
      },
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "The regulatory and compliance training provided by Rotor Wing Services was top-notch. Their instructors are experienced professionals with real-world knowledge, making the courses highly relevant and practical.",
        client: "Sofia G., Safety & Compliance Officer, Helicopter Operator",
      },
      {
        rating: "⭐⭐⭐⭐⭐",
        review:
          "From initial aircraft acceptance to delivery, Rotor Wing Services managed the entire process seamlessly. Their attention to detail, regulatory knowledge, and hands-on support were invaluable. We look forward to working with them again.",
        client: "Carlos M., Operations Director, Government Aviation Agency",
      },
    ],
    contactLink: "info@rotorwingservices.com",
  },
];


  return (
    <>
      {/* Header Section */}
      <div className="bg-[url('/hero_images/3.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white">
          Our Team
        </h1>
      </div>

      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 pb-0 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      <section className="px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
        {/* Team Overview */}
        <div className="flex justify-between">
          <div className="w-full max-[650px]:w-full text-center">
            <h2 className="mb-5 mt-6">
              {teamData[0]?.sectionTitle || "Our Team"}
            </h2>
            <p className="text-[#727982] text-md text-center mb-[50px] details">
              {teamData[0]?.description || ""}
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <h2 className="text-center mb-[30px]">
          {teamData[1]?.sectionTitle || "Leadership"}
        </h2>
        <div className="flex items-center justify-between flex-wrap">
          {teamData[1]?.members?.map((member, index) => (
            <div
              key={index}
              className="w-[32%] rounded-2xl mb-6 max-[700px]:w-full border-[3px] bg-blue-background hover:shadow-card_shadow bg-cover h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6 text-white transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-[160px] h-[160px] rounded-full"
              />
              <h4 className="text-[20px] font-bold mt-4 mb-4">{member.name}</h4>
              <span className="mb-5 text-[12px] text-white">
                {member.position}
              </span>
              <p className="text-center text-[15px]">{member.bio}</p>
              {member.linkedin && (
                <div className="flex gap-x-[30px] mt-[30px]">
                  <Link href={member.linkedin}>
                    <Linkedin className="w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Working with Us */}
        <h2 className="text-center mt-16">
          {teamData[2]?.sectionTitle || "Join Us"}
        </h2>
        <p className="text-[#727982] text-md text-center mb-[30px] details">
          {teamData[2]?.description || ""}
        </p>
        <ul className="list-disc pl-5 md:pl-10 lg:pl-20 text-gray-800">
          {teamData[2]?.reasonsToJoin?.map((reason, index) => (
            <li key={index} className="mb-2">
              {reason}
            </li>
          ))}
        </ul>

        {/* Media & Insights */}
        <h2 className="text-center mt-16">
          {teamData[3]?.sectionTitle || "Insights"}
        </h2>
        <ul className="list-disc pl-5 md:pl-10 lg:pl-20 text-gray-800">
          {teamData[3]?.insights?.map((insight, index) => (
            <li key={index} className="mb-2">
              {insight}
            </li>
          ))}
        </ul>
        <p className="text-center mt-6">{teamData[3]?.followUs}</p>

        {/* Customer Reviews */}
        <h2 className="text-center mt-16">
          {teamData[4]?.sectionTitle || "Customer Reviews"}
        </h2>
        <div className="flex flex-col gap-6">
          {teamData[4]?.reviews?.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <p className="text-lg font-bold">{review.rating}</p>
              <p className="text-gray-700">{review.review}</p>
              <p className="text-gray-600 font-semibold mt-2">
                — {review.client}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6">
          Want to experience the same level of excellence?{" "}
          <Link
            href={`mailto:${
              teamData[4]?.contactLink || "info@rotorwingservices.com"
            }`}
            className="text-blue-500"
          >
            Contact us today
          </Link>
        </p>
      </section>
    </>
  );
};

export default OurTeamPage;
